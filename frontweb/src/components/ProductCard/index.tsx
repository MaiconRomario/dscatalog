import './style.css';
import Productprice from 'components/ProductPrice';
import { Product } from 'assets/types/product';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="base-card produc-card">
        <div className="card-top-container">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="card-bottom-container">
          <h6>{product.name}</h6>
          <Productprice price={product.price}></Productprice>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
