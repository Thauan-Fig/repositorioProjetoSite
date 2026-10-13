document.addEventListener("DOMContentLoaded", () => { // document é o que relaciona com o HTML
    const menuReponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");

    menuReponsivo.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    }) // Fecha menu responsivo

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link)=>{ // forEach = for(link = 0; link <= 4; link++)
        link.addEventListener("click", () =>{
            navMenu.classList.remove("active");
        })
    })
}); // Fechamento do evento carregar página HTML