import {
  PRODUCT_DATA,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  RIGHT_APPROVED,
  CROSS_MISSING_URGENT,
  CROSS_MISSING,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY
} from "./action.type";
import axios from "axios";
//getData
export const actionProductData = (pay) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let res = await axios(`http://localhost:8080/reeco`);

    dispatch({ type: PRODUCT_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
//Approved Data;
export const actionApprovedData=(id)=>async(dispatch)=>{

  dispatch({ type: PRODUCT_LOADING });
  try {
    let updatedData = { status: "Approved" };
    let res = await axios.patch(`http://localhost:8080/reeco/${id}`,updatedData);

    dispatch({ type: RIGHT_APPROVED, payload: id });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
}

//Cross Data  Missing;
export const actionCrossDataMissing = (action) => async (dispatch) => {
  const id = +action.id; // Convert to a number using the unary plus operator

  console.log(action.id, typeof action.id);

  dispatch({ type: PRODUCT_LOADING });

  try {
    const updatedData = { status: "Missing" };
    const res = await axios.patch(`http://localhost:8080/reeco/${id}`, updatedData);

    dispatch({ type: CROSS_MISSING, payload: id });
  } catch (err) {
    console.error("Error updating status:", err);
    dispatch({ type: PRODUCT_ERROR, payload: err.message || "An error occurred" });
  }
};
//Cross Data  Missing Urgent;
export const actionCrossDataMissingUrgent=(action)=>async(dispatch)=>{
  const id = +action.id; // Convert to a number using the unary plus operator

  console.log(action.id, typeof action.id);

  dispatch({ type: PRODUCT_LOADING });
  dispatch({ type: PRODUCT_LOADING });
  try {
    let updatedData = { status: "Missing-urgent" };
    let res = await axios.patch(`http://localhost:8080/reeco/${id}`,updatedData);

    dispatch({ type: CROSS_MISSING_URGENT, payload: id });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
}
//increase qunatity
export const IncreaseQuantity = (action) => async (dispatch) => {
  console.log(action,"skaksha")
  try {
    const id = +action.id; 
    dispatch({ type: PRODUCT_LOADING });

    try {

      const updatedData = { quantity: action.quantity + 1 };
      const res = await axios.patch(`http://localhost:8080/reeco/${id}`, updatedData);

      dispatch({ type: INCREASE_QUANTITY, payload: id });
    } catch (err) {
     
      dispatch({ type: PRODUCT_ERROR, payload: err.message || "An error occurred" });
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
      const res = await axios.patch(`http://localhost:8080/reeco/${id}`, updatedData);

      dispatch({ type: DECREASE_QUANTITY, payload: id });
    } catch (err) {
     
      dispatch({ type: PRODUCT_ERROR, payload: err.message || "An error occurred" });
    }
  } catch (err) {
    console.log("err", err);
  }
};
