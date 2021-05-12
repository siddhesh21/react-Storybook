import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <img
        src="https://images.unsplash.com/photo-1500856056008-859079534e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
        height={325}
        width={325}
        alt=""
        className="profile__img"
      />
      <div className="profile__info">
        <h2>Siddhesh</h2>
        <h3>Masters in Computer Science: Intelligent Systems</h3>
      </div>
    </div>
  );
}

export default Profile;
