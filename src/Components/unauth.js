import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>401</h1>
      <h2 style={styles.title}>Unauthorized Access</h2>
      <p style={styles.text}>
        Hey, your token is Invalid .Try to contact the admin and get the valid
        url to proceed
      </p>

      <button style={styles.button} onClick={() => navigate("/")}>
        ⬅ Go Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f5f7fb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  code: {
    fontSize: "96px",
    fontWeight: "700",
    color: "#d13438",
    margin: "0",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#323130",
  },
  text: {
    maxWidth: "420px",
    color: "#605e5c",
    marginBottom: "24px",
  },
  button: {
    backgroundColor: "#0078d4",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    fontSize: "14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Unauthorized;
