import CategoryPanel from "./CategoryPanel.jsx";
import { products } from "../../data/products.js";

function Sets() {
  return (
    <CategoryPanel
      title="Sets"
      subtitle="Complete looks curated to mix and match."
      items={products.outfits}
    />
  );
}

export default Sets;
