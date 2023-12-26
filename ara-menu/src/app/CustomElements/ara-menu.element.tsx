import * as ReactDOM from 'react-dom/client';
import {App} from "../app";
import {Root} from "react-dom/client";
import AraMenu from "../Components/ara-menu/ara-menu";

class AraMenuElement extends HTMLElement {
  root!: Root

  connectedCallback() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(<AraMenu/>)
  }

  disconnectedCallback() {
    if (this.root) this.root.unmount()
  }

}

customElements.define("ara-menu", AraMenuElement)
