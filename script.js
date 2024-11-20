const toggles = document.querySelectorAll(".accordion_button");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // Apply the 'active' class to the parent .faq div
    toggle.closest(".accordion").classList.toggle("active");
  });
});
