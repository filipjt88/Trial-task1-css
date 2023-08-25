let bars        = document.querySelector(".bars");
let navbar     = document.querySelector("#navbar");
let navClose  = document.querySelector(".nav-close");


bars.addEventListener("click", () => {
    navbar.classList.add("showNav");
});


navbar.addEventListener("click", () => {
    navbar.classList.remove("showNav");
}); 


