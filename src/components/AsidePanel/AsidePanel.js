'use strict';

import React from 'react';

var Aside = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <aside>
        <div className="nav-collapse" id="sidebar">
          <ul className="sidebar-menu" id="nav-accordion">
            <li><a className="glyphicon glyphicon-map-marker" href="/map"> Карта</a></li>
            <li><a className="glyphicon glyphicon-tasks" href="/tasks"> Задачи</a></li>
            <li><a className="glyphicon glyphicon-user" href="/profile"> Настройки профиля</a></li>
            <li><a className="glyphicon glyphicon-calendar" href="/calendar"> Календарь</a></li>
            <li><a className="glyphicon glyphicon-text-size" href="/privacy"> Настройки</a></li>
          </ul>
        </div>
      </aside>
      /* jshint ignore:end */
    );
  }

});

module.exports = Aside;
