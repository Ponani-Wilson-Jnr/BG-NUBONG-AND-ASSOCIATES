document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".animate");

    // Animate elements
    elements.forEach(el => {
        if (!prefersReducedMotion) {
            requestAnimationFrame(() => el.classList.add("show"));
        } else {
            el.classList.add("show"); // no animation
        }
    });

    // Typewriter effect for slogan
    const sloganElement = document.getElementById("slogan");
    const slogan = "Integrity. Accuracy. Assurance — Trusted Chartered Accountants & Auditors.";

    if (sloganElement) {
        let index = 0;

        function typeWriter() {
            if (index < slogan.length) {
                sloganElement.textContent += slogan.charAt(index);
                index++;
                setTimeout(typeWriter, 70);
            } else {
                setTimeout(() => {
                    sloganElement.textContent = "";
                    index = 0;
                    typeWriter();
                }, 2000);
            }
        }

        typeWriter();
    }

    

    // Search redirect functionality
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const query = searchInput.value.trim();
            if (query) {
                // Send the query to results page
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        });
    }
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("show");
    });
}
