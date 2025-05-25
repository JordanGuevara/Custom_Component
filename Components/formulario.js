class formularioAccion extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                form {
                    border: 2px solid blue;
                    padding: 15px;
                    border-radius: 8px;
                    width: 500px;
                    font-family: Arial, sans-serif;
                    margin: 20px
                }

                input {
                    width: 450px;
                    padding: 8px;
                    margin-bottom: 10px;
                }

                ::slotted(button) {
                    padding: 8px 12px;
                    background: green;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 4px;
                }
            </style>

            <form>
                <h3>Mi segundo componente</h3>
                <label for="nombreNuevo">Nuevo nombre:</label>
                <input type="text" id="nombreNuevo" name="nombreNuevo">
                <slot name="Enviar"></slot>
                <br>
                <br>
                <br>
                <label for="parrafoNuevo">Nuevo parrafo:</label>
                <input type="text" id="parrafoNuevo" name="parrafoNuevo">
                <slot name="Enviar-Parrafo"></slot>
            </form>
            `;
    }
    connectedCallback(){
        const boton =this.querySelector('[slot="Enviar"]');
        const botonParrafo = this.querySelector('[slot="Enviar-Parrafo"]');
        // Accion para cambiar el nombre del card
        if(boton){
            boton.addEventListener('click',(escuchar)=>{
                escuchar.preventDefault();
                const nombreNuevo = this.shadowRoot.querySelector('#nombreNuevo').value;
                const componenteCard=document.querySelector('card-user');
                if(componenteCard){
                    const slotNom=componenteCard.querySelector('[slot="nombre"]');
                    if(slotNom){
                        slotNom.textContent=nombreNuevo;

                    }
                }

            });

        }
        // Accion para cambiar el texto del parrafo
        if(botonParrafo){
            botonParrafo.addEventListener('click',(escuchar)=>{
                escuchar.preventDefault();
                const parrafoNuevo = this.shadowRoot.querySelector('#parrafoNuevo').value;
                const componenteCard=document.querySelector('card-user');
                if(componenteCard){
                    const slotParr=componenteCard.querySelector('[slot="texto"]');
                    if(slotParr){
                        slotParr.textContent=parrafoNuevo;

                    }
                }

            });

        }
    }

}
customElements.define('formulario-accion',formularioAccion);