import { ShopItem } from "../components/ShopItem";
import { shopItems } from "../data";
import "./Storefront.css";

export function Storefront() {
  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center">
        <div className="d-flex ms-5">
          <div className="hero">
            <a href="./home.html">
              <img src="./images/1homemade.jpg" alt="logo" />
            </a>
          </div>
          <form className="d-flex search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <nav className="d-flex align-items-center me-5">
          <a href="./home.html">Home</a>
          <a href="*">Latest</a>
          <a href="*">Popular</a>
          <a href="*">About</a>
          <span className="divider"></span>
          <a href="*">Register</a>
          <a href="*">Log In</a>
        </nav>
      </header>
      <div className="shop-items-list">
        {shopItems.map((shopItem) => (
          <ShopItem
            key={shopItem.id}
            slug={shopItem.slug}
            name={shopItem.name}
            description={shopItem.description}
          />
        ))}
      </div>
    </div>
  );
}
