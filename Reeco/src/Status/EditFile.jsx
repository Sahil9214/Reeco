import React, { useState } from "react";
import { IncreaseQuantity, DecreaseQuantity, editPrice } from "../Redux/action";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";

const EditFile = ({ name, brand, image, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const [editedPrice, setEditedPrice] = useState(0);
  const handleIncrease = async ({ id, quantity }) => {
    console.log("id", id);
    console.log("qunatity", quantity);

    dispatch(IncreaseQuantity({ id, quantity }));
  };
  const handleDecrease = async ({ id, quantity }) => {
    setQuantity(+{ quantity } - 1);
    dispatch(DecreaseQuantity(id, quantities));
  };
  //edit Price;
  const handleEditPrice = async () => {
    try {
      dispatch(editPrice({ id, num: editedPrice }));
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div>
      <h2
        style={{
          color: "black",
          fontWeight: "700",
          lineHeight: "150%",
          fontSize: "24px",
        }}
      >
        {name}
      </h2>
      <br />
      <p style={{ color: "grey", fontSize: "20px" }}>{brand}</p>
      <br />
      <br />
      <div>
        <div>
          <div>
            <img src={image} padding="2px" width={"90px"} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p style={{ color: "grey", fontSize: "20px" }}>Price $</p>
            <p style={{ color: "grey", fontSize: "20px" }}>Qunatity $</p>
            <p style={{ color: "grey", fontSize: "20px" }}>Total</p>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* <button
              style={{
                padding: "3px 10px",
                border: "1px solid grey",
                borderRadius: "20px",
              }}
            >
              {price}
            </button> */}
            <input
              onChange={(e) => setEditedPrice(e.target.value)}
              type="number"
              placeholder={price}
              style={{
                borderRadius: "20px",
                padding: "10px 2px",
                border: "2px solid grey",
                color: "grey",
                textAlign: "center",
                width: "60px",
              }}
            />
            <button
              style={{
                padding: "3px 2px",
                border: "1px solid grey",
                borderRadius: "20px",
                fontWeight: "700",
                fontSize: "12px",
              }}
              onClick={() => handleEditPrice({id})}
            >
              Add Price
            </button>
            <div>
              <button
                onClick={() => handleIncrease({ id, quantity })}
                style={{
                  padding: "3px 10px",
                  border: "1px solid grey",
                  borderRadius: "20px",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                +
              </button>
              <button
                style={{
                  padding: "3px 10px",
                  border: "1px solid grey",
                  borderRadius: "20px",
                  marginLeft: "2px",
                }}
              >
                {quantity}
              </button>
              <button
                onClick={() => handleDecrease({ id, quantity })}
                style={{
                  padding: "3px 10px",
                  border: "1px solid grey",
                  borderRadius: "20px",
                  marginLeft: "2px",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                -
              </button>
            </div>
            <button
              style={{
                padding: "3px 10px",
                border: "1px solid grey",
                borderRadius: "20px",
              }}
            >
              {total}
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h2
          style={{
            color: "black",
            fontWeight: "700",
            lineHeight: "150%",
            fontSize: "24px",
          }}
        >
          Choose reason
        </h2>
        <br />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              borderRadius: "30px",
              padding: "5px",
              border: "1px solid grey",
            }}
          >
            Missing product
          </button>
          <button
            style={{
              borderRadius: "30px",
              padding: "5px",
              border: "1px solid grey",
            }}
          >
            {" "}
            Quantity is not the same
          </button>

          <button
            style={{
              borderRadius: "30px",
              padding: "5px",
              border: "1px solid grey",
            }}
          >
            other
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFile;
