const attackData = {
    1: {
        name: "나뭇가지",
        reward: "-",
        durability: "1 ~ 5"
    },

    2: {
        name: "죽창",
        reward: "168원",
        durability: "1 ~ 5"
    },

    3: {
        name: "주먹도끼",
        reward: "264원",
        durability: "1 ~ 5"
    },

    4: {
        name: "찍개",
        reward: "420원",
        durability: "1 ~ 5"
    },

    5: {
        name: "돌도끼",
        reward: "660원",
        durability: "1 ~ 5"
    },

    6: {
        name: "돌곡괭이",
        reward: "1,020원",
        durability: "1 ~ 5"
    },

    7: {
        name: "돌창",
        reward: "1,560원",
        durability: "1 ~ 5"
    },

    8: {
        name: "돌단검",
        reward: "2,400원",
        durability: "1 ~ 5"
    },

    9: {
        name: "세형 동검",
        reward: "5,400원",
        durability: "1 ~ 5"
    },

    10: {
        name: "비파형 동검",
        reward: "84,000원",
        durability: "5 ~ 10"
    },

    11: {
        name: "청동도끼",
        reward: "88,320원",
        durability: "5 ~ 10"
    },

    12: {
        name: "청동화살촉",
        reward: "93,720원",
        durability: "5 ~ 10"
    },

    13: {
        name: "철검",
        reward: "98,880원",
        durability: "5 ~ 10"
    },

    14: {
        name: "철창",
        reward: "105,600원",
        durability: "5 ~ 10"
    },

    15: {
        name: "철단검",
        reward: "111,240원",
        durability: "5 ~ 10"
    },

    16: {
        name: "철도끼",
        reward: "115,560원",
        durability: "5 ~ 10"
    },

    17: {
        name: "철곡괭이",
        reward: "120,000원",
        durability: "5 ~ 10"
    },

    18: {
        name: "호미",
        reward: "138,000원",
        durability: "5 ~ 10"
    },

    19: {
        name: "낫",
        reward: "156,000원",
        durability: "5 ~ 10"
    },

    20: {
        name: "갈퀴",
        reward: "2,160,000원",
        durability: "10 ~ 15"
    },

    21: {
        name: "빗자루",
        reward: "2,460,000원",
        durability: "10 ~ 15"
    },

    22: {
        name: "야구배트",
        reward: "3,348,000원",
        durability: "10 ~ 15"
    },

    23: {
        name: "빠루",
        reward: "3,720,000원",
        durability: "10 ~ 15"
    },

    24: {
        name: "삽",
        reward: "4,200,000원",
        durability: "10 ~ 15"
    },

    25: {
        name: "곡괭이",
        reward: "4,836,000원",
        durability: "10 ~ 15"
    },

    26: {
        name: "해머",
        reward: "5,520,000원",
        durability: "10 ~ 15"
    },

    27: {
        name: "마체테",
        reward: "6,084,000원",
        durability: "10 ~ 15"
    },

    28: {
        name: "사시미칼",
        reward: "6,588,000원",
        durability: "10 ~ 15"
    },

    29: {
        name: "장미칼",
        reward: "7,080,000원",
        durability: "10 ~ 15"
    },

    30: {
        name: "룽소드",
        reward: "26,400,000원",
        durability: "15 ~ 20"
    },

    31: {
        name: "히타이트 청동검",
        reward: "28,920,000원",
        durability: "15 ~ 20"
    },

    32: {
        name: "미케네 청동검",
        reward: "33,360,000원",
        durability: "15 ~ 20"
    },

    33: {
        name: "아르슬란테페 검",
        reward: "39,120,000원",
        durability: "15 ~ 20"
    },

    34: {
        name: "켈트 철검",
        reward: "51,600,000원",
        durability: "15 ~ 20"
    },

    35: {
        name: "할슈타트 안테나 검",
        reward: "62,400,000원",
        durability: "15 ~ 20"
    },

    36: {
        name: "글라디우스",
        reward: "78,600,000원",
        durability: "15 ~ 20"
    },

    37: {
        name: "아키나케스",
        reward: "85,200,000원",
        durability: "15 ~ 20"
    },

    38: {
        name: "바이킹 검",
        reward: "100,800,000원",
        durability: "15 ~ 20"
    },

    39: {
        name: "현원검",
        reward: "111,600,000원",
        durability: "15 ~ 20"
    },

    40: {
        name: "명검 쿠사나기의 검",
        reward: "504,000,000원",
        durability: "20 ~ 25"
    },

    41: {
        name: "명검 다인슬라이프",
        reward: "552,000,000원",
        durability: "20 ~ 25"
    },

    42: {
        name: "명검 무라마사",
        reward: "660,000,000원",
        durability: "20 ~ 25"
    },

    43: {
        name: "명검 엑스칼리버",
        reward: "804,000,000원",
        durability: "20 ~ 25"
    },

    44: {
        name: "명검 다마스쿠스",
        reward: "948,000,000원",
        durability: "20 ~ 25"
    },

    45: {
        name: "명검 쌍룡검",
        reward: "1,104,000,000원",
        durability: "20 ~ 25"
    },

    46: {
        name: "명검 아틸라의 검",
        reward: "1,380,000,000원",
        durability: "20 ~ 25"
    },

    47: {
        name: "명검 뒤랑달",
        reward: "1,860,000,000원",
        durability: "20 ~ 25"
    },

    48: {
        name: "명검 줄피가르",
        reward: "2,940,000,000원",
        durability: "20 ~ 25"
    },

    49: {
        name: "미공개 무기",
        reward: "공개 예정",
        durability: "20 ~ 25",
        hidden: true
    },

    50: {
        name: "미공개 무기",
        reward: "공개 예정",
        durability: "20 ~ 30",
        hidden: true
    }
};

const attackLevelSelect = document.getElementById("attackLevel");
const attackRangeButtons = document.querySelectorAll(".attack-range-btn");

const attackLevelLabel = document.getElementById("attackLevelLabel");
const attackWeaponName = document.getElementById("attackWeaponName");
const attackReward = document.getElementById("attackReward");
const attackDurability = document.getElementById("attackDurability");
const attackHiddenNotice = document.getElementById("attackHiddenNotice");

function createAttackOptions(start, end) {
    attackLevelSelect.innerHTML = "";

    for (let level = start; level <= end; level++) {
        const option = document.createElement("option");
        const data = attackData[level];

        option.value = level;
        option.textContent = `${level}강 - ${data.name}`;

        attackLevelSelect.appendChild(option);
    }

    loadAttackLevel(start);
}

function loadAttackLevel(level) {
    const data = attackData[level];

    if (!data) return;

    attackLevelSelect.value = String(level);

    attackLevelLabel.textContent = `Lv.${level}`;
    attackWeaponName.textContent = data.name;
    attackReward.textContent = data.reward;
    attackDurability.textContent = data.durability;

    attackHiddenNotice.classList.toggle(
        "show",
        Boolean(data.hidden)
    );
}

attackRangeButtons.forEach(button => {
    button.addEventListener("click", () => {
        attackRangeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const start = Number(button.dataset.start);
        const end = Number(button.dataset.end);

        createAttackOptions(start, end);
    });
});

attackLevelSelect.addEventListener("change", () => {
    loadAttackLevel(Number(attackLevelSelect.value));
});

createAttackOptions(1, 10);