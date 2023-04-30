import React from "react";
import { useLocation } from "react-router-dom";
import CatalogView from "./CatalogView";

export default function CatalogContainer(props) {
  const location = useLocation();
  const { catalogName } = location.state;
  return <CatalogView catalogName={catalogName} />;
}
