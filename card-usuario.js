class CardUsuario extends HTMLElement{
    static get attributeObservar(){
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
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                background: green;
                color: red;
            }
            .titulo {
                font-weight: bold;
                font-size: 10 px;
            }
            .nombre{
                color:blue;
                font-size: 4px;
            }
        </style>

        <div class="card">
            <div class="titulo"><slot name="titulo">Sin título</slot></div>
            <div class="nombre"><slot name="nombre">Sin nombre</div>
            <div class="texto"><slot name="texto">Sin contenido</slot></div>
        </div>
    `;
    }
    attributeCallBack(name,valor1,valor2){
        if(name=='tema' && valor1 !=valor2){
            this.shadowRoot.querySelector('.card').style.background = valor1;
        }

    }
    
}
customElements.define('card-user', CardUsuario);