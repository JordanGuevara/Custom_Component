// components/espe-modal.js

class modalEspe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getStyles() {
        return `
        :host {
            --modal-bg: #006937;
            --content-bg: #ffffff;
            --close-color: #333;
            --font-family: 'Segoe UI', sans-serif;
            --border-radius: 10px;
            --padding: 20px;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0; 
            left: 0;
            width: 100%; 
            height: 100%;
            background: var(--modal-bg);
            justify-content: center;
            align-items: center;
            z-index: 999;
        }

        .modal-content {
            background: var(--content-bg);
            padding: var(--padding);
            border-radius: var(--border-radius);
            min-width: 300px;
            position: relative;
            font-family: var(--font-family);
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
        }

        .close {
            position: absolute;
            top: 10px;
            right: 15px;
            cursor: pointer;
            font-size: 18px;
            color: var(--close-color);
        }
        `;
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <style>${this.getStyles()}</style>
        <div class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <slot name="contenido">Contenido del modal por defecto</slot>
            </div>
        </div>
        `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.modal = this.shadowRoot.querySelector('.modal');
        this.closeBtn = this.shadowRoot.querySelector('.close');

        this.closeBtn.addEventListener('click', () => {
            this.cerrar();
        });
    }
    // Funciones para abrir y cerrar el modal utilizado
    abrir() {
        this.modal.style.display = 'flex';
        this.dispatchEvent(new CustomEvent('modal-abierto', {
            bubbles: true,
            composed: true
        }));
    }

    cerrar() {
        this.modal.style.display = 'none';
        this.dispatchEvent(new CustomEvent('modal-cerrado', {
            bubbles: true,
            composed: true
        }));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('espe-modal', modalEspe);
