'use strict';

import React from 'react';

var ModalLogin = React.createClass({
  getInitialState: function() {
    return {
        name: '',
        pass: ''
    };
  },
  handleChange: function(event) {
    this.setState({name: event.target.name,pass: event.target.pass});
  },
  render: function() {
    return (
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Закрыть</span></button>
                <h4 className="modal-title" id="myModalLabel">Авторизация</h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Логин</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Введите логин" ref="name" defaultValue={this.props.name} onChange={this.handleChange}/>
                  </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Пароль</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Введите пароль" ref="pass" defaultValue={this.props.pass} onChange={this.handleChange}/>
                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                <button type="button" className="btn btn-primary" onClick={this.authReq}>Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  authReq: function(e) {
    e.preventDefault();
    var data = {
      name     : this.refs.name.getDOMNode().value,
      pass : this.refs.pass.getDOMNode().value
    };

    if (!data){
    console.log("err")}
    var ws = new WebSocket("ws://185.49.69.143:20080");
    ws.onopen = function () {
      console.log('conected');
      console.log(data.name, "name", data.pass, 'pass')
      ws.send(JSON.stringify({
        "pid": 1,
        "method": "auth.login",
        "data": {"login": data.name, "password": data.pass}
      }));
    };
    ws.onmessage = function (message) {
      var str = message.data.substring(0, message.data.length - 1);
      console.log(JSON.parse(str))
    };
  }
});
var authReq = function(event) {
  event.preventDefault();
  console.log(event,"event from auth");
  //var ws = new WebSocket("ws://185.49.69.143:20080");
  //ws.onopen = function () {
  //  console.log('conected');
  //  ws.send(JSON.stringify({
  //    "pid": 1,
  //    "method": "auth.login",
  //    "data": {"login": event.name, "password": event.pass}
  //  }));
  //};
  //ws.onmessage = function (message) {
  //  var str = message.data.substring(0, message.data.length - 1);
  //  console.log(JSON.parse(str))
  //};
};

var ModalRegistration = React.createClass({
  render: function() {
    return (
      <Modal {...this.props} bsStyle="primary" title="Регистрация" animation={false}>
        <div className="modal-body">

        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});

var Header = React.createClass({
  render() {
    return(
      <div className="header">
        <div className="container">
          <div className="header-info">
            <div className="logo">
              <a href="#">
                <img className="img-responsive" alt="Mobile Route" src={"images/logo.png"}/>
              </a>
            </div>
            <div className="header-right">
              <div className="menu">
                <span className="menu">Меню</span>
                <ul className="navigatoin">
                  <li>
                    <a className="scroll" href="#Home">Главная</a>
                  </li>
                  <li>
                    <a className="scroll" href="#About">Узнать больше</a>
                  </li>
                  <li>
                    <a className="scroll" href="#Services">Услуги</a>
                  </li>
                  <li>
                    <a className="scroll" href="#Features">Примеры</a>
                  </li>
                  <li>
                    <a className="scroll" href="#Price">Цены</a>
                  </li>
                  <li>
                    <a className="scroll" href="#Contact">Контакты</a>
                  </li>
                    <button bsStyle="primary" bsSize="medium" data-toggle="modal" data-target="#myModal">Войти</button>
                </ul>
              </div>
            </div>
            <ModalLogin />
          </div>
        </div>
        <div id="Home" className="header-bottom">
          <div className="container">
            <div className="col-sm-4 h-left">
              <span></span>
            </div>
            <div className="col-sm-8 h-right">
              <h1>Маршрутизатор вашего бизнеса.</h1>
              <p>Lollipop liquorice lollipop ice cream cheesecake halvah jelly-o. Gummies lollipop macaroon marshmallow icing. Cookie chupa chups cake dessert lollipop marzipan donut apple pie. Cookie cotton candy oat cake sweet roll topping apple pie marzipan.</p>
              <div className="buttons">
                <p>
                    <button className="btn btn-success btn-lg">Начать сейчас</button>
                    <button className="btn btn-warning btn-lg" href="#About">Узнать больше</button>
                </p>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }

});

module.exports = Header;
