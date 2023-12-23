import * as ReactDOM from 'react-dom/client';
import {App} from "../app";
import {Root} from "react-dom/client";

class AraMenuElement extends HTMLElement {
  root!: Root

  connectedCallback() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(<App/>)
  }

  disconnectedCallback() {
    if (this.root) this.root.unmount()
  }

}

customElements.define("ara-menu", AraMenuElement)
