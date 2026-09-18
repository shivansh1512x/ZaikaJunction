const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");

menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const category = tab.dataset.category;

        menuCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    if (name === "") {

        formMessage.textContent =
            "Please enter your name.";

        return;
    }

    formMessage.textContent =
        "Thank you! Your reservation request has been received.";

    reservationForm.reset();

});


const dateInput =
    document.getElementById("date");

const today =
    new Date();

const year =
    today.getFullYear();

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const day =
    String(today.getDate()).padStart(2, "0");

dateInput.min =
    `${year}-${month}-${day}`;
