export function myFunction() {
    console.log("Скрипт загружен!");
}

export function initAccordion() {

    setTimeout(() => { 
        const headers = document.querySelectorAll(".accordion-header");

        if (headers.length === 0) {
            console.warn("Аккордеон не найден!");
            return;
        }

        headers.forEach(header => {
            header.addEventListener("click", function () {
                const content = this.nextElementSibling;
                const isActive = this.classList.contains("active");

                document.querySelectorAll(".accordion-header").forEach(h => h.classList.remove("active"));
                document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");

                if (!isActive) {
                    this.classList.add("active");
                    content.style.display = "block";
                }
            });
        });

    }, 100);
}

export function initSmoothScroll() {

    setTimeout(() => {
        const buttons = document.querySelectorAll(".toContactForm");
        const target = document.getElementById("contactForm");

        if (!target) {
            console.warn("Элемент #contactForm не найден!");
            return;
        }

        if (buttons.length === 0) {
            console.warn("Кнопки с классом .toContactForm не найдены!");
            return;
        }

        buttons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            });
        });

    }, 100);
}
