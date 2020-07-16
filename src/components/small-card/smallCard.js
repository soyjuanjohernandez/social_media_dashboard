class smallCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var socialIcon = this.getAttribute('icon');
        var textActivity = this.getAttribute('text-activity');
        var number = this.getAttribute('number');
        var iconUpDown = this.getAttribute('icon-up-down');
        var numberUpDown = this.getAttribute('number-up-down');
        var colorUpDown;

        if (iconUpDown == "down") {
            colorUpDown = "red" 
        }

        this.innerHTML = `
            <div class="small-card">
                <span class="text-activity">${textActivity}</span>
                <img src="../social_media_dashboard/src/images/icon-${socialIcon}.svg" alt="icono ${socialIcon}" >
                <div class="number">${number}</div>
                <div class="date ${colorUpDown}">
                    <img src="../social_media_dashboard/src/images/icon-${iconUpDown}.svg" alt="icono ${iconUpDown}" >
                    <span>${numberUpDown}%</span>
                </div>
            </div>
        `;   
    }
}

customElements.define('small-card', smallCard);