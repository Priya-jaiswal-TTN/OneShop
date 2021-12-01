import "../Product/ProductThumbnail.css";
import { Fragment } from "react";

const ProductThumbnail = (props) => {
  //   console.log("props from thumbnail===>", props);
  return (
    <Fragment>
      {props.items.map((product) => {
        return (
          <div className="row">
            <div className="col col-lg-4 thumbnail">
              <img src={product.mainImage} />
            </div>
            <div className="col col-lg-8">
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductThumbnail;
