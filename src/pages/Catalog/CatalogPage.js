import CatlogPageList from "./CatlogPageList";

const CatalogPage = () => {
  const subsets = [
    { name: "Arm", href: "" },
    { name: "Side", href: "" },
    { name: "Easy", href: "" },
    { name: "High", href: "" },
    { name: "Soft", href: "" },
    { name: "Table", href: "" },
    { name: "Case", href: "" },
    { name: "Bench", href: "" },
  ];

  return (
    <div className="mt-20">
      <div className="flex-col basis-2/12">
        <ul>
          <h1>Products</h1>
          <hr />
          {subsets.map((item) => {
            return (
              <>
                <li className="mt-2" key={item.name}>
                  {item.name}
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

export default CatalogPage;

