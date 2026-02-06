// ==========================================
// 💜 LOGIC ENGINE (DO NOT EDIT BELOW) 💜
// ==========================================

// Global State
let currentQuestionIndex = 0;
let isMusicPlaying = false;
let audio = new Audio(CONFIG.music.musicUrl);
audio.loop = true;
audio.volume = CONFIG.music.volume;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set Title
    document.title = CONFIG.pageTitle;

    // Set Colors
    document.body.style.background = `linear-gradient(135deg, ${CONFIG.colors.backgroundStart}, ${CONFIG.colors.backgroundEnd})`;
    document.body.style.color = CONFIG.colors.textColor;

    // Create Background Elements
    createFloatingEmojis();

    // Setup Music
    if (CONFIG.music.enabled) setupMusic();

    // Start Question Flow
    showQuestion(0);
});

// --- CORE FUNCTION: Show Question ---
function showQuestion(index) {
    const container = document.getElementById('questions') || document.body;
    
    // Clear previous question
    // If you have a specific container for questions in your HTML, use that. 
    // Otherwise this creates/clears a div with id 'question-container'
    let qContainer = document.getElementById('question-container');
    if (!qContainer) {
        qContainer = document.createElement('div');
        qContainer.id = 'question-container';
        qContainer.style.textAlign = 'center';
        qContainer.style.zIndex = '10';
        qContainer.style.position = 'relative';
        container.appendChild(qContainer);
    }
    qContainer.innerHTML = ""; // Wipe content

    // 1. Check if we are done
    if (index >= CONFIG.questions.length) {
        showCelebration();
        return;
    }

    const q = CONFIG.questions[index];

    // 2. Add Text
    const title = document.createElement('h1');
    title.innerText = q.text;
    title.style.fontSize = '2rem';
    title.style.marginBottom = '20px';
    title.classList.add('animate-bounce'); // Assuming you have css animations
    qContainer.appendChild(title);

    // 3. Render based on Type
    if (q.type === 'simple' || q.type === 'final') {
        renderSimpleButtons(q, qContainer);
    } else if (q.type === 'meter') {
        renderLoveMeter(q, qContainer);
    }
}

// --- RENDERERS ---

function renderSimpleButtons(q, container) {
    const btnGroup = document.createElement('div');
    
    // Yes Button
    const yesBtn = createButton(q.yesBtn);
    yesBtn.onclick = () => {
        if (q.type === 'final') {
            showCelebration();
        } else {
            nextQuestion();
        }
    };

    // No Button
    const noBtn = createButton(q.noBtn);
    
    if (q.type === 'final') {
        // Runaway Button Logic
        noBtn.style.position = 'absolute';
        noBtn.onmouseover = (e) => moveButtonRandomly(e.target);
        noBtn.ontouchstart = (e) => { e.preventDefault(); moveButtonRandomly(e.target); };
    } else {
        // Standard No Logic
        noBtn.onclick = () => {
             alert(q.secretAnswer || "Wrong answer! Try again! 😜");
        };
    }

    btnGroup.appendChild(yesBtn);
    btnGroup.appendChild(noBtn);
    container.appendChild(btnGroup);
}

function renderLoveMeter(q, container) {
    const wrapper = document.createElement('div');
    
    const label = document.createElement('div');
    label.innerText = q.startText + " 0%";
    label.style.fontSize = "1.5rem";
    label.style.marginBottom = "10px";
    
    const input = document.createElement('input');
    input.type = "range";
    input.min = "0";
    input.max = "100"; // Can go higher visually via JS
    input.value = "0";
    input.style.width = "80%";
    input.style.maxWidth = "300px";
    
    // Next Button (Hidden initially or disabled)
    const nextBtn = createButton(q.nextBtn);
    nextBtn.style.marginTop = "20px";
    nextBtn.style.display = "none"; // Hide until they slide
    nextBtn.onclick = nextQuestion;

    // Logic for sliding
    input.addEventListener('input', (e) => {
        let val = parseInt(e.target.value);
        label.innerText = q.startText + ` ${val}%`;
        
        if (val > 0) nextBtn.style.display = "inline-block";
        
        // Dynamic feedback
        if (val > 50 && val < 90) label.innerText = CONFIG.loveMessages.normal;
        if (val >= 90) label.innerText = CONFIG.loveMessages.high;
    });

    wrapper.appendChild(label);
    wrapper.appendChild(document.createElement('br'));
    wrapper.appendChild(input);
    wrapper.appendChild(document.createElement('br'));
    wrapper.appendChild(nextBtn);
    container.appendChild(wrapper);
}

// --- HELPERS ---

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function createButton(text) {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.style.padding = "10px 20px";
    btn.style.margin = "10px";
    btn.style.fontSize = "1.2rem";
    btn.style.backgroundColor = CONFIG.colors.buttonBackground;
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "50px";
    btn.style.cursor = "pointer";
    btn.style.transition = "transform 0.2s";
    
    btn.onmouseover = () => {
        btn.style.backgroundColor = CONFIG.colors.buttonHover;
        btn.style.transform = "scale(1.1)";
    };
    btn.onmouseout = () => {
        btn.style.backgroundColor = CONFIG.colors.buttonBackground;
        btn.style.transform = "scale(1)";
    };
    return btn;
}

function moveButtonRandomly(btn) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function showCelebration() {
    const container = document.getElementById('question-container');
    container.innerHTML = "";

    const h1 = document.createElement('h1');
    h1.innerText = CONFIG.celebration.title;
    
    const p = document.createElement('p');
    p.innerText = CONFIG.celebration.message;
    p.style.fontSize = "1.5rem";

    container.appendChild(h1);
    container.appendChild(p);

    // Burst of hearts
    setInterval(createFloatingHeart, 300);
}

function createFloatingEmojis() {
    // Simple background floating animation
    // (This implies you have CSS for .floating-emoji)
    // If not, this part might need CSS to work visually
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerText = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-10px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Add CSS for floatUp if missing
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    to { transform: translateY(-100vh); opacity: 0; }
}
`;
document.head.appendChild(style);

function setupMusic() {
    const musicBtn = document.createElement('button');
    musicBtn.innerText = CONFIG.music.startText;
    musicBtn.style.position = "fixed";
    musicBtn.style.bottom = "20px";
    musicBtn.style.right = "20px";
    musicBtn.style.zIndex = "1000";
    musicBtn.onclick = () => {
        if (isMusicPlaying) {
            audio.pause();
            musicBtn.innerText = CONFIG.music.startText;
        } else {
            audio.play();
            musicBtn.innerText = CONFIG.music.stopText;
        }
        isMusicPlaying = !isMusicPlaying;
    };
    document.body.appendChild(musicBtn);
}
