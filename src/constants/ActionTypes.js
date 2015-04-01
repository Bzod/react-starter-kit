'use strict';

import keyMirror from 'react/lib/keyMirror';

var ActionTypes = keyMirror({

  AUTH_SIGNIN: null,
  LOAD_PAGE: null,
  LOAD_PAGE_SUCCESS: null,
  LOAD_PAGE_ERROR: null,
  CHANGE_LOCATION: null

});

module.exports = ActionTypes;
