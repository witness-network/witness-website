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

                <form className="form-inline" action="//network.us18.list-manage.com/subscribe/post?u=8d02e49730f2e912f6396b790&amp;id=5734faf1f1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
                  <div className="form-group">
                    <label for="mce-EMAIL" className="control-label" style={{display: "none"}}>Email Signup</label>
                    <input type="email" id="mce-EMAIL" name="EMAIL" className="form-control"/>
                    <div style={{position: "absolute", left: "-5000px", "aria-hidden": "true"}}>
                      <input type="text" name="b_8d02e49730f2e912f6396b790_5734faf1f1" tabindex="-1" value=""/>
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
