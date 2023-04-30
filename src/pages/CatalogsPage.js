import React, { useEffect, useState } from "react";
import { useCollections } from "../hooks/useCollections";
import { Link } from "react-router-dom";

const CatalogsPage = () => {
  const [collections, setCollectons] = useState([]);
  const {
    getCollections,
    dataCollections,
    errorCollections,
    loadingCollections,
  } = useCollections();

  const fetchCollections = async () => {
    const { data } = await getCollections();

    if (data) {
      setCollectons(data.collections);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="mt-20">
      <div className="flex-col basis-2/12">
        <ul>
          <h1>Products</h1>
          <hr />
          {collections?.map((item, index) => {
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
