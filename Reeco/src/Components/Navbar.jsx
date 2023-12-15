// import React from "react";
// import cart from "../Images/cart.png";

// const Navbar = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           backgroundColor: "rgb(9, 121, 105)",
//           padding: "12px 30px",
//           fontFamily: "sans-serif",
//         }}
//       >
//         <div
//           style={{
//             width: "40%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ color: "#fff", fontWeight: "800",fontFamily:"cursive" }}>Reeco</h1>
//           <h2 style={{ color: "#fff", fontWeight: "600" }}>Store</h2>
//           <h2 style={{ color: "#fff", fontWeight: "600" }}>Order</h2>
//           <h2 style={{ color: "#fff", fontWeight: "600" }}>Analytics</h2>
//         </div>
//         <div>
//           <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//             <img
//               src={cart}
//               width={"40px"}
//               style={{
//                 marginRight: "50px",
//               }}
//             />
//             <h2 style={{ color: "#fff", fontWeight: "500" }}>
//               Hello ,John Doe
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import styled from "styled-components";
import cart from "../Images/cart.png";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(9, 121, 105);
  padding: 12px 30px;
  font-family: sans-serif;
  box-shadow:
  rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px,
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Brand = styled.h1`
  color: #fff;
  font-weight: 800;
  font-family: cursive;
  margin-right: 30px;
  margin-bottom:15px

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 0; /* Reset margin for smaller screens */
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.h2`
  color: #fff;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <div style={{ display: "flex", alignItems: "center",justifyContent:"space-around" ,
    }}>
        <Brand>Reeco</Brand>
        <Menu>
          <MenuItem>Store</MenuItem>
          <MenuItem>Order</MenuItem>
          <MenuItem>Analytics</MenuItem>
        </Menu>
      </div>
      <div>
        <CartContainer>
          <img
            src={cart}
            width={"40px"}
            style={{
              marginRight: "20px",
            }}
          />
          <h2 style={{ color: "#fff", fontWeight: "500" }}>Hello, John Doe</h2>
        </CartContainer>
      </div>
      <Hamburger onClick={toggleMenu}>☰</Hamburger>
      {isMenuOpen && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MenuItem>Store</MenuItem>
          <MenuItem>Order</MenuItem>
          <MenuItem>Analytics</MenuItem>
        </div>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
