const cafeData = {
    1: {
        success: "70%",
        fail: "30%",
        exp: "-",
        bonus: "기본"
    },

    2: {
        success: "75%",
        fail: "25%",
        exp: "100",
        bonus: "×3"
    },

    3: {
        success: "80%",
        fail: "20%",
        exp: "500",
        bonus: "×10"
    },

    4: {
        success: "85%",
        fail: "15%",
        exp: "1500",
        bonus: "×30"
    },

    5: {
        success: "90%",
        fail: "10%",
        exp: "5000",
        bonus: "×60"
    },

    6: {
        success: "95%",
        fail: "5%",
        exp: "????",
        bonus: "????"
    },

    7: {
        success: "100%",
        fail: "0%",
        exp: "????",
        bonus: "????"
    },

    8: {
        success: "100%",
        fail: "0%",
        exp: "????",
        bonus: "????"
    },

    9: {
        success: "100%",
        fail: "0%",
        exp: "????",
        bonus: "????"
    },

    10: {
        success: "100%",
        fail: "0%",
        exp: "????",
        bonus: "????"
    }
};

const cafeSuccessRate = document.getElementById("cafeSuccessRate");
const cafeFailRate = document.getElementById("cafeFailRate");
const cafeExpValue = document.getElementById("cafeExpValue");
const cafeBonusValue = document.getElementById("cafeBonusValue");
const cafeLevelTitle = document.querySelector(".cafe-level-title");

const cafeButtons = document.querySelectorAll(".level-btn");

function loadCafeLevel(level) {
    const data = cafeData[level];

    cafeLevelTitle.textContent = `☕ Lv.${level}`;

    cafeSuccessRate.textContent = data.success;
    cafeFailRate.textContent = data.fail;
    cafeExpValue.textContent = data.exp;
    cafeBonusValue.textContent = data.bonus;

    cafeButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.level === String(level)
        );
    });
}

cafeButtons.forEach(button => {
    button.addEventListener("click", () => {
        loadCafeLevel(button.dataset.level);
    });
});

loadCafeLevel(1);