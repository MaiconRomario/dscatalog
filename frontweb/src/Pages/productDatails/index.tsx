import Productprice from 'components/ProductPrice';
import './style.css';
import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg';

const ProductDatails = () => {
  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <div className="goback-container">
          <ArrowIcon></ArrowIcon>
          <h2>Voltar</h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt=""
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do produto</h1>
              <Productprice price={2341}></Productprice>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, illo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDatails;
