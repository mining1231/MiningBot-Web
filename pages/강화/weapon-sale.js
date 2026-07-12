const weaponSaleData = {
    1: {
        name: "나뭇가지",
        price: "판매 불가",
        unavailable: true
    },

    2: {
        name: "죽창",
        price: "1,400원"
    },

    3: {
        name: "주먹도끼",
        price: "2,200원"
    },

    4: {
        name: "찍개",
        price: "3,500원"
    },

    5: {
        name: "돌도끼",
        price: "5,500원"
    },

    6: {
        name: "돌곡괭이",
        price: "8,500원"
    },

    7: {
        name: "돌창",
        price: "13,000원"
    },

    8: {
        name: "돌단검",
        price: "20,000원"
    },

    9: {
        name: "세형 동검",
        price: "45,000원"
    },

    10: {
        name: "비파형 동검",
        price: "700,000원"
    },

    11: {
        name: "청동도끼",
        price: "736,000원"
    },

    12: {
        name: "청동화살촉",
        price: "781,300원"
    },

    13: {
        name: "철검",
        price: "824,000원"
    },

    14: {
        name: "철창",
        price: "880,000원"
    },

    15: {
        name: "철단검",
        price: "927,000원"
    },

    16: {
        name: "철도끼",
        price: "963,000원"
    },

    17: {
        name: "철곡괭이",
        price: "1,000,000원"
    },

    18: {
        name: "호미",
        price: "1,150,000원"
    },

    19: {
        name: "낫",
        price: "1,300,000원"
    },

    20: {
        name: "갈퀴",
        price: "18,000,000원"
    },

    21: {
        name: "빗자루",
        price: "20,500,000원"
    },

    22: {
        name: "야구배트",
        price: "27,900,000원"
    },

    23: {
        name: "빠루",
        price: "31,000,000원"
    },

    24: {
        name: "삽",
        price: "35,000,000원"
    },

    25: {
        name: "곡괭이",
        price: "40,300,000원"
    },

    26: {
        name: "해머",
        price: "46,000,000원"
    },

    27: {
        name: "마체테",
        price: "50,700,000원"
    },

    28: {
        name: "사시미칼",
        price: "54,900,000원"
    },

    29: {
        name: "장미칼",
        price: "59,000,000원"
    },

    30: {
        name: "룽소드",
        price: "220,000,000원"
    },

    31: {
        name: "히타이트 청동검",
        price: "241,000,000원"
    },

    32: {
        name: "미케네 청동검",
        price: "278,000,000원"
    },

    33: {
        name: "아르슬란테페 검",
        price: "326,000,000원"
    },

    34: {
        name: "켈트 철검",
        price: "430,000,000원"
    },

    35: {
        name: "할슈타트 안테나 검",
        price: "520,000,000원"
    },

    36: {
        name: "글라디우스",
        price: "655,000,000원"
    },

    37: {
        name: "아키나케스",
        price: "710,000,000원"
    },

    38: {
        name: "바이킹 검",
        price: "840,000,000원"
    },

    39: {
        name: "현원검",
        price: "930,000,000원"
    },

    40: {
        name: "명검 쿠사나기의 검",
        price: "4,200,000,000원"
    },

    41: {
        name: "명검 다인슬라이프",
        price: "4,600,000,000원"
    },

    42: {
        name: "명검 무라마사",
        price: "5,500,000,000원"
    },

    43: {
        name: "명검 엑스칼리버",
        price: "6,700,000,000원"
    },

    44: {
        name: "명검 다마스쿠스",
        price: "7,900,000,000원"
    },

    45: {
        name: "명검 쌍룡검",
        price: "9,200,000,000원"
    },

    46: {
        name: "명검 아틸라의 검",
        price: "11,500,000,000원"
    },

    47: {
        name: "명검 뒤랑달",
        price: "15,500,000,000원"
    },

    48: {
        name: "명검 줄피가르",
        price: "24,500,000,000원"
    },

    49: {
        name: "미공개 무기",
        price: "37,500,000,000원",
        hidden: true
    },

    50: {
        name: "미공개 무기",
        price: "50,000,000,000원",
        hidden: true
    }
};


const weaponSaleLevel =
    document.getElementById("weaponSaleLevel");

const weaponSaleRangeButtons =
    document.querySelectorAll(".weapon-sale-range-btn");

const weaponSaleLevelLabel =
    document.getElementById("weaponSaleLevelLabel");

const weaponSaleName =
    document.getElementById("weaponSaleName");

const weaponSalePrice =
    document.getElementById("weaponSalePrice");

const weaponSaleHiddenNotice =
    document.getElementById("weaponSaleHiddenNotice");

const weaponSaleUnavailable =
    document.getElementById("weaponSaleUnavailable");


function createWeaponSaleOptions(start, end) {
    weaponSaleLevel.innerHTML = "";

    for (let level = start; level <= end; level++) {
        const data = weaponSaleData[level];

        const option = document.createElement("option");

        option.value = level;

        option.textContent =
            `${level}강 - ${data.name}`;

        weaponSaleLevel.appendChild(option);
    }

    loadWeaponSaleLevel(start);
}


function loadWeaponSaleLevel(level) {
    const data = weaponSaleData[level];

    if (!data) return;

    weaponSaleLevel.value = String(level);

    weaponSaleLevelLabel.textContent =
        `Lv.${level}`;

    weaponSaleName.textContent =
        data.name;

    weaponSalePrice.textContent =
        data.price;

    weaponSaleHiddenNotice.classList.toggle(
        "show",
        Boolean(data.hidden)
    );

    weaponSaleUnavailable.classList.toggle(
        "show",
        Boolean(data.unavailable)
    );
}


weaponSaleRangeButtons.forEach(button => {
    button.addEventListener("click", () => {
        weaponSaleRangeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const start =
            Number(button.dataset.start);

        const end =
            Number(button.dataset.end);

        createWeaponSaleOptions(start, end);
    });
});


weaponSaleLevel.addEventListener("change", () => {
    loadWeaponSaleLevel(
        Number(weaponSaleLevel.value)
    );
});


createWeaponSaleOptions(1, 10);