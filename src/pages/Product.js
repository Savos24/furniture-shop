import { useParams } from "react-router";
import { shopItems } from "../data";
import "./Product.css";

function getShopItemBySlug(slug) {
  return shopItems.find((shopItem) => shopItem.slug === slug);
}

export function Product() {
  const params = useParams();
  const product = getShopItemBySlug(params.productId);

  return (
    <div className="container product-page">
      <div className="product-hero">
        <h1>{product.name}</h1>
        <img
          className="shop-item-image-hero"
          src="https://via.placeholder.com/300"
          alt=""
        />
        <p>{product.description}</p>
      </div>
      <div>❤</div>
    </div>
  );
}
