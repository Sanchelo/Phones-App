import Sort from "./sort.js";
import Cart from "./cart.js";
import PhonesCatalog from "./phonesCatalog.js";
import PhoneViewer from "./phoneViewer.js";
import phoneService from "./phoneService.js";
import Component from "./component.js";

export default class PhonesPage extends Component {
    constructor(element, props) {
      super(element, props);
      this.setSelectedPhone = this.setSelectedPhone.bind(this);
      this.clearSelectedPhone = this.clearSelectedPhone.bind(this);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);

      this._state = {
        phones: phoneService.getAllPhones(),
        selectedPhone: null,
        items: [],
      };
      
     this._render();

    }


    setSelectedPhone(phoneId) {
      this._setState({
        selectedPhone: phoneService.getPhoneById(phoneId),
      });
    };

    addItem(phoneId) {
      this._setState({
        items: [...this._state.items, phoneId],
      });
    };

    clearSelectedPhone() {
      this._setState({selectedPhone: null});
    };
    
    removeItem(removeItem) {
      this._setState({
        items: this._state.items.filter(
          item => item !== removeItem
        ),
      });
    };

    _render() {
        this._element.innerHTML = 
        `  <div class="container-fluid">
        <div class="row">
    
          <!--Sidebar-->
          <div class="col-md-2">
            <section>
             <div data-component="Sort"></div>
            </section>
    
            <section>
              <div data-component="Cart"></div>
            </section>
          </div>
    
          <!--Main content-->
          <div class="col-md-10">
          ${this._state.selectedPhone ? 
            `<div data-component="PhoneViewer"></div>` 
            : 
            `<div data-component="PhonesCatalog"></div>`}
        </div>
      </div>
    `;


    
    this._initComponent(PhonesCatalog, {
      phones: this._state.phones, 
      onPhoneSelected: this.setSelectedPhone,

      onAdd: this.addItem,
    });
    this._initComponent(PhoneViewer, {
      phone: this._state.selectedPhone,
      onBack: this.clearSelectedPhone,
        onAdd: this.addItem,
    });
    this._initComponent(Cart, {items: this._state.items,
      onRemove: this.removeItem, 
    });
    this._initComponent(Sort);

    };


};
