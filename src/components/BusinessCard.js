import React from "react";
import "../styles/businessCard.scss"

class BusinessCard extends React.Component {
  render() {
    return (
      <>
        {/* <section className="BusinessCardSection"> */}
        <div class="patrick-card" id="business-card">
          <p id="phone-number">212 555 6342</p>
          <div id="company-section">
            <p id="company">Pierce & Pierce</p>
            <p id="murders-and-executions">Mergers And Acquisitions</p>
          </div>
          <div id="name-and-title">
            <div id="names">
              <p id="first-name">Patrick</p>
              <p id="last-name">Bateman</p>
            </div>
            <p id="title">Vice President</p>
          </div>
          <p id="bottom-info">
            358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10
            4534
          </p>
          <div id="watermark">Paul Allen</div>
          <p></p>
        </div>
        {/* </section> */}
      </>
    );
  }
}

export default BusinessCard;
