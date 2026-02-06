// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Aliya",
    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // ⚠️ IMPORTANT: I have converted this into an ARRAY [...] 
    // so you can have infinite questions.
    questions: [
        // --- QUESTION 1 (Yes/No) ---
        {
            id: "q1",
            type: "simple", // Standard Yes/No
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        // --- QUESTION 2 (Yes/No) ---
        {
            id: "q2",
            type: "simple", 
            text: "Are you excited for Valentine's Day?",
            yesBtn: "Yes!",
            noBtn: "No",
            secretAnswer: "You better be! 😉"
        },
        // --- QUESTION 3 (Love Meter) ---
        {
            id: "q3",
            type: "meter", // Slider logic
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        // --- QUESTION 4 (Love Meter) ---
        {
            id: "q4",
            type: "meter",
            text: "How much do you like my sarcasm?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        // --- QUESTION 5 (Love Meter) ---
        {
            id: "q5",
            type: "meter",
            text: "How much do you like me more than your cats?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        // --- QUESTION 6 (Yes/No) ---
        {
            id: "q6",
            type: "simple",
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        },
        // --- QUESTION 7 (Yes/No) ---
        {
            id: "q7",
            type: "simple",
            text: "Have you ever said “I’m fine” while absolutely not being fine? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        },
        // --- QUESTION 8 (Yes/No) ---
        {
            id: "q8",
            type: "simple",
            text: "Do you tolerate my flaws because you love me… or because you’re stuck? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        },
        // --- QUESTION 9 (Yes/No) ---
        {
            id: "q9",
            type: "simple",
            text: "Would you still love me if I was mildly annoying? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        },
        // --- QUESTION 10 (Yes/No) ---
        {
            id: "q10",
            type: "simple",
            text: "Do I make your bad days better? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        },
        // --- FINAL QUESTION (Triggers Celebration) ---
        {
            id: "final",
            type: "final", // The big question that runs away
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    ],

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "Ohh sad! ☹️"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};
