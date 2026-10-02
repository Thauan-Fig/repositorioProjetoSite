document.addEventListener("DOMContentLoaded", () => {
    const menuReponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");

    menuReponsivo.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}); // Fechamento do evento carregar página HTML