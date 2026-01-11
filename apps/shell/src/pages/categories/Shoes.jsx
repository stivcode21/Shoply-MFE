import CategoryPanel from "./CategoryPanel.jsx";
import { products } from "../../data/products.js";

function Shoes() {
  return (
    <CategoryPanel
      title="Shoes"
      subtitle="Curated picks for every occasion."
      items={products.shoes}
    />
  );
}

export default Shoes;
