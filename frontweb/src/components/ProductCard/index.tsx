import ProductImg from 'assets/images/product.png';

import './style.css';
import Productprice from 'components/ProductPrice';

const ProductCard = () => {
  return (
    <>
      <div className="base-card produc-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="Nome do produto" />
        </div>
        <div className="card-bottom-container">
          <h6>Nome do produto</h6>
          <Productprice></Productprice>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
