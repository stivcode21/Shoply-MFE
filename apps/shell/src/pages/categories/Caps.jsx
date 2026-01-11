import CategoryPanel from "./CategoryPanel.jsx";
import { products } from "../../data/products.js";

function Caps() {
  return (
    <CategoryPanel
      title="Caps"
      subtitle="Accessories with attitude to finish the look."
      items={products.caps}
    />
  );
}

export default Caps;
