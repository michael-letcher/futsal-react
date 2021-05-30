import React from "react";

function LoginBox() {
  return (
    <div
      className="login-box"
      style={{
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Login</p>
      <input placeholder="User" type="text" />
      <input placeholder="Password" type="password" />

      <div
        className="action-btns"
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          className="login-btn"
          style={{
            width: "50%",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginBox;
