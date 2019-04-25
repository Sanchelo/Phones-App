import Component from "./component.js";

export default class Cart extends Component {
    constructor({element}) {
    super({element});
    this._state = {
      items: [],
    }
    this._render();
    }
    _render() {
    this._element.innerHTML = 
    `
    <p>Shopping Cart</p>
              <ul>
                ${this._state.items.map(item => `<li>${item}</li>`).join("")}
              </ul>
    `;
    };

    add(itemId) {
      this._setState({
        items: [...this._state.items, itemId],
      })
    };

    _setState(partial) {
      this._state = {
        ...this._state,
        ...partial
      };
      this._updateView();
    };
    _updateView() {
      this._render();

    };
}