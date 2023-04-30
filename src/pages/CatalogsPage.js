import React, { useEffect, useState } from "react";
import { useCatalogs } from "../hooks/useCatalogs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addCatalogs
} from "../store/catalogsReducer";


const CatalogsPage = () => {
  const [catalogs, setCatalogs] = useState([]);
  const { getCatalogs, dataCatalogs, errorCatalogs, loadingCatalogs } =
    useCatalogs();

  const fetchCatalogs = async () => {
    const { data } = await getCatalogs();

    if (data) {
      console.log('data', data)
      setCatalogs(data.catalogs);
      dispatch(addCatalogs(data.catalogs))
    }
  };

  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchCatalogs();
  }, []);   

  return (
    <div className="mt-20">
      <div className="">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
          {catalogs?.map((item, index) => {
            return (
                  <Link
                    to={`/catalog/${item.name.toLowerCase()}`}
                    state={{ item }}
                  >
                    <img src={item.image.url}/>
                    {item.name}
                  </Link>
              
            );
          })}
  
        </div>
        <div className="grid grid-cols-4 mr-[9rem]"></div>
      </div>
    </div>
  );
};

export default CatalogsPage;
