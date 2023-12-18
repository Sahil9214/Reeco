
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
