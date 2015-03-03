/**
 * Created by anton_gorshenin on 02.03.2015.
 */
var ChatAppDispatcher = require('../core/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ChatWebAPIUtils = require('../components/utils/ChatWebAPIUtils');
var ChatMessageUtils = require('../components/utils/ChatMessageUtils');
var ActionTypes = ChatConstants.ActionTypes;
module.exports = {
  createMessage: function(text, currentThreadID) {
    ChatAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_MESSAGE,
      text: text,
      currentThreadID: currentThreadID
    });
    var message = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
    ChatWebAPIUtils.createMessage(message);
  }
};
