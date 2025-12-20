import React from "react";
import { useMsal } from "@azure/msal-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { instance, accounts } = useMsal();

  const user = accounts?.[0];
  console.log(accounts)
  const userName = user?.name
    ? user.name.includes(" ")
      ? user.name.split(" ")[0]
      : user.name
    : "User";

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  return (
    <header style={styles.header}>
      
      {/* LEFT: Logo */}
      <div style={styles.logo}>
        File Upload Portal
      </div>

      {/* CENTER: Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/upload" style={styles.link}>Upload</Link>
        <Link to="/faq" style={styles.link}>FAQ</Link>
      </nav>

      {/* RIGHT: User Info + Logout */}
      <div style={styles.userSection}>
        <span style={styles.welcomeText}>
          Welcome, {userName}
        </span>
        <button style={styles.primaryBtn} onClick={handleLogout}>
          Sign Out
        </button>
      </div>

    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 28px",
    background: "linear-gradient(90deg, #0078d4, #005a9e)",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  nav: {
    display: "flex",
    gap: "22px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  welcomeText: {
    fontSize: "14px",
    fontWeight: "500",
  },
  primaryBtn: {
    backgroundColor: "#ffffff",
    color: "#005a9e",
    border: "none",
    padding: "8px 18px",
    fontSize: "14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Header;
