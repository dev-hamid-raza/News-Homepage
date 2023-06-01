    const hamburger = document.querySelector(".ham-burger")
    const mainMenu = document.querySelector(".main-menu")
    const back = document.querySelector(".back")

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        mainMenu.classList.toggle("active")
        back.classList.toggle("active")
    })
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        mainMenu.classList.remove("active")
        back.classList.remove("active")
    }))