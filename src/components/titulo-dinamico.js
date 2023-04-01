class TituloDinamico extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({mode: 'open'});
      const span = document.createElement('span');
      shadow.appendChild(span);
      this.updateTitle();
      
      //estilo
      const style = document.createElement('style');
      style.textContent = `
      span {
          color: red;
        }
      `;
      shadow.appendChild(style);
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'test' && oldValue !== newValue) {
        this.updateTitle();
      }
    }
    
    updateTitle() {
      const span = this.shadowRoot.querySelector('span');
      const test = this.getAttribute('test');
      span.textContent = test;
    }
}
  
customElements.define('titulo-dinamico', TituloDinamico);
  