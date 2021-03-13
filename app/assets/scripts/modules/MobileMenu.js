class MobileMenu {
    constructor() {
       this.menuIcon = document.querySelector(".site-header__menu-icon")
       this.headerMenu = document.querySelector(".site-header__primary-nav")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.headerMenu.classList.toggle("site-header__primary-nav--is-visible")
    }
}

export default MobileMenu