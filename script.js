document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    function closeSidebar() {
        sidebar?.classList.remove("open");
        overlay?.classList.remove("show");
    }

    /* 사이드바 열기 / 닫기 */
    if (menuBtn && sidebar && overlay) {

        menuBtn.addEventListener("click", () => {

            const willOpen =
                !sidebar.classList.contains("open");

            sidebar.classList.toggle("open");
            overlay.classList.toggle("show");

            /*
             * 사이드바를 새로 열 때 항상 맨 위부터 표시
             * 재화획득이 잘리던 핵심 원인 해결
             */
            if (willOpen) {
                sidebar.scrollTop = 0;
            }

        });

        overlay.addEventListener("click", closeSidebar);

    }

    /* 하위 메뉴 열기 */
    document
        .querySelectorAll("#sidebar .menu-title")
        .forEach(title => {

            title.addEventListener("click", () => {

                const submenu =
                    title.nextElementSibling;

                if (!submenu) return;

                submenu.classList.toggle("open");

            });

        });

    /* ESC 키로 닫기 */
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeSidebar();
        }

    });

});