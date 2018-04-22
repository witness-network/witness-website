import React, { Component } from 'react';


class Splash extends Component {
  render() {
    return (
        <div className="splash" style={{"background-image": "url(./background.png)"}}>
          <div className="content">
            <div>
              <h1 className="headline">Decentralized Asset Verification</h1>
              <h4>Witness is a new trust layer for investment decision making. Now financial asset metrics can be independently verified without intermediaries.</h4>

              <div className="email-form">
                <h3>Stay informed</h3>
                <form className="form-inline">
                  <div className="form-group">
                    <label for="formInlineSlackEmail" className="control-label" style={{display: "none"}}>Email Signup</label>
                    <input type="email" id="formInlineSlackEmail" className="form-control"/>
                  </div>
                  <button type="button" className="btn btn-lg btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Splash;
