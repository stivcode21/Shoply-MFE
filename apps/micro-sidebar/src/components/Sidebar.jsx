const defaultFilters = [
  {
    title: "Brand",
    items: ["Nike", "Adidas", "A.P.C", "New Balance", "Puma", "Uniqlo"],
  },
  {
    title: "Color",
    items: ["Neutrals", "Blue", "Stone", "Olive"],
  },
  {
    title: "Size",
    items: ["XS", "S", "M", "L", "XL"],
  },
];

function Sidebar({ filters = defaultFilters }) {
  return (
    <aside className="border border-[#e6e8eb] bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-[#0f172a]">Filter</div>
        {/* <button
          className="text-[0.65rem] font-semibold text-[#2563eb]"
          type="button"
        >
          Advanced
        </button> */}
      </div>

      <div className="mt-5 space-y-5">
        {filters.map((section) => (
          <div key={section.title} className="space-y-3">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
              {section.title}
            </div>
            <div className="space-y-2 text-sm text-[#0f172a]">
              {section.items.map((item) => (
                <label
                  key={item}
                  className="flex items-center justify-between border border-[#eef1f4] bg-[#f8fafc] px-3 py-2 text-sm"
                >
                  <span>{item}</span>
                  <input className="h-4 w-4 accent-[#0f172a]" type="checkbox" />
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-3">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
            Price
          </div>
          <div className="border border-[#e6e8eb] bg-white px-3 py-3">
            <div className="flex items-center justify-between text-xs text-[#94a3b8]">
              <span>$40</span>
              <span>$340</span>
            </div>
            <input
              className="mt-2 w-full accent-[#0f172a]"
              type="range"
              min="40"
              max="340"
              defaultValue="210"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
