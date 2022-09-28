import React from "react";
import "/src/styles.css";

/*var kDOt = "I can't Please Everybody -k Dot.";
var cole = "Hardest shit out the South since slavery, nigga";
let currentYear = new Date();
*/
let li4 =
  "https://comicsense.b-cdn.net/wp-content/uploads/2022/08/cosplay_comicsense.jpg";

let randomImage = "https://picsum.photos/200/300";
/*
let date = new Date().getHours();
let customDatestyle = {
  color: "",
  greetings: ""
};
if (date > 4 && date < 12) {
  customDatestyle.color = "blue";
  customDatestyle.greetings = "Good Morning";
} else if (date >= 12 && date < 20) {
  customDatestyle.greetings = "Good Afternoon";
  customDatestyle.color = "red";
} else {
  customDatestyle.color = "green";
  customDatestyle.greetings = "Good Night";
}
*/

let ulBorder = {
  border: "3px black solid",
  margin: "10vh"
};

ulBorder.border = "2px solid grey";

function ListA() {
  //inline css
  //updating ulCategory
  return (
    <div>
      <ul className="nav">
        <li>
          <a href=" " id="dropdown">
            Top Category
          </a>
        </li>

        <li>
          <a href=" " id="dropdown">
            Shop
          </a>
        </li>

        <li>
          <a href=" ">Home</a>
        </li>

        <li>
          <a href=" ">Contact</a>
        </li>
      </ul>
      {
        /* Comment in React
    <h1 className="heading" spellCheck="false">{`${kDOt} ${cole}`}</h1>
    <h3>
      <br></br>
      <p>Copyright {currentYear.getFullYear()}</p>
    </h3>
    */
        //<h4 style={customDatestyle}>{customDatestyle.greetings}</h4>
      }
      <ul className="category" style={ulBorder}>
        <li>
          <img
            alt="s"
            src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/oversize_comicsense.jpg"
          />
        </li>
        <li>
          <img
            alt=""
            src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/winterwear_comicsense.jpg"
          />
        </li>
        <li>
          <img
            alt=""
            src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/mangaS_comicsense.jpg"
          />
        </li>

        <li>
          <img
            alt=""
            src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/stickers1_comicsense.jpg"
          />
        </li>

        <li>
          <img alt="" src={li4} />
        </li>
      </ul>

      <li>
        <img alt="" src={randomImage + "?grayscale"} />
      </li>
    </div>
  );
}

export default ListA;
