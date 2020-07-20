import React from "react";

import { withRouter, Link } from "react-router-dom";

import "./Nav.scss";

//img import

import NavLogo from "../../images/NavLogo.png";

import NavMore from "../../images/NavMore.png";

const Nav = ({ history }) => {
  return (
    <div className="NavCont">
      <h1 class="logo">
        <img src={NavLogo} alt="NavLogo" />
      </h1>

      <ul class="NavLeft">
        <li class="model">
          <span className="arrowClose">모델</span>

          <div class="subModelWrapper">
            <div class="subModelCont">
              <div class="model1">
                <div class="Modletitle">Ghibli</div>

                <div class="car">
                  <img
                    src="https://www.maserati.com/content/dam/maserati/international/Models/default/2019/ghibli/ghibli_side.png.png/jcr:content/renditions/cq5dam.web.1400.10000.jpeg"
                    alt="car"
                  />
                </div>

                <div class="moreBox">
                  <div class="moreView">자세히 보기</div>

                  <div
                    class="myCarMake"
                    onClick={() => history.push("/makemycar")}
                  >
                    내 차량 만들기
                  </div>
                </div>
              </div>

              <div class="model1">
                <div class="Modletitle">Levante</div>

                <div class="car">
                  <img
                    src="https://www.maserati.com/content/dam/maserati/international/Models/default/2019/levante/levante_side_V2.png/jcr:content/renditions/cq5dam.web.1400.10000.jpeg"
                    alt="car"
                  />
                </div>

                <div class="moreBox">
                  <div class="moreView">자세히 보기</div>

                  <div class="myCarMake">내 차량 만들기</div>
                </div>
              </div>

              <div class="model1">
                <div class="Modletitle">Quattroporte</div>

                <div class="car">
                  <img
                    src="https://www.maserati.com/content/dam/maserati/international/Models/default/2019/quattroporte/quattroporte_side.png/jcr:content/renditions/cq5dam.web.1400.10000.jpeg"
                    alt="car"
                  />
                </div>

                <div class="moreBox">
                  <div class="moreView">자세히 보기</div>

                  <div class="myCarMake">내 차량 만들기</div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="shopping model">
          <span className="arrowClose">쇼핑</span>

          <div class="subModelWrapper">
            <div class="subModelCont shoppingCont">
              <div class="model1">
                <div className="NavTitle">구매</div>

                <p className="Navfont">
                  <span className="arrow90Deg">딜러 찾기</span>
                </p>

                <p className="Navfont">
                  <span
                    className="arrow90Deg"
                    onClick={() => history.push("/siseon")}
                  >
                    시승 신청
                  </span>
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="promotion">
          <Link to="#">프로모션</Link>
        </li>

        <li className="service model">
          <span className="arrowClose">서비스 & 애프터세일즈</span>

          <div class="subModelWrapper">
            <div class="introduceCont">
              <div className="content">
                <div className="NavTitle">Service</div>

                <div className="Navfont">
                  <span className="arrow90Deg">사전구매 유지보수 프로그램</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">연장 보증</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티 고객지원</span>
                </div>
              </div>

              <div className="content">
                <div className="NavTitle">Utility</div>

                <div className="Navfont">
                  <span className="arrow90Deg">차량 사용자 설명서</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">블루투스</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">클래식 차량 서비스</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">Safety & ADAS</span>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link to="#">뉴스</Link>
        </li>

        <li className="introduceCont model">
          <span className="arrowClose">브랜드</span>

          <div className="subModelWrapper">
            <div className="introduceCont">
              <div className="content">
                <div className="NavTitle">Our Story</div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티의 가치</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티의 역사</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티 클래식 카</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티 콘셉트 카</span>
                </div>
              </div>

              <div className="content">
                <div className="NavTitle">Our World</div>

                <div className="Navfont">
                  <span className="arrow90Deg">마스터 마세라티 드라이빙</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티 팩토리 투어</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티 폴로 투어 2020</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">마세라티 스토어</span>
                </div>
              </div>

              <div className="content">
                <div className="NavTitle">Our Partners</div>

                <div className="Navfont">
                  <span className="arrow90Deg">Ermenegildo Zegna</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">Bulgari</span>
                </div>

                <div className="Navfont">
                  <span className="arrow90Deg">Shell</span>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link to="#">인증중고차</Link>
        </li>
      </ul>

      <ul class="NavRight">
        <li class="search">
          <Link to="#">딜러찾기</Link>
        </li>

        <li class="apply" onClick={() => history.push("/siseon")}>
          <Link to="#">시승신청</Link>
        </li>

        <li class="moreBtn">
          <img src={NavMore} alt="NavMore" />
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Nav);
