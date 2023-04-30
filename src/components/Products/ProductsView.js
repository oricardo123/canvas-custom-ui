import React from 'react'
import { Link } from "react-router-dom";


export default function ProductsView(props) {
    const {products, name} = props
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
    {products?.map((item, index) => {
      return (
            <Link
              to={`/catalog/${name.toLowerCase()}/${item.name.toLowerCase()}`}
              state={{ item }}
            >
              <img src={item.image[0].url}/>
              {item.name}
            </Link>
        
      );
    })}

  </div>
  )
}
