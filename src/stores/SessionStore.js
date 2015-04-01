'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

var _users = {};
console.log(_users,'user in store');

if (__SERVER__) {
  _users['Test'] = 'Test';
}
console.log(_users,'if (__SERVER__)');
var SessionStore = assign({}, EventEmitter.prototype, {

  /**
   * Gets page data by the given URL path.
   *
   * @param {String} path URL path.
   * @returns {*} Page data.
   */
  isLoggedIn(user) {
    return user in _users ? _users[user] : {
      name: 'Пользователь не найден',
      type: 'notfound'
    };
  },

  /**
   * Emits change event to all registered event listeners.
   *
   * @returns {Boolean} Indication if we've emitted an event.
   */
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },

  /**
   * Register a new change event listener.
   *
   * @param {function} callback Callback function.
   */
  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove change event listener.
   *
   * @param {function} callback Callback function.
   */
  off(callback) {
    this.off(CHANGE_EVENT, callback);
  }

});

SessionStore.dispatcherToken = Dispatcher.register((payload) => {
  var action = payload.action;
  if (action.actionType === ActionTypes.AUTH_SIGNIN) {
      if (!action.err) {
        _users[action.data.id] = action.data;
        SessionStore.emitChange();
      }
    // Do nothing
  }
});
module.exports = SessionStore;
