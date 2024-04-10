import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
  constructor() {
    this.root = document.getElementById('root');
    this.render();
  }

  render() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello, World!';
    this.root.appendChild(h1);
  }
}

export default Complete;