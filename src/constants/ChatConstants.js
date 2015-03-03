/**
 * Created by anton_gorshenin on 02.03.2015.
 */

var keyMirror = require('react/lib/keymirror');
module.exports = {
  ActionTypes: keyMirror({
    CLICK_THREAD: null,
    CREATE_MESSAGE: null,
    RECEIVE_RAW_CREATED_MESSAGE: null,
    RECEIVE_RAW_MESSAGES: null
  }),
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
