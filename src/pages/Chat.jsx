import React from 'react';

function Chat() {
  return (
    <div className="chat-page">
      <h1>Help & Support</h1>
      <p>How can we assist you today?</p>
      <textarea placeholder="Type your message here..." rows="4" cols="50"></textarea>
      <button>Send</button>
    </div>
  );
}

export default Chat;
