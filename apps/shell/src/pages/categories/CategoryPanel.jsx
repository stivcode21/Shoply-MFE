import ProductCard from "../../components/ProductCard.jsx";

function CategoryPanel({ title, subtitle, items = [] }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
          {title}
        </div>
        <div className="text-lg font-semibold text-[#0f172a]">{subtitle}</div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            subtitle={product.subtitle}
            badge={product.badge}
            image={product.image}
            alt={product.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPanel;
