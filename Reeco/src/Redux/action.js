import {
  PRODUCT_DATA,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  RIGHT_APPROVED,
  CROSS_MISSING_URGENT,
  CROSS_MISSING,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  ADD_DATA,
  EDIT_PRICE,
} from "./action.type";
import axios from "axios";
//getData
export const actionProductData = (pay) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let res = await axios(`https://rich-ruby-lemming-wear.cyclic.app/reeco`);

    dispatch({ type: PRODUCT_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
//Approved Data;
export const actionApprovedData = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let updatedData = { status: "Approved" };
    let res = await axios.patch(
      `https://rich-ruby-lemming-wear.cyclic.app/reeco/${id}`,
      updatedData
    );

    dispatch({ type: RIGHT_APPROVED, payload: id });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

//Cross Data  Missing;
export const actionCrossDataMissing = (action) => async (dispatch) => {
  const id = +action.id; // Convert to a number using the unary plus operator

  console.log(action.id, typeof action.id);

  dispatch({ type: PRODUCT_LOADING });

  try {
    const updatedData = { status: "Missing" };
    const res = await axios.patch(
      `https://rich-ruby-lemming-wear.cyclic.app/reeco/${id}`,
      updatedData
    );

    dispatch({ type: CROSS_MISSING, payload: id });
  } catch (err) {
    console.error("Error updating status:", err);
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.message || "An error occurred",
    });
  }
};
//Cross Data  Missing Urgent;
export const actionCrossDataMissingUrgent = (action) => async (dispatch) => {
  const id = +action.id; // Convert to a number using the unary plus operator

  console.log(action.id, typeof action.id);

  dispatch({ type: PRODUCT_LOADING });
  dispatch({ type: PRODUCT_LOADING });
  try {
    let updatedData = { status: "Missing-urgent" };
    let res = await axios.patch(
      `https://rich-ruby-lemming-wear.cyclic.app/reeco/${id}`,
      updatedData
    );

    dispatch({ type: CROSS_MISSING_URGENT, payload: id });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
//increase qunatity
export const IncreaseQuantity = (action) => async (dispatch) => {
  console.log(action, "skaksha");
  try {
    const id = +action.id;
    dispatch({ type: PRODUCT_LOADING });

    try {
      const updatedData = { quantity: action.quantity + 1 };
      const res = await axios.patch(
        `https://rich-ruby-lemming-wear.cyclic.app/reeco/${id}`,
        updatedData
      );

      dispatch({ type: INCREASE_QUANTITY, payload: id });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.message || "An error occurred",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};
//Decrease Qunatity
export const DecreaseQuantity = (action) => async (dispatch) => {
  try {
    const id = +action.id;
    dispatch({ type: PRODUCT_LOADING });

    try {
      const updatedData = { quantity: action.quantity - 1 };
      await axios.patch(
        `https://rich-ruby-lemming-wear.cyclic.app/reeco/${id}`,
        updatedData
      );

      dispatch({ type: DECREASE_QUANTITY, payload: id });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.message || "An error occurred",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};

//Add Data;
export const addPurchaseData = (payload) => async (dispatch) => {
  try {
    await axios.post(
      `https://rich-ruby-lemming-wear.cyclic.app/reeco`,
      payload
    );
    dispatch({ type: ADD_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

//edit Price;
export const editPrice =
  ({ id, num }) =>
  async (dispatch) => {
    num = +num;
    try {
      await axios.patch(
        `https://rich-ruby-lemming-wear.cyclic.app/reeco/${id}`,
        { price: num }
      );

      // Dispatch action indicating successful price edit if needed
      dispatch({ type: EDIT_PRICE, payload: { id, num } });
    } catch (err) {
      console.error("Error updating price:", err);
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.message || "An error occurred",
      });
    }
  };
