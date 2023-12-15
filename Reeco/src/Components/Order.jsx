// import React from "react";

// const Order = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "12px 30px",
//           boxShadow:
//               "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
//         }}
//       >
//         <div>
//           <p style={{ color: "grey", fontSize: "20px", fontWeight: "600" }}>
//             Order > Order 32457ABC
//           </p>
//           <h1 style={{ fontSize: "38px" }}>Order 32457ABC</h1>
//         </div>
//         <div

//         >
//           <button
//             style={{
//               color: "rgb(9, 121, 105)",
//               backgroundColor: "#fff",
//               borderRadius: "30px",
//               padding: "12px 20px",
//               marginTop: "30%",
//             }}
//           >
//             Back
//           </button>
//           <button
//             style={{
//               backgroundColor: "rgb(9, 121, 105)",
//               color: "#fff",
//               fontWeight: "700",
//               borderRadius: "30px",
//               padding: "12px 20px",
//               marginLeft: "30px",
//             }}
//           >
//             Approved Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;
import React from "react";
import styled from "styled-components";

const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OrderInfo = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const OrderTitle = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const OrderNumber = styled.h1`
  font-size: 38px;
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

const BackButton = styled.button`
  color: rgb(9, 121, 105);
  background-color: #fff;
  border-radius: 30px;
  padding: 12px 20px;
  margin-top: 30%;
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const ApproveButton = styled.button`
  background-color: rgb(9, 121, 105);
  color: #fff;

  border-radius: 30px;
  padding: 12px 20px;
  margin-top: 30%;
  margin-left: 20px;
   @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const Order = () => {
  return (
    <OrderContainer>
      <OrderInfo>
        <OrderTitle>Order ---- Order 32457ABC</OrderTitle>
        <OrderNumber>Order 32457ABC</OrderNumber>
      </OrderInfo>
      <ButtonsContainer>
        <BackButton>Back</BackButton>
        <ApproveButton>Approved Order</ApproveButton>
      </ButtonsContainer>
    </OrderContainer>
  );
};

export default Order;
