//Mapping DATA TO COMPONENETS
import React from "react";
import Card from "./CardReactProps";

export default function mapCard(arr) {
  return <Card img={arr.source} h6={arr.title} h4={arr.details} />;
}
