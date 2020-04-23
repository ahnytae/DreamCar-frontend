import React, { Component } from "react";
import "./Apply.scss";

export class Apply extends Component {
    render() {
        return (
            <div className="Apply">
                <div className="ApplyWrapper">
                    <span className="ApplyIcon"><img src={require("../../images/applyLogo.png")} alt="applyLogo"/></span>
                    <h4>시승신청</h4>
                    <p>마세라티만의 차별화된 럭셔리 감성을 지금 경험해 보시기 바랍니다.</p>
                    <div className="ApplyBtn"><a href="#">시승신청</a></div>
                </div>
            </div>
        )
    }
}

export default Apply;