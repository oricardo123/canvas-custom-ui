import React from "react";
import { useLocation } from "react-router-dom";
import CatalogView from "./CatalogView";

export default function CatalogContainer(props) {
  const location = useLocation();
 // const { catalogName } = location.state;
  const {item} = location.state;;
  const {isProduct} = props
  return <CatalogView catalog={location.state.item} isProduct={isProduct}/>;
}
