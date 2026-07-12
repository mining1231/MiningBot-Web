document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    /* 사이드바 열기 / 닫기 */
    if (menuBtn && sidebar && overlay) {

        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            overlay.classList.toggle("show");
            document.body.classList.toggle("menu-open");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("show");
            document.body.classList.remove("menu-open");
        });
    }

    /* 사이드바 하위 메뉴 */
    const menuTitles = document.querySelectorAll(
        "#sidebar .menu-title"
    );

    menuTitles.forEach(title => {

        title.addEventListener("click", () => {

            const submenu = title.nextElementSibling;

            if (!submenu) return;

            document
                .querySelectorAll("#sidebar .submenu")
                .forEach(otherSubmenu => {

                    if (otherSubmenu !== submenu) {
                        otherSubmenu.classList.remove("open");
                    }

                });

            submenu.classList.toggle("open");
        });

    });

    /* ESC 키로 닫기 */
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            sidebar?.classList.remove("open");
            overlay?.classList.remove("show");
            document.body.classList.remove("menu-open");
        }

    });

});