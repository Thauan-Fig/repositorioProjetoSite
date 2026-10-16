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

     function nextSlide(){
        showSlide(slideAtual + 1);
    }

    function prevSlide(){
        showSlide(slideAtual - 1);
    }

    function startSlide(){
        slideIntervalo = setInterval(nextSlide, 5000);
    }

    function stopSlide(){
        clearInterval(slideIntervalo);
    }

    nextBtn.addEventListener("click", () =>{
        nextSlide();
        stopSlide();
        startSlide();
    });

    prevBtn.addEventListener("click", () =>{
        prevSlide();
        stopSlide();
        startSlide();
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            showSlide(index);
            stopSlide();
            startSlide();
        });
    });

    // Iniciar os slides de forma automática
    startSlide();

}); // Fechamento do evento carregar página HTML
