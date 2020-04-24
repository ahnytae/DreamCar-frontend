import React, { Component } from "react";
import "./Footer.scss";

<<<<<<< HEAD
export class Footer extends Component {
=======
class Footer extends Component {
>>>>>>> 4d9f5d66aa2c4514b05890578f3060e405eca324
  render() {
    return (
      <div className="Footer">
        <div className="FooterWrapper">
          <div className="FooterBar">
            <ul className="FooterBarList">
              <li className="heading">Models</li>
              <li>
                <a href="#">Ghibli</a>
              </li>
              <li>
                <a href="#">Levante</a>
              </li>
              <li>
                <a href="#">Quattroporte</a>
              </li>
            </ul>
          </div>
          <div className="FooterBar">
            <ul className="FooterBarList">
              <li className="heading">
                <a href="#">서비스</a>
              </li>
              <li className="bold">
                <a href="#">딜러찾기</a>
              </li>
              <li className="bold">
                <a href="#">내차량만들기</a>
              </li>
            </ul>
          </div>
          <div className="FooterBar">
            <ul className="FooterBarList">
              <li className="heading">
                <a href="#">뉴스</a>
              </li>
              <li>
                <a href="#">문의하기</a>
              </li>
              <li>
                <a href="#">네이버포스트</a>
              </li>
            </ul>
          </div>
          <div className="FooterBar FooterBarRight">
            <ul className="FooterBarList">
              <li>
                <div className="locator">
                  <span>
                    <img
                      src={require("../../images/footerImg.PNG")}
                      alt="korea"
                    />
                  </span>
                  <span>South Korea</span>
                  <span className="change">Change</span>
                </div>
              </li>
              <li>
                <div className="FooterTitle">Stay up to date</div>
                <div className="subscribeBtn">
                  <a href="#">subscribe to our newsletter</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="FooterUnderCont">
          <div className="snsIcons">
            <a href="#">
              <img src={require("../../images/facebook.png")} alt="facebook" />
            </a>
            <a href="#">
              <img
                src={require("../../images/instargram.png")}
                alt="instargram"
              />
            </a>
          </div>
          <div className="form">
<<<<<<< HEAD
            {/* <span><img src={ require("/Wecode/React/mase-team/src/images/footerMore.png")} alt="more" /></span> */}
          </div>
          <div className="logo">
            {/* <img src={ require("/Wecode/React/mase-team/src/images/footerLogo.PNG")} alt="logo" /> */}
=======
            <span></span>
          </div>
          <div className="logo">
            <img src={require("../../images/footerLogo.png")} alt="logo" />
>>>>>>> 4d9f5d66aa2c4514b05890578f3060e405eca324
          </div>
          <div className="credits">
            <span>
              <a href="#">Cookie Policy</a>
            </span>
            <span>
              <a href="#">Legal Notes</a>
            </span>
            <br></br>
            <span>
              <a href="#">개인정보 취급방침</a>
            </span>
            <span>
              <a href="#">영상정보처리기기 운영 관리 방침</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
