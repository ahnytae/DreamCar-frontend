import React, { useState } from "react";
import "./CarAcc.scss";
import "./BuildCarMain.scss";
import CarAccBtnCount from "./CarAccBtnCount";
import CarAccAllDefaultList from "./CarAccAllDefaultList";
// import CarAccAllActiveList from "./CarAccAllActiveList";
import CarAccProtect from "./CarAccProtect";
import CarAccSafety from "./CarAccSafety";
import CarAccFunction from "./CarAccFunction";
import CarAccSoultion from "./CarAccSoultion";
import CarAccWheel from "./CarAccWheel";

//import img
import CarAccTapMore from "../../images/CarAccTapMore.png";

const CarAcc = () => {
  const [tabBtn, setTabBtn] = useState(0);

  const accBtn = [
    ["전체"],
    ["관리 및 보호"],
    ["안전"],
    ["기술 및 기능"],
    ["이동 및 적재 솔루션"],
    ["타이어 및 휠"],
  ];
  return (
    <div className="CarAcc">
      <h2 className="title">액세서리</h2>
      <div className="carOutlookTapCont">
        <ul className="toolBar">
          {accBtn.map((name, idx) => {
            return (
              <li
                onClick={() => setTabBtn(idx)}
                className={tabBtn === idx ? "Clicked" : ""}
              >
                {name}
              </li>
            );
          })}
          <li>
            <span>
              <img src={CarAccTapMore} alt="tapMore" />
            </span>
          </li>
        </ul>
      </div>
      <div className="selectionsCont">
        <ul className="scrollSection">
          {tabBtn === 0 && <CarAccAllDefaultList />}
          {tabBtn === 1 && <CarAccProtect />}
          {tabBtn === 2 && <CarAccSafety />}
          {tabBtn === 3 && <CarAccFunction />}
          {tabBtn === 4 && <CarAccSoultion />}
          {tabBtn === 5 && <CarAccWheel />
        </ul>
      </div>
      <div className="priceCheck">
        <p>
          <span className="accMoreHide">최종가격 확인하기:</span>
        </p>
        <div className="button">완료하고 요약 보기</div>
      </div>
    </div>
  );
};

export default CarAcc;
