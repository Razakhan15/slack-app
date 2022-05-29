import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { InfoOutlined } from "@mui/icons-material";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { Avatar } from "@mui/material";

function Chat() {
  const { roomId } = useParams();
  const [roomDetials, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("message")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetials?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={
              userImage ? (
                userImage
              ) : (
                <Avatar
                  className="header_avatar"
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
              )
            }
          />
        ))}
      </div>
      <ChatInput channelName={roomDetials?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
