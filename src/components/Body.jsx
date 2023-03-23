import React from "react";
import Data from "./Data";

import Carousel from "react-bootstrap/Carousel";
import Typical from "react-typical";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Body({ setCart, cart }) {
  const handleAddcart = (_cart) => {
    setCart([...cart, _cart]);
  };
  const cartitem = (items) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={items.img} />
        <Card.Body>
          <Card.Title>{items.title} </Card.Title>
          <Card.Text>
            <div className="bodyitemin">
              {" "}
              color: {items.desc}
              <br />
              capacity: {items.capacity}
            </div>
          </Card.Text>
          <Button onClick={(event) => handleAddcart(items)} variant="primary">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <br />
      <h3 className="offer">
        WELCOME TO E-PASAL,
        <br></br>
        <p className="textin">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Get 20% off on every product !!!",
              1000,
              " HURRY UP! offer valid till end of this month",
              1000,
            ]}
          />
        </p>
      </h3>
      <br />
      <Carousel variant="dark" className=" carouselitem">
        <Carousel.Item>
          <img
            className=" w-40 "
            src="\resource\iphone.jpg?text=First slide&bg=f5f5f5"
            alt="First slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-40"
            src="\resource\laptop.png?text=Second slide&bg=eee"
            alt="Second slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-40"
            src="\resource\he.png?text=Third slide&bg=e5e5e5"
            alt="Third slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-40"
            src="\resource\airpods.jpg?text=Third slide&bg=e5e5e5"
            alt="fourth slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-40"
            src="\resource\powerbank.png?text=Third slide&bg=e5e5e5"
            alt="fourth slide"
            height="300px"
          />
        </Carousel.Item>
      </Carousel>
      {/* <div className="cartstyle">
        <Card className="items" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="\resource\powerbank.png" />
          <Card.Body>
            <Card.Title>powerbank</Card.Title>
            <Card.Text>
              A Power Bank is a portable charger designed to recharge your
              electronic devices when you're on the move. Ranging in size from
              slim, pocket-sized devices up to larger, higher-capacity Power
              Banks – they can be used to charge smartphones, tablets etc.
            </Card.Text>
            <Button onClick={(event) => handleAddcart({})} variant="primary">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card className="item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="\resource\airpods.jpg" />
          <Card.Body>
            <Card.Title>Airpods</Card.Title>
            <Card.Text>
              A Power Bank is a portable charger designed to recharge your
              electronic devices when you're on the move. Ranging in size from
              slim, pocket-sized devices up to larger, higher-capacity Power
              Banks – they can be used to charge smartphones, tablets etc.
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card className="item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="\resource\laptop.png" />
          <Card.Body>
            <Card.Title>Laptop</Card.Title>
            <Card.Text>
              A Power Bank is a portable charger designed to recharge your
              electronic devices when you're on the move. Ranging in size from
              slim, pocket-sized devices up to larger, higher-capacity Power
              Banks – they can be used to charge smartphones, tablets etc.
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card className="item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="\resource\iphone14.jpg" />
          <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>
              A Power Bank is a portable charger designed to recharge your
              electronic devices when you're on the move. Ranging in size from
              slim, pocket-sized devices up to larger, higher-capacity Power
              Banks – they can be used to charge smartphones, tablets etc.
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </div> */}
      <div className="items">{Data.map(cartitem)}</div>
    </>
  );
}

export default Body;
