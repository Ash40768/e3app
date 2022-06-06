import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id, name, description }) => {
  const {
    IDcount,
    addCartItem,
    CartRemove,
    CountUpdate,
  } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleUpdate = async (newCount) => {
    await CountUpdate(id, newCount);
    setCount(newCount);
  };

  const handleDelete = async () => {
    await CartRemove(id);
    setCount(0);
  };

  useEffect(() => {
    if (id) {
      setCount(IDcount(id));
    }
  }, [id, IDcount]);

  return (
    <div
      data-cy="product"
      style={{
        border: "1px solid black",
        borderRadius: "16px",
        padding: "20px",
        minWidth: "200px",
      }}
    >
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {count === 0 ? (
        <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => {
            addCartItem({
              productId: id,
              count: 1,
            });
          }}
        >
          Add To Cart
        </button>
      ) : (
        <div>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => handleUpdate(count + 1)}
          >
            +
          </button>
          <span data-cy="product-count">{count}</span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => handleUpdate(count - 1)}
          >
            -
          </button>
          <button
            data-cy="product-remove-cart-item-button"
            onClick={handleDelete}
          >
            Remove from cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
