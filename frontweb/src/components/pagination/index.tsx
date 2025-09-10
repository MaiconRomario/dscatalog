import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg';
import './style.css';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowIcon className="arrow-previous arrow-inactive"></ArrowIcon>
      <div className="pafination-item active">1</div>
      <div className="pafination-item">2</div>
      <div className="pafination-item">3</div>
      <div className="pafination-item">4</div>
      <div className="pafination-item">...</div>
      <ArrowIcon className=" arrow-next arrow-active"></ArrowIcon>
    </div>
  );
};

export default Pagination;
