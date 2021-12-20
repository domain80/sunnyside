let hambg = document.querySelector(".icon-hamburger");
let navLinks = document.querySelector(".nav-links");

hambg.addEventListener("click", () => {
	navLinks.classList.toggle("hidden");
});
