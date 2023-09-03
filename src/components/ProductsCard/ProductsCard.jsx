import { Link } from "react-router-dom";
import "./index.scss";

const ProductsCard = ({ data }) => {
  return (
      <div className="home__card">
        <img src={data.imgPath} alt="model" />
        <div className="home__card-description">
          <p>{data.title}</p>
          <button>
            {/* onde alimenta as sub paginas e o ID para linkar no productdetails */}
            <Link to={`/products/${data.id}`}>Comprar Look</Link>
          </button>
        </div>
    </div>     
  );
};

export default ProductsCard;