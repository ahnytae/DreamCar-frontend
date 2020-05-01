import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";

class CarAccSafety extends Component {
  constructor() {
    super();
    this.state = {
      carAcc: [],
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/caracc.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            carAcc: res.accessory[1]["안전"],
          },
          () => console.log("acc", res.accessory[1]["안전"])
        );
      });
  };
  render() {
    const { carAcc } = this.state;

    const mappedComp = carAcc.map((item) => {
      return <CarAccBtnCount name={item.name} imgSrc={item.thumbnail_url} />;
    });
    return <div className="safety">{mappedComp}</div>;
  }
}
export default CarAccSafety;
