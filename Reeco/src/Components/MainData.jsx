import React, { useEffect } from "react";
import styled from "styled-components";
import search from "../Images/search.png";
import printer from "../Images/printer.png";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import {
  actionProductData,
  actionApprovedData,
  actionCrossDataMissing,
  actionCrossDataMissingUrgent,
} from "../Redux/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import check from "../Images/check.png";
import cross from "../Images/close.png";
import EditFile from "../Status/EditFile";
import AddItemPurchase from "../Status/AddItemPurchase";
const Container = styled.div`
  width: 100%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const Header = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid grey;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 25px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 30px;
`;

const SearchIcon = styled.img`
  width: 20px;
  margin: 0 8px;
`;

const Content = styled.div`
  width: 83%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  color: grey;
  font-weight: 600;
  font-size: 24px;
  padding: 10px;
`;

const Td = styled.td`
  font-size: 20px;
  color: grey;
  padding: 18px 40px;
  text-align: center;
`;

const ResponsiveImage = styled.img`
  width: 30px;
`;

const Button = styled.button`
  color: green;
  border: 1px solid green;
  border-radius: 20px;
  padding: 12px 30px;
  background-color: #fff;
  font-weight: 700;
`;

//Edit Message
function Edit({ name, brand, image, quantity, total, price, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button style={{ padding: "10px" }} onClick={onOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditFile
              name={name}
              brand={brand}
              image={image}
              quantity={quantity}
              total={total}
              price={price}
              id={id}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              style={{ border: "none", color: "green" }}
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              style={{
                fontWeight: "700",
                backgroundColor: "green",
                color: "#fff",
              }}
            >
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
const MainData = () => {
  const dispatch = useDispatch();
  const stateVal = useSelector((store) => store?.product);
  console.log("store", stateVal);
  const isAuth = useSelector((state) => state?.isLoading);

  //Right Mark
  const handleApproved = async (id) => {
    try {
      await dispatch(actionApprovedData(id));
      await dispatch(actionProductData());
    } catch (err) {
      console.log("err", err);
    }
  };
  //Handle Cross
  //Cross sign
  function Cross({ id, name }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleMissing = async (id) => {
      await dispatch(actionCrossDataMissing(id));
      await dispatch(actionProductData());
    };
    const handleMissingUrget = async (id) => {
      await dispatch(actionCrossDataMissingUrgent(id));
      await dispatch(actionProductData());
    };

    return (
      <>
        <Button style={{ padding: "10px" }} onClick={onOpen}>
          <img src={cross} width={"20px"} />
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Missing Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Is {name}...urgent?</h1>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={() => handleMissingUrget({ id })}
                colorscheme="blue"
                mr={3}
              >
                No
              </Button>
              <Button onClick={() => handleMissing({ id })} variant="ghost">
                yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  //Add Item
  function AddItem() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button style={{ marginRight: "20px" }} onClick={onOpen}>
          Add Item
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddItemPurchase />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  useEffect(() => {
    dispatch(actionProductData());
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <InputContainer>
            <SearchIcon src={search} alt="Search" />
            <SearchInput type="text" placeholder="Search" />
          </InputContainer>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AddItem />
          <ResponsiveImage src={printer} alt="Printer" />
        </div>
      </Header>
      <br />
      <br />
      <Content>
        <div style={{ padding: "10px 20px" }}>
          <Table>
            <thead style={{ background: "#f2f2f2" }}>
              <tr>
                <Th>Product Name</Th>
                <Th>Brand</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {!isAuth ? (
                stateVal?.reverse().map((el) => (
                  <tr key={el.id}>
                    <Td>
                      <ResponsiveImage src={el.image} alt={el.name} />
                      {el.name}
                    </Td>
                    <Td>{el.brand}</Td>
                    <Td>{el.price}</Td>
                    <Td>{el.quantity}</Td>
                    <Td>{(el.price * el.quantity).toFixed(2)}</Td>

                    <Td
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <h1
                        style={{
                          color: el.status === "Approved" ? "white" : "black",
                          backgroundColor:
                            el.status === "Approved"
                              ? "green"
                              : el.status === "Missing"
                              ? "orange"
                              : el.status === "Missing-urgent"
                              ? "red"
                              : "#fff", // You can customize the color for other cases
                          padding: "8px",
                          borderRadius: "15px",
                        }}
                      >
                        {el.status}
                      </h1>
                      <Button
                        onClick={() => handleApproved(el.id)}
                        style={{
                          padding: "10px",
                        }}
                      >
                        <img src={check} width={"20px"} alt="right" />
                      </Button>

                      <Cross id={el.id} name={el.name} />

                      <Edit
                        id={el.id}
                        name={el.name}
                        price={el.price}
                        quantity={el.quantity}
                        brand={el.brand}
                        total={el.total}
                        image={el.image}
                      />
                    </Td>
                  </tr>
                ))
              ) : (
                <tr>
                  <Td colSpan="6" style={{ textAlign: "center" }}>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Content>
    </Container>
  );
};

export default MainData;
