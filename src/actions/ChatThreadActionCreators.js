/**
 * Created by anton_gorshenin on 02.03.2015.
 */
var ChatAppDispatcher = require('../core/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ActionTypes = ChatConstants.ActionTypes;
module.exports = {
  clickThread: function(threadID) {
    ChatAppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_THREAD,
      threadID: threadID
    });
  }
};
