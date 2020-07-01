class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Shadanni Lissette Hinojosa Sanchez.`;
    }
}
customElements.define("mi-footer", MiFooter);