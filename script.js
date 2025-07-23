document.getElementById("search-btn").addEventListener("click", function() {
    const searchForm = document.querySelector(".search-form");
    searchForm.classList.toggle("active");
});

document.getElementById("search-box").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const contentSections = document.querySelectorAll("section");

    contentSections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }
    });

    // Reset visibility when search is cleared
    if (!query) {
        contentSections.forEach(section => {
            section.style.display = "";
        });
    }
});