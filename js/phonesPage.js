import Sort from "./sort.js";
import Cart from "./cart.js";
import PhonesCatalog from "./phonesCatalog.js";
import PhoneViewer from "./phoneViewer.js";

export default class PhonesPage {
    constructor({element}) {
      this._element = element;
        this._render();
      new Sort({element: document.querySelector(".sort")});
      new Cart({element: document.querySelector(".cart")});
      new PhonesCatalog({element: document.querySelector(".phones-catalog")});
      new PhoneViewer({element: document.querySelector(".phone-viewer")});
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
