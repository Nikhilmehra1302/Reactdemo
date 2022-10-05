import cardArr from "./reactComp/cardArr.js";
import Card from "./reactComp/CardReactProps.jsx";
export default function createCard(cardArr) {
  return <Card img={cardArr.source} h6={cardArr.title} h4={cardArr.details} />;
}
