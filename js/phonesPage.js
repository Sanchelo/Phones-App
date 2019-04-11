import Sort from "./sort.js";
import Cart from "./cart.js";
import PhonesCatalog from "./phonesCatalog.js";
import PhoneViewer from "./phoneViewer.js";
import phoneService from "./phoneService.js";

export default class PhonesPage {
    constructor({element}) {
      this._element = element;
      this._render();
      this._filter = new Sort({element: document.querySelector(".sort")});
      this._cart = new Cart({element: document.querySelector(".cart")});
      this._phonesCatalog = new PhonesCatalog({element: document.querySelector(".phones-catalog"), phones: phoneService.getAllPhones(), onPhoneSelected: (phoneId) => {
        const selectedPhone = this._phonesCatalog._getById(phoneId); console.log(selectedPhone)
      }});
      this._phoneViewer = new PhoneViewer({element: document.querySelector(".phone-viewer")});
    }
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
          <div style="display: none" class="phone-viewer"></div>
        </div>
      </div>
    `;
    }
};
