import React from "react";
import "./DonateHeader.css";

function DonateHeader({ title }) {
  return (
    <div>
      <header className="MuiAppBar-colorSecondary MuiAppBar-positionFixed MuiAppBar-root MuiPaper-elevation4">
        <div className="MuiToolbar-regular MuiToolbar-gutters MuiToolbar-root">
          <div className="MuiGrid-root MuiGrid-align-items-xs-center MuiGrid-container">
            <div className="MuiGrid-root MuiGrid-grid-xs-8 MuiGrid-item">
              <div className="MuiBox-root jss27">
                <b>{title}</b>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="MuiPaper-root MuiPaper-elevation0 MuiStepper-root MuiStepper-horizontal MuiStepper-alternativeLabel jss503">
        <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
          <span className="MuiStepLabel-root MuiStepLabel1-horizontal MuiStepLabel-alternativeLabel ">
            <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
              <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active">
                <circle cx="12" cy="12" r="12"></circle>
                <text
                  className="MuiStepIcon-text"
                  x="12"
                  y="16"
                  textAnchor="middle"
                >
                  1
                </text>
              </svg>
            </span>
            <span className="MuiStepLabel-labelContainer">
              <span>Donation Summary</span>
            </span>
          </span>
        </div>
        <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
          <div className="MuiStepConnector-alternativeLabel MuiStepConnector-root MuiStepConnector-horizontal Mui-disabled jss4362 mob">
            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal jss4365"></span>
          </div>
          <span className="MuiStepLabel-root MuiStepLabel1-horizontal Mui-disabled MuiStepLabel-alternativeLabel ">
            <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
              <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active">
                <circle cx="12" cy="12" r="12"></circle>
                <text
                  className="MuiStepIcon-text"
                  x="12"
                  y="16"
                  textAnchor="middle"
                >
                  2
                </text>
              </svg>
            </span>
            <span className="MuiStepLabel-labelContainer">
              <span>Payment</span>
            </span>
          </span>
        </div>
        <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
          <div className="MuiStepConnector-alternativeLabel MuiStepConnector-root MuiStepConnector-horizontal Mui-disabled jss4362 mob2">
            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal jss4365"></span>
          </div>
          <span className="MuiStepLabel-root MuiStepLabel1-horizontal Mui-disabled MuiStepLabel-alternativeLabel ">
            <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
              <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active">
                <circle cx="12" cy="12" r="12"></circle>
                <text
                  className="MuiStepIcon-text"
                  x="12"
                  y="16"
                  textAnchor="middle"
                >
                  3
                </text>
              </svg>
            </span>
            <span className="MuiStepLabel-labelContainer">
              <span>Payment Done</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DonateHeader;
