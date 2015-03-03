/**
 * Created by anton_gorshenin on 02.03.2015.
 */
var ChatAppDispatcher = require('../core/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ActionTypes = ChatConstants.ActionTypes;
module.exports = {
  receiveAll: function(rawMessages) {
    ChatAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RAW_MESSAGES,
      rawMessages: rawMessages
    });
  },
  receiveCreatedMessage: function(createdMessage) {
    ChatAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RAW_CREATED_MESSAGE,
      rawMessage: createdMessage
    });
  }
};
