import CategoryPanel from "./CategoryPanel.jsx";
import { products } from "../../data/products.js";

function Glasses() {
  return (
    <CategoryPanel
      title="Glasses"
      subtitle="Details that elevate every look."
      items={products.glasses}
    />
  );
}

export default Glasses;
