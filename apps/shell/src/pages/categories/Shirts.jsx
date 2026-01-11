import CategoryPanel from "./CategoryPanel.jsx";
import { products } from "../../data/products.js";

function Shirts() {
  return (
    <CategoryPanel
      title="Shirts"
      subtitle="Explore the standout shirts right now."
      items={products.shirts}
    />
  );
}

export default Shirts;
