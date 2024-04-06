import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

// Display all the categories of the food item
const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      {/* image */}
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />

        {/* If counter not zero */}

        {!cartItems[id]
          ? <img
            className="add"
            onClick={() => addToCart(id)} // After change the state shift to next div
            src={assets.add_icon_white}
            alt=""
          />
          : <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        }
      </div>

      <div className="food-item-info">
        {/* name & Rating */}
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        {/* description */}
        <div className="food-item-desc">{description}</div>
        {/* price */}
        <div className="food-item-price">₹ {price}</div>
      </div>
    </div>
  );
};

export default FoodItem;
