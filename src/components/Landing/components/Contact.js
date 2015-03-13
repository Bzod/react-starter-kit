'use strict';

import React from 'react';

var Contact = React.createClass({
  getInitialState: function() {
    return {
      name: 'Ваше имя',
      mail: 'Ваш email',
      theme: 'Тема'
    };
  },
  handleChange: function(event) {
    this.setState({name: event.target.name},{mail: event.target.mail},{theme: event.target.theme});
  },

  render() {
    var name = this.state.name;
    var mail = this.state.mail;
    var theme = this.state.theme;
    return (
      /* jshint ignore:start */
      <div id="Contact" className="contact">
        <div className="container">
          <h3>Связжитесь с нами</h3>
          <div className="contact-us">
            <div className="col-md-6 contact-info">
              <ul className="icon-menu">
                <li className="ion">
                  <a href="#">
                    <img src={"images/01.png"}/>
                    </a>
                </li>
                <li className="fon">
                  <p>111000, Россия, Москва, Тверская д1</p>
                </li>
              </ul>
              <form>
                <input className="text" type="text" value={name} onChange={this.handleChange}/>
                <input className="text" type="text" value={mail} onChange={this.handleChange}/>
                <input className="text" type="text" value={theme} onChange={this.handleChange}/>
              </form>
            </div>
            <div className="col-md-6 contact-intro">
              <div className="contact-information">
                <ul className="contact-in">
                  <li className="iod"></li>
                  <li className="ion">
                    <a href="#">
                      <img src={"images/02.png"}/>
                    </a>
                  </li>
                  <li className="elt">
                    <p>(0271) 123 - 456</p>
                  </li>
                </ul>
              </div>
              <div className="contact-infor">
                <ul className="contact-is">
                  <li className="iod-1"></li>
                  <li className="ion">
                    <a href="#">
                      <img src={"images/03.png"}/>
                    </a>
                  </li>
                  <li className="elt-1">
                    <p>
                      <a href="">client@mobileroute.com</a>
                    </p>
                  </li>
                </ul>
               <textarea defaultValue="Message..."></textarea>
               <input type="submit"/>
              </div>
            </div>
            <div classNameName="clearfix"></div>
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Contact;
