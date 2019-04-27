import Component from "./component.js";

export default class PhonesCatalog extends Component {
    constructor({element, phones, onPhoneSelected, onAdd}) {
    super({element});
    this._props = {
        phones: phones,
        onAdd: onAdd,
    }
    this._onPhoneSelected = onPhoneSelected;
    this._render();
    
    this.on("click", "details-link", ({delegateTarget: detailsLink}) => {this._onPhoneSelected(detailsLink.dataset.phoneId)});

    this.on("click", "add-button", ({delegateTarget: addButton}) => {
      this._props.onAdd(addButton.dataset.phoneId);
    });


    }

    _render() {
        this._element.innerHTML = 
        `
        <ul class="phones">
        ${this._props.phones.map((phone) =>
          `<li class="thumbnail">
          <a 
          data-element="details-link"
          data-phone-id="${phone.id}"
          href="#!/phones/${phone.id}" class="thumb">
          <img alt="${phone.id}" src="${phone.imageUrl}">
        </a>

        <div class="phones__btn-buy-wrapper">
          <a data-element="add-button" data-phone-id="${phone.id}" class="btn btn-success">
            Add
          </a>
        </div>

        <a 
        data-element="details-link"
        data-phone-id="${phone.id}"
        href="#!/phones/${phone.id}">${phone.name}</a>
        <p>${phone.snippet}</p>
          </li>`
        
        ).join("")};
        </ul>
        `
    };
}

