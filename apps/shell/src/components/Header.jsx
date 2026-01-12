import { Heart, Search, ShoppingBag, User } from "lucide-react";
import shoplyLogo from "/LogoShoply.svg";
import defaultAvatar from "../assets/avatar-default.svg";
import { useAuth } from "../auth/useAuth.js";
import { useAppDispatch, useAppSelector } from "../store/hooks.js";
import { selectTotalQTY, setOpenCart } from "../store/cart/CartStore.js";

function Header({ onLoginClick }) {
  const dispatch = useAppDispatch();
  const totalQty = useAppSelector(selectTotalQTY);
  const { session, userName, avatarUrl } = useAuth();
  const isAuthenticated = Boolean(session);
  const displayName = userName ?? "Usuario";
  const resolvedAvatarUrl = avatarUrl ?? defaultAvatar;

  return (
    <header className="fixed left-0 right-0 top-0 z-40 mx-auto flex max-w-340 flex-wrap items-center justify-between gap-4 bg-[#f7f5f1]/95 px-6 py-4 backdrop-blur animate-rise">
      <div className="flex items-center gap-2">
        <img
          src={shoplyLogo}
          alt="Shoply"
          className="h-11 w-11 object-contain"
          loading="lazy"
        />
        <div className="text-xl font-bold text-[#0f172a] mt-2">Shoply</div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-2xl items-center gap-2 border border-[#e6e8eb] bg-white px-4 py-2 shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <Search className="h-4 w-4 text-[#94a3b8]" />
          <input
            className="w-full bg-transparent text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs text-[#64748b]">
        <button className="ux-interactive flex items-center gap-2 border border-[#e6e8eb] bg-white px-3 py-2 font-semibold text-[#0f172a]">
          <Heart className="h-4 w-4" />
          Favoritos
        </button>
        <button
          className="ux-interactive relative flex items-center gap-2 border border-[#e6e8eb] bg-white px-3 py-2 font-semibold text-[#0f172a]"
          type="button"
          onClick={() => dispatch(setOpenCart())}
        >
          <ShoppingBag className="h-4 w-4" />
          Carrito
          {totalQty > 0 ? (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0f172a] px-1 text-[0.6rem] font-semibold text-white">
              {totalQty}
            </span>
          ) : null}
        </button>
        {isAuthenticated ? (
          <div className="flex items-center gap-2 rounded-lg border border-[#e6e8eb] bg-white px-3 py-2">
            <img
              src={resolvedAvatarUrl}
              alt={displayName}
              className="h-8 w-8 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-[#0f172a]">
              {displayName}
            </span>
          </div>
        ) : (
          <button
            className="ux-interactive flex items-center gap-2 border rounded-lg border-[#0f172a] bg-[#0f172a] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white"
            onClick={onLoginClick}
            type="button"
          >
            <User className="h-4 w-4" />
            Iniciar sesion
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
