class CardUsuario extends HTMLElement{
    static get observedAttributes(){
        return ['tema'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            .card {
                border-radius: 25px;
                padding: 10px;
                width: 350px;
                height: auto;
                box-shadow: 2px 5px 10px 10px rgba(0, 0, 0, 0.2);
                background: green;
                color: orange;
            }
            .titulo {
                font-weight: bold;
                font-size: 20px;
            }
            .nombre{
                color:blue;
                font-size: 10px;
            }
        </style>

        <div class="card">
            <div class="titulo"><slot name="titulo">Sin título</slot></div>
            <div class="nombre"><slot name="nombre">Sin nombre</slot></div>
            <div class="texto"><slot name="texto">Sin contenido</slot></div>
        </div>
    `;
    }
    attributeChangedCallback(name,valor1,valor2){
        if(name=='tema' && valor1!=valor2){
            this.shadowRoot.querySelector('.card').style.background = valor1;
        }

    }
    
}
customElements.define('card-user', CardUsuario);