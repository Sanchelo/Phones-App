import Sort from "./sort.js";
import Cart from "./cart.js";
import PhonesCatalog from "./phonesCatalog.js";
import PhoneViewer from "./phoneViewer.js";
import phoneService from "./phoneService.js";
import Component from "./component.js";

export default class PhonesPage extends Component {
    constructor({element}) {
      super({element});
      this._state = {
        phones: phoneService.getAllPhones(),
        selectedPhone: null,
      };
      this._render();
      this._initCatalog();
      this._initViewer();
      this._initCart();
      this._initFilter();



    }

    _initCatalog() {
      this._phonesCatalog = new PhonesCatalog({element: document.querySelector(".phones-catalog"), 

      phones: this._state.phones, 

      onPhoneSelected: (phoneId) => {
       const selectedPhone = phoneService.getPhoneById(phoneId);
       this._state.selectedPhone = selectedPhone;
       this._phonesCatalog.hide();
       this._phoneViewer.show(selectedPhone);
      },

      onAdd: (phoneId) => {
      this._cart.add(phoneId);
      },
      
    });
    };

    _initViewer() {
      this._phoneViewer = new PhoneViewer({element: document.querySelector(".phone-viewer"),
      onBack: () => {
      this._phonesCatalog.show();
      this._phoneViewer.hide()
      }
    });
    };

    _initCart() {
      this._cart = new Cart({element: document.querySelector(".cart")});
    };

    _initFilter() {
      this._filter = new Sort({element: document.querySelector(".sort")});
    };

    _render() {
        this._element.innerHTML = 
        `  <div class="container-fluid">
        <div class="row">
    
          <!--Sidebar-->
          <div class="col-md-2">
            <section>
             <div class="sort"></div>
            </section>
    
            <section>
              <div class="cart"></div>
            </section>
          </div>
    
          <!--Main content-->
          <div class="col-md-10 phones-catalog">
          
          </div>
          <div class="phone-viewer"></div>
        </div>
      </div>
    `;
    };
};
