import './style.css';

type Props = {
  price: number;
};
const Productprice = ({ price }: Props) => {
  return (
    <>
      <div className="product-price-container">
        <span>R$</span>
        <h3>{price}</h3>
      </div>
    </>
  );
};

export default Productprice;
