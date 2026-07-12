const engravingData = {
    1: {
        success: "95%",
        fail: "5%",
        destroy: "0%",
        bonus: "0.3%"
    },

    2: {
        success: "90%",
        fail: "10%",
        destroy: "0%",
        bonus: "0.6%"
    },

    3: {
        success: "85%",
        fail: "15%",
        destroy: "0%",
        bonus: "0.9%"
    },

    4: {
        success: "80%",
        fail: "20%",
        destroy: "0%",
        bonus: "1.2%"
    },

    5: {
        success: "75%",
        fail: "25%",
        destroy: "0%",
        bonus: "1.6%"
    },

    6: {
        success: "70%",
        fail: "30%",
        destroy: "0%",
        bonus: "2.0%"
    },

    7: {
        success: "65%",
        fail: "35%",
        destroy: "0%",
        bonus: "2.4%"
    },

    8: {
        success: "60%",
        fail: "40%",
        destroy: "0%",
        bonus: "2.8%"
    },

    9: {
        success: "55%",
        fail: "45%",
        destroy: "0%",
        bonus: "3.3%"
    },

    10: {
        success: "50%",
        fail: "50%",
        destroy: "0%",
        bonus: "3.8%"
    },

    11: {
        success: "45%",
        fail: "45%",
        destroy: "0%",
        bonus: "4.3%"
    },

    12: {
        success: "40%",
        fail: "60%",
        destroy: "0%",
        bonus: "4.8%"
    },

    13: {
        success: "35%",
        fail: "65%",
        destroy: "0%",
        bonus: "5.4%"
    },

    14: {
        success: "30%",
        fail: "70%",
        destroy: "0%",
        bonus: "6.0%"
    },

    15: {
        success: "30%",
        fail: "70%",
        destroy: "0%",
        bonus: "6.6%"
    },

    16: {
        success: "30%",
        fail: "67.9%",
        destroy: "2.1%",
        bonus: "7.2%"
    },

    17: {
        success: "30%",
        fail: "67.9%",
        destroy: "2.1%",
        bonus: "8.0%"
    },

    18: {
        success: "15%",
        fail: "78.2%",
        destroy: "6.8%",
        bonus: "9.5%"
    },

    19: {
        success: "15%",
        fail: "76.5%",
        destroy: "6.8%",
        bonus: "11.0%"
    },

    20: {
        success: "15%",
        fail: "76.5%",
        destroy: "8.5%",
        bonus: "12.5%"
    },

    21: {
        success: "30%",
        fail: "59.5%",
        destroy: "10.5%",
        bonus: "14.5%"
    },

    22: {
        success: "15%",
        fail: "72.25%",
        destroy: "12.75%",
        bonus: "16.5%"
    },

    23: {
        success: "15%",
        fail: "68%",
        destroy: "17%",
        bonus: "18.5%"
    },

    24: {
        success: "11%",
        fail: "70.8%",
        destroy: "18.2%",
        bonus: "20.5%"
    },

    25: {
        success: "10%",
        fail: "71.6%",
        destroy: "18.4%",
        bonus: "22.5%"
    },

    26: {
        success: "9%",
        fail: "72.4%",
        destroy: "18.6%",
        bonus: "24.5%"
    },

    27: {
        success: "7%",
        fail: "74.2%",
        destroy: "18.8%",
        bonus: "27.0%"
    },

    28: {
        success: "5%",
        fail: "75.8%",
        destroy: "19.2%",
        bonus: "30.0%"
    },

    29: {
        success: "3%",
        fail: "77.4%",
        destroy: "19.6%",
        bonus: "33.0%"
    },

    30: {
        success: "2%",
        fail: "78%",
        destroy: "20%",
        bonus: "37.0%"
    }
};

const engravingLevelSelect =
    document.getElementById("engravingLevel");

const engravingRangeButtons =
    document.querySelectorAll(".engraving-range-btn");

const engravingLevelLabel =
    document.getElementById("engravingLevelLabel");

const engravingTitle =
    document.getElementById("engravingTitle");

const engravingSuccess =
    document.getElementById("engravingSuccess");

const engravingFail =
    document.getElementById("engravingFail");

const engravingDestroy =
    document.getElementById("engravingDestroy");

const engravingBonus =
    document.getElementById("engravingBonus");

const engravingDestroyNotice =
    document.getElementById("engravingDestroyNotice");


function createEngravingOptions(start, end) {
    engravingLevelSelect.innerHTML = "";

    for (let level = start; level <= end; level++) {
        const option = document.createElement("option");

        option.value = level;
        option.textContent = `${level}성`;

        engravingLevelSelect.appendChild(option);
    }

    loadEngravingLevel(start);
}


function loadEngravingLevel(level) {
    const data = engravingData[level];

    if (!data) return;

    engravingLevelSelect.value = String(level);

    engravingLevelLabel.textContent = `${level}성`;
    engravingTitle.textContent = `별의 각인 ${level}성`;

    engravingSuccess.textContent = data.success;
    engravingFail.textContent = data.fail;
    engravingDestroy.textContent = data.destroy;
    engravingBonus.textContent = data.bonus;

    const destroyNumber = Number(
        data.destroy.replace("%", "")
    );

    engravingDestroyNotice.classList.toggle(
        "show",
        destroyNumber > 0
    );
}


engravingRangeButtons.forEach(button => {
    button.addEventListener("click", () => {
        engravingRangeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const start = Number(button.dataset.start);
        const end = Number(button.dataset.end);

        createEngravingOptions(start, end);
    });
});


engravingLevelSelect.addEventListener("change", () => {
    loadEngravingLevel(
        Number(engravingLevelSelect.value)
    );
});


createEngravingOptions(1, 10);