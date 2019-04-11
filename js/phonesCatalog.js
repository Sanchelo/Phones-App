
export default class PhonesCatalog {
    constructor({element, phones, onPhoneSelected}) {
    this._element = element;
    this._props = {
        phones: phones,
    }
    this._onPhoneSelected = onPhoneSelected;
    this._render();
    this._element.addEventListener("click", (event) => {
        const detailsLink = event.target.closest('[data-element="details-link"]');
        if(!detailsLink) return;
        this._onPhoneSelected(detailsLink.dataset.phoneId);
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
          <a class="btn btn-success">
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