import React from "react";

const User = ({ userdata }) => {
  const { avatar_url, name, login, followers, following } = userdata;
  return (
    <div className="user-wrapper">
      <img className="user-img" src={avatar_url} />
      <a href={`https://github.com/${name || login}`}>{login}</a>
      <div>{name || login}</div>
      <div>Followers:{followers}</div>
      <div>Following:{following}</div>
    </div>
  );
};

export default User;
