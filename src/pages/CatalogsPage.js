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
      <div className="flex-col basis-2/12">
        <ul>
          <h1>Products</h1>
          <hr />
          {catalogs?.map((item, index) => {
            return (
              <>
                <li className="mt-2" key={item.name}>
                  <Link
                    to={`/catalogs/${item.name.toLowerCase()}`}
                    state={{ catalogName: item.name }}
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
        <div className="grid grid-cols-4 mr-[9rem]"></div>
      </div>
    </div>
  );
};

export default CatalogsPage;
