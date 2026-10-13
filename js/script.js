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

    // Estrutura dp carrossel
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;

    function showSlide(index){
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        slideAtual = (index + slides.length) % slides.length;

        slides[slideAtual].classList.add("active");
        dots[slideAtual].classList.add("active");
    }

}); // Fechamento do evento carregar página HTML