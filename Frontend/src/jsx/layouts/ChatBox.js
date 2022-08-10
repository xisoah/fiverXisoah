import React, { useState } from "react";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Components
import Chat from "../components/chatBox/Chat";

const ChatBox = ({ onClick, toggle }) => {
   const [toggleTab, settoggleTab] = useState(
      window.location.hash.slice(1) ? window.location.hash.slice(1) : "chat"
   );

   return (
      <div className={`chatbox ${toggle === "chatbox" ? "active" : ""}`}>
         <div className="chatbox-close" onClick={() => onClick()}></div>
         <div className="custom-tab-1">
            <div className="tab-content">
               <Chat
                  PerfectScrollbar={PerfectScrollbar}
                  toggle={toggle}
                  toggleTab={toggleTab}
               />
            </div>
         </div>
      </div>
   );
};

export default ChatBox;
