import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addPurchaseData } from "../Redux/action";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: grey;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const AddProductButton = styled(Button)`
  background-color: green;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  border-radius: 20px;
  align-content: center;
`;

const AddItemPurchase = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const handleAdd = async () => {
    let obj = {
      id: Date.now(),
      name,
      price,
      quantity,
      total: 10,
      brand,
      image,
      status: "",
    };

    try {
      dispatch(addPurchaseData(obj));
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Wrapper>
      <StyledLabel>Add Name of Product</StyledLabel>
      <br />
      <StyledInput
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add name "
      />
      <br />
      <StyledLabel>Add Image URL</StyledLabel>
      <br />
      <StyledInput
        onChange={(e) => setImage(e.target.value)}
        type="url"
        placeholder="Add image url "
      />
      <br />
      <StyledLabel>Add Quantity</StyledLabel>
      <br />
      <StyledInput
        onChange={(e) => setQuantity(e.target.value)}
        type="text"
        placeholder="Add Quantity "
      />
      <br />
      <StyledLabel>Add Price of Product</StyledLabel>
      <br />
      <StyledInput
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        placeholder="Add Price "
      />
      <br />
      <StyledLabel>Add Brand of Product</StyledLabel>
      <br />
      <StyledInput
        onChange={(e) => setBrand(e.target.value)}
        type="text"
        placeholder="Add brand name "
      />
      <br />
      <br />
      <AddProductButton onClick={handleAdd}>Add Product</AddProductButton>
    </Wrapper>
  );
};

export default AddItemPurchase;
