//Import and Export in react
import "/src/styles.css";

function Pi() {
  return 3.14;
}

function Message() {
  return "Stfu";
}
export { Pi, Message };

function footer() {
  return (
    <div data-column="widget-area-2">
      <div class="ct-widget widget_nav_menu" id="nav_menu-4">
        <h2 class="widget-title">Quick Links</h2>
        <div class="menu-quick-links-container">
          <ul id="menu-quick-links" class="widget-menu">
            <li
              id="menu-item-377018"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-377018"
            >
              <a href="https://www.comicsense.in/photos-reviews/">
                Photos &amp; Reviews
              </a>
            </li>
            <li
              id="menu-item-9754"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9754"
            >
              <a href="https://www.comicsense.in/offers-discount-coupon/">
                Coupons &amp; Offers
              </a>
            </li>
            <li
              id="menu-item-9755"
              class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-9755"
            >
              <a href="https://www.comicsense.in/product-category/combos/">
                Gift Combos
              </a>
            </li>
            <li
              id="menu-item-321965"
              class="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-menu-item menu-item-321965"
            >
              <a
                href="https://www.comicsense.in/product-category/clearance-sale/"
                aria-current="page"
              >
                Clearance Zone
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default footer;
