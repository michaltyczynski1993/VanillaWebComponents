class CloseButton extends HTMLElement{

    // method called when element is created
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.belkaList = [];
        
        // look for every element named aeh-belka when window is loaded
        window.onload = () =>{
            this.belkaList = document.getElementsByTagName("aeh-belka");
            console.log(this.belkaList.length);
          }
    }

    // method called when element is connected to DOM tree.
    connectedCallback() {
        // button title
        const titleAttr = this.getAttribute('title') || "Zwiń wszystkie";
        this.render(titleAttr);
        const button = this.shadowRoot.querySelector('button');
        // attach close belka event to closeButton
        button.addEventListener('click', this.closeBelka);
        
    }

    // render method
    render(title){
        this.shadowRoot.innerHTML = `
        <style>
            button{
                background-color: var(--bttn-bg-color, #c2d1e9);
                border: none;
                border-radius: 20px;
                box-shadow: 8px 8px 11px -9px rgba(66, 68, 90, 1);
                padding: 1.2rem 2rem;
                color: black;
                font-size: 1.3rem;
                font-weight: bold;
            }
    
            button:hover{
                background-color: color-mix(in srgb,var(--bttn-bg-color, #c2d1e9),#000 25%);
            }
    
            button:active{
                background-color: color-mix(in srgb,var(--bttn-bg-color, #c2d1e9),#000 50%);
            }
        </style>
            <button>${title}</button>
        `;
    }

    // find all aeh-belka elements and fire their removeOpen method
    closeBelka = () => { 
        for (const belka of this.belkaList) { 
          belka.removeOpen();
          console.log("closed");
        }
      };
}

window.customElements.define('close-button', CloseButton);