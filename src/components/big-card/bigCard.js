class bigCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var socialIcon = this.getAttribute('icon');
        var profile = this.getAttribute('profile');
        var number = this.getAttribute('number');
        var followers = this.getAttribute('data-text');
        var iconUpDown = this.getAttribute('icon-up-down');
        var numberUpDown = this.getAttribute('number-up-down');
        var colorUpDown;

        if (iconUpDown == "down") {
            colorUpDown = "red"
        }

        this.innerHTML = `
            <div class="big-card">
                <div class="border-top ${socialIcon}"></div>
                <div class="social">
                    <img src="../social_media_dashboard/src/images/icon-${socialIcon}.svg" alt="icono ${socialIcon}" >
                    <span>@${profile}</span>
                </div>
                <div class="number">${number}</div>
                <span class="followers">${followers}</span>
                <div class="date-today ${colorUpDown}">
                    <img src="../social_media_dashboard/src/images/icon-${iconUpDown}.svg" alt="icono ${iconUpDown}" >
                    <span>${numberUpDown}</span>
                    <span>Today</span>
                </div>
            </div>
        `;
    }
}

customElements.define('big-card', bigCard);