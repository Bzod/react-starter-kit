/**
 * Created by anton_gorshenin on 02.03.2015.
 */

var ChatServerActionCreators = require('../../actions/ChatServerActionCreators');
import messageDummy from '../Chat/ChatExampleData'
// !!! Please Note !!!
// We are using localStorage as an example, but in a real-world scenario, this
// would involve XMLHttpRequest, or perhaps a newer client-server protocol.
// The function signatures below might be similar to what you would build, but
// the contents of the functions are just trying to simulate client-server
// communication and server-side processing.
module.exports = {
  getAllMessages: function() {
// simulate retrieving data from a database
    var rawMessages = JSON.parse(messageDummy);
// simulate success callback
    ChatServerActionCreators.receiveAll(rawMessages);
  },
  createMessage: function(message, threadName) {
// simulate writing to a database
    var rawMessages = JSON.parse(messageDummy);
    var timestamp = Date.now();
    var id = 'm_' + timestamp;
    var threadID = message.threadID || ('t_' + Date.now());
    var createdMessage = {
      id: id,
      threadID: threadID,
      threadName: threadName,
      authorName: message.authorName,
      text: message.text,
      timestamp: timestamp
    };
    rawMessages.push(createdMessage);
    localStorage.setItem('messages', JSON.stringify(rawMessages));
// simulate success callback
    setTimeout(function() {
      ChatServerActionCreators.receiveCreatedMessage(createdMessage);
    }, 0);
  }
};
