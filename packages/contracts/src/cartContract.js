const noop = () => {};

export const createCartMock = (overrides = {}) => ({
  isOpen: false,
  items: [],
  totalAmount: 0,
  totalQty: 0,
  openCart: noop,
  closeCart: noop,
  clearCart: noop,
  addItem: noop,
  increaseItem: noop,
  decreaseItem: noop,
  removeItem: noop,
  ...overrides,
});

export const isCartContract = (value) => {
  return Boolean(
    value &&
      typeof value.openCart === "function" &&
      typeof value.closeCart === "function" &&
      typeof value.increaseItem === "function"
  );
};

export const resolveCartContract = (value, fallback = createCartMock()) => {
  return isCartContract(value) ? value : fallback;
};
