const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if(menuBtn && sidebar && overlay){

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("open");
        overlay.classList.toggle("show");

    });

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("open");
        overlay.classList.remove("show");

    });

}
const menuTitles = document.querySelectorAll(".menu-title");

if(menuTitles.length){

    menuTitles.forEach(title=>{

        title.addEventListener("click",()=>{

            const submenu=title.nextElementSibling;

            if(!submenu) return;

            submenu.classList.toggle("open");

        });

    });

}
