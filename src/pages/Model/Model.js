import React, { Component } from "react";
import ModelCont from "./ModelCont";
import "./Model.scss";

<<<<<<< HEAD
export class Model extends Component {
=======
class Model extends Component {
>>>>>>> 4d9f5d66aa2c4514b05890578f3060e405eca324
  render() {
    return (
      <div className="Model">
        <div className="TitleBg">
          <div>
            <p>모델</p>
            <span>
              작은 디테일까지 심혈을 기울여 완성된 이탈리안 디자인의 걸작
            </span>
          </div>
        </div>
        <div className="ModelWrapper">
          <ModelCont />
        </div>
      </div>
    );
  }
}

export default Model;
