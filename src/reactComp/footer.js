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
    <div>
      <ul>
        <li>
          <a href="https://www.comicsense.in/photos-reviews/">
            Photos &amp; Reviews
          </a>
        </li>

        <li>
          <a href="https://www.comicsense.in/offers-discount-coupon/">
            Coupons &amp; Offers
          </a>
        </li>

        <li>
          <a href="https://www.comicsense.in/product-category/combos/">
            Gift Combos
          </a>
        </li>

        <li>
          <a href="https://www.comicsense.in/product-category/clearance-sale/">
            Clearance Zone
          </a>
        </li>
      </ul>
    </div>
  );
}
export default footer;
