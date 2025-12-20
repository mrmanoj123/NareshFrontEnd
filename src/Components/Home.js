import React from "react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const Home = () => {
  const Move = useNavigate();
  function Uploadfiles() {
    Move("/upload");
  }
  const { instance, accounts } = useMsal();
   function viewfile() {
    const currentuser = accounts[0]
    const role = currentuser.idTokenClaims.roles.length < 1 ? "user" : currentuser.idTokenClaims.roles[0]
    console.log(role)
    
    Move("/files");
  }
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to Link Portal</h1>
        <p style={styles.subtitle}>
          Securely upload files, generate access links, and manage your content
          with ease. This portal helps you share files safely using token-based
          access.
        </p>

        <div style={styles.buttonGroup}>
          <button
            style={styles.primaryBtn}
            onClick={() => {
              Uploadfiles();
            }}
          >
            📤 Upload Files
          </button>
          <button style={styles.secondaryBtn} onClick={()=>{
            viewfile()
          }}>📁 View Files</button>
        </div>
      </section>

      {/* Info Cards */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>🔐 Secure Access</h3>
          <p>
            All file links are protected using JWT-based validation to ensure
            only authorized users can access them.
          </p>
        </div>

        <div style={styles.card}>
          <h3>⚡ Fast & Reliable</h3>
          <p>
            Upload and retrieve files quickly with optimized APIs and scalable
            backend services.
          </p>
        </div>

        <div style={styles.card}>
          <h3>📊 Easy Management</h3>
          <p>
            View uploaded files, track access, and manage links from one
            centralized dashboard.
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 24px",
    backgroundColor: "#f5f7fb",
    minHeight: "calc(100vh - 70px)",
  },
  hero: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 50px",
  },
  title: {
    fontSize: "34px",
    fontWeight: "700",
    color: "#323130",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#605e5c",
    lineHeight: "1.6",
    marginBottom: "28px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    backgroundColor: "#0078d4",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    fontSize: "15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondaryBtn: {
    backgroundColor: "#e1dfdd",
    color: "#323130",
    border: "none",
    padding: "12px 24px",
    fontSize: "15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "22px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    textAlign: "left",
  },
};

export default Home;
