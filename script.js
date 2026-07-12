document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    /* ==========================
       사이드바 열기 / 닫기
    ========================== */

    function openSidebar() {

        sidebar?.classList.add("active");
        overlay?.classList.add("active");
        document.body.classList.add("menu-open");

    }

    function closeSidebar() {

        sidebar?.classList.remove("active");
        overlay?.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

    if (menuBtn && sidebar && overlay) {

        menuBtn.addEventListener("click", () => {

            const isOpen = sidebar.classList.contains("active");

            if (isOpen) {
                closeSidebar();
            } else {
                openSidebar();
            }

        });

        overlay.addEventListener("click", closeSidebar);

    }

    /* ==========================
       아코디언 하위 메뉴
    ========================== */

    const menuTitles = document.querySelectorAll(
        "#sidebar .menu-title"
    );

    menuTitles.forEach(title => {

        title.addEventListener("click", () => {

            const currentMenuItem =
                title.closest(".menu-item");

            if (!currentMenuItem) return;

            document
                .querySelectorAll("#sidebar .menu-item")
                .forEach(item => {

                    if (item !== currentMenuItem) {
                        item.classList.remove("active");
                    }

                });

            currentMenuItem.classList.toggle("active");

        });

    });

    /* ==========================
       사이드바 링크 클릭 시 닫기
    ========================== */

    const sidebarLinks = document.querySelectorAll(
        "#sidebar .submenu a"
    );

    sidebarLinks.forEach(link => {

        link.addEventListener("click", closeSidebar);

    });

    /* ==========================
       ESC 키로 사이드바 닫기
    ========================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeSidebar();
        }

    });

});