//Mapping DATA TO COMPONENETS
import React from "react";
import arr from "./cardArr";
import Card from "./CardReactProps";

//using props
export default function mapCard(arr) {
  return <Card img={arr.source} h6={arr.title} h4={arr.details} />;
}
