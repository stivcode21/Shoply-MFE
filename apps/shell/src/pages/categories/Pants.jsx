import CategoryPanel from "./CategoryPanel.jsx";
import { products } from "../../data/products.js";

function Pants() {
  return (
    <CategoryPanel
      title="Pants"
      subtitle="Clean cuts and everyday silhouettes."
      items={products.pants}
    />
  );
}

export default Pants;
