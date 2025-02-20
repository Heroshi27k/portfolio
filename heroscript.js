const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-right");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 
        const target = e.target.getAttribute("data-target");

    
        sections.forEach(section => {
            section.classList.add("hidden");
        });

    
        if (target === "home") {
            document.getElementById("home").classList.remove("hidden");
        } else {
            document.getElementById(target).classList.remove("hidden");
        }
    });
});

document.getElementById("home").classList.remove("hidden");