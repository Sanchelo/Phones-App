export default class Sort {
    constructor({element}) {
    this._element = element;
    this._render();
    }
    _render() {
        this._element.innerHTML = 
        `
        <div class="col-md-2">
        <section>
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
        </section>
        </div>
        `
    }
}