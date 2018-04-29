import React, { Component } from 'react';


class Splash extends Component {
  render() {
    return (
        <div className="splash" style={{"backgroundImage": "url(./background.png)"}}>
          <div className="content">
            <div>
              <h1 className="headline">Trustless Asset Verification</h1>

              <h4>Witness is a new trust layer for investment decision making. Confidently verify asset ownership, value and portfolio returns — without revealing the sensitive details.</h4>

              <div className="email-form">
                <h3>Stay informed</h3>

                <form className="form-inline" action="//network.us18.list-manage.com/subscribe/post?u=8d02e49730f2e912f6396b790&amp;id=5734faf1f1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate="">
                  <div className="form-group">
                    <label htmlFor="mce-EMAIL" className="control-label" style={{display: "none"}}>Email Signup</label>
                    <input type="email" id="mce-EMAIL" name="EMAIL" className="form-control"/>
                    <div style={{position: "absolute", left: "-5000px", "ariaHidden": "true"}}>
                      <input type="text" name="b_8d02e49730f2e912f6396b790_5734faf1f1" tabIndex="-1" value=""/>
                    </div>
                  </div>
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-lg btn-primary"/>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Splash;
