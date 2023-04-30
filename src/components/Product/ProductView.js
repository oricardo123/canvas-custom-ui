import Parser, { domToReact } from 'html-react-parser';

const ProductView = ({ product: {name, description, image} } ) => {

  const options = {
    replace: ({ attribs, children, name }) => {
      if (name === 'li') {
        return (
          <li className="list-disc ml-5">
            {domToReact(children, options)}
          </li>
        );
      }
    },
  };

  return (
    <div>
      <h2 className="mt-20 ml-10">{name}</h2>
      {image
        .filter((img) => img.fileName.includes("w300"))
        .map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.fileName}
            className="mt-20 ml-10"
          />
        ))}
      <div className="mt-4 prose prose-sm ml-10">
        {Parser(description, options)}
      </div>
    </div>
  );
};

export default ProductView;