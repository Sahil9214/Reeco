import {
  CROSS_MISSING,
  CROSS_MISSING_URGENT,
  PRODUCT_DATA,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  RIGHT_APPROVED,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  ADD_DATA,
  EDIT_PRICE,
} from "./action.type";

const initialState = {
  isLoading: false,
  product: [],
  error: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PRODUCT_DATA: {
      return {
        ...state,
        isLoading: false,
        product: payload,
      };
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    case RIGHT_APPROVED: {
      const { productId } = payload;
      const updatedProducts = state.product.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            status: "Approved",
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    }
    case CROSS_MISSING: {
      const productId = payload;

      const updatedProducts = state.product.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            status: "Missing",
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    }
    case CROSS_MISSING_URGENT: {
      const { productId } = payload;
      const updatedProducts = state.product.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            status: "Missing-urgent",
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    }
    case INCREASE_QUANTITY:
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === payload) {
            // Ensure quantity doesn't go below 0
            const newQuantity = Math.max(0, item.quantity - 1);

            return {
              ...item,
              quantity: newQuantity,
            };
          }
          return item;
        }),
      };
    case ADD_DATA:
      return {
        ...state,
        products: [...state.product, payload],
      };
    case EDIT_PRICE:
      const { id, num } = payload;

      const updatedProducts = state.product.map((product) => {
        if (product.id === id) {
          return { ...product, price: num };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
        // Add other properties if needed
      };
    default: {
      return state;
    }
  }
};

export default reducer;
