import { useAppSelector } from "../store/hooks.js";
import { selectActiveCategory } from "../store/sidebar/SidebarStore.js";
import Shirts from "../pages/categories/Shirts.jsx";
import Sets from "../pages/categories/Sets.jsx";
import Glasses from "../pages/categories/Glasses.jsx";
import Caps from "../pages/categories/Caps.jsx";
import Pants from "../pages/categories/Pants.jsx";
import Shoes from "../pages/categories/Shoes.jsx";

const categoryMap = {
  camisas: Shirts,
  pantalones: Pants,
  conjuntos: Sets,
  zapatos: Shoes,
  gorras: Caps,
  gafas: Glasses,
};

function CategorySection() {
  const activeCategory = useAppSelector(selectActiveCategory);
  const CategoryComponent = categoryMap[activeCategory] ?? Shirts;

  return <CategoryComponent />;
}

export default CategorySection;
