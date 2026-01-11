import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "../store/hooks.js";
import { setAddItemToCart } from "../store/cart/CartStore.js";

function ProductCard({ id, name, price, subtitle, badge, image, alt }) {
  const dispatch = useAppDispatch();

  return (
    <article className="border border-[#e6e8eb] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <div className="relative h-48 w-full overflow-hidden bg-[#f8fafc]">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 border border-[#e6e8eb] bg-white/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#0f172a]">
          {badge}
        </span>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[#0f172a]">{name}</h3>
          <span className="text-sm font-bold text-[#0f172a]">{price}</span>
        </div>
        <p className="mt-1 text-xs text-[#6b7280]">{subtitle}</p>
      </div>
      <div className="mt-1 flex items-center justify-end text-xs text-[#6b7280]">
        <button
          className="ux-interactive flex items-center gap-2 rounded-sm border border-[#0f172a] bg-[#0f172a] px-3 py-2 text-[10px] font-semibold uppercase text-white"
          type="button"
          onClick={() =>
            dispatch(
              setAddItemToCart({
                id,
                name,
                subtitle,
                price,
                image,
                alt,
              })
            )
          }
        >
          <ShoppingCart className="h-4 w-4" />
          Agregar
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
