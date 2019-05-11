import Component from "./component.js";

export default class Sort extends Component {
    constructor(element, props) {
    super(element, props);
    this._render();
    }
    _render() {
        this._element.innerHTML = 
        `
        <p>
        Search:
        <input>
      </p>

      <p>
        Sort by:
        <select>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
        `
    }
}