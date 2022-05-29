import React from "react";
import { useNavigate } from "react-router-dom";
import db from "./firebase";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useNavigate();

  const selectChannel = () => {
    if (id) {
      history(`/room/${id}`);
    } else {
      history(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_hash">#{title}</h3>
      )}
    </div>
  );
}

export default SidebarOption;
