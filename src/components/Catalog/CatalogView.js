import React, {useState} from "react";
import ProductView from "../Product/ProductView"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams
} from "react-router-dom";
import ProductsView from "../Products/ProductsView";
import { useSelector } from 'react-redux';
import { stringify } from "postcss";


export default function CatalogView(props) {
  const { isProduct, catalog: {name, products} } = props;
  const { catalogName, productName } = useParams();
  const selectedProduct = useSelector((state) => {
    return state.catalogsReducer.catalogs.find((catalog)=>catalogName.toLowerCase() === catalog.name.toLowerCase()).products.find((product)=>product.name === productName);
  });


  return (
    <>
    <div className="flex-col basis-2/12 mt-100">
        <ul>
          <li className="mt-2">
            arm
          </li>
          <li className="mt-2">
            soft
          </li>
          <li className="mt-2">
            table
          </li>
        </ul>
    </div>
    <div>{name}</div>
    {isProduct ? <ProductView product={selectedProduct}/> : <ProductsView name={name} products={products}/>
  }
  </>
  )
}
