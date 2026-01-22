const noop = () => {};

export const createSidebarMock = (overrides = {}) => ({
  activeCategory: "camisas",
  setActiveCategory: noop,
  ...overrides,
});

export const isSidebarContract = (value) => {
  return Boolean(
    value &&
      typeof value.activeCategory === "string" &&
      typeof value.setActiveCategory === "function"
  );
};

export const resolveSidebarContract = (value, fallback = createSidebarMock()) => {
  return isSidebarContract(value) ? value : fallback;
};
