class Component {
  constructor({element}) {
    this._element = element;
  }
  hide() {
    this._element.hidden = true;
  };
  show() {
    this._element.hidden = false;
  };
};



export default class PhonesCatalog extends Component {
    constructor({element, phones, onPhoneSelected}) {
    super({element});
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
    this._element.addEventListener("mouseover", (event) => {
      const li = event.target.closest('.thumbnail');
      if(!li) return;
      li.querySelector(".btn-success").style.visibility = "";
      li.addEventListener("mouseout", () => {
        li.querySelector(".btn-success").style.visibility = "hidden";
      })
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
          <a class="btn btn-success" style="visibility: hidden">
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

