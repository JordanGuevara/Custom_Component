class modalEspe extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        
    }
    getStyles(){
        return `
        `;

    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
        `;
        return
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }

}
customElements.define('espe-modal',modalEspe);