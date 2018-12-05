const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const noButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", function() {
		// modal.style.display = "block";
		// backdrop.style.display = "block";
		// modal.className = "open";
		modal.classList.add("open");
		backdrop.classList.add("open");
	});
}

backdrop.addEventListener("click", function() {
	// mobileNav.style.display = "none";
	mobileNav.classList.remove("open");
	closeModal();
});
if (noButton) {
	noButton.addEventListener("click", closeModal);
}

function closeModal() {
	// modal.style.display = "none";
	// backdrop.style.display = "none";
	if (modal) {
		modal.classList.remove("open");
	}
	backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
	// mobileNav.style.display = "block";
	// backdrop.style.display = "block";
	// if (mobileNav) {
		mobileNav.classList.add("open");
		backdrop.classList.add("open");
	// }
});
