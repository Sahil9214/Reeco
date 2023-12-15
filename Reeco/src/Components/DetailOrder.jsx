// import React from "react";
// const currentDate = new Date();

// const DetailOrder = () => {
//   const [formattedDate, setFormattedDate] = React.useState("");

//   React.useEffect(() => {
//     const currentDate = new Date();

//     const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     const dayOfWeek = daysOfWeek[currentDate.getDay()];
//     const month = months[currentDate.getMonth()];
//     const dayOfMonth = currentDate.getDate();

//     const formattedDateString = `${dayOfWeek}, ${month} ${dayOfMonth}`;
//     setFormattedDate(formattedDateString);
//   }, []);
//   return (
//     <div>
//       <div
//         style={{
//           width: "80%",
//           margin: "auto",
//           display: "flex",
//           justifyContent: "space-between",
//           border: "2px solid #868483",
//           borderRadius: "10px",
//           padding: "12px 30px",
//         }}
//       >
//         <div>
//           <p style={{ color: "grey", fontWeight: "700", fontSize: "18px" }}>
//             Supplier
//           </p>
//           <h3>
//             East coast fruits <br /> & vegetables
//           </h3>
//         </div>
//         <div style={{height:"80px",width:"2px",backgroundColor:"#868483",marginTop:"10px"}}></div>
//         <div>
//           <p style={{ color: "grey", fontWeight: "700", fontSize: "18px" }}>
//             Shipping date
//           </p>
//           <h3>{formattedDate} </h3>
//         </div>
//         <div style={{height:"80px",width:"2px",backgroundColor:"",marginTop:"10px"}}></div>
       
       
//         <div>
//           <p style={{ color: "grey", fontWeight: "700", fontSize: "18px" }}>
//             {" "}
//             Total
//           </p>
//           <h3>
//             East coast fruits <br /> & vegetables
//           </h3>
//         </div>
//         <div style={{height:"80px",width:"2px",backgroundColor:"",marginTop:"10px"}}></div>
//         <div>
//           <p style={{ color: "grey", fontWeight: "700", fontSize: "18px" }}>
//             Category
//           </p>
//           <h3>
//             East coast fruits <br /> & vegetables
//           </h3>
//         </div>
//         <div style={{height:"80px",width:"2px",backgroundColor:"",marginTop:"10px"}}></div>
//         <div>
//           <p style={{ color: "grey", fontWeight: "700", fontSize: "18px" }}>
//             Department
//           </p>
//           <h3>300-444-678</h3>
//         </div>
//         <div style={{height:"80px",width:"2px",backgroundColor:"",marginTop:"10px"}}></div>
//         <div>
//           <p style={{ color: "grey", fontWeight: "700", fontSize: "18px" }}>
//             Status
//           </p>
//           <h3>
//             Awaiting your <br /> Approval
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailOrder;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DetailOrderContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border: 2px solid #868483;
  border-radius: 10px;
  padding: 12px 30px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const DetailSection = styled.div`
  /* Adjust the width as needed */
  margin-top: 10px;

  @media (max-width: 950px) {
    flex: 0 0 100%;
  }
`;

const Divider = styled.div`
  height: 80px;
  width: 2px;
  background-color: #868483;
  margin-top: 10px;

  @media (max-width: 950px) {
    display: none;
  }
`;

const DetailTitle = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 18px;
`;

const DetailValue = styled.h3`
  margin-top: 10px;
`;

const DetailOrder = () => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();

    const formattedDateString = `${dayOfWeek}, ${month} ${dayOfMonth}`;
    setFormattedDate(formattedDateString);
  }, []);

  return (
    <DetailOrderContainer>
      <DetailSection>
        <DetailTitle>Supplier</DetailTitle>
        <DetailValue>East coast fruits <br /> & vegetables</DetailValue>
      </DetailSection>
      <Divider />
      <DetailSection>
        <DetailTitle>Shipping date</DetailTitle>
        <DetailValue>{formattedDate}</DetailValue>
      </DetailSection>
      <Divider />
      <DetailSection>
        <DetailTitle>Total</DetailTitle>
        <DetailValue>East coast fruits <br /> & vegetables</DetailValue>
      </DetailSection>
      <Divider />
      <DetailSection>
        <DetailTitle>Category</DetailTitle>
        <DetailValue>East coast fruits <br /> & vegetables</DetailValue>
      </DetailSection>
      <Divider />
      <DetailSection>
        <DetailTitle>Department</DetailTitle>
        <DetailValue>300-444-678</DetailValue>
      </DetailSection>
      <Divider />
      <DetailSection>
        <DetailTitle>Status</DetailTitle>
        <DetailValue>Awaiting your <br /> Approval</DetailValue>
      </DetailSection>
    </DetailOrderContainer>
  );
};

export default DetailOrder;
