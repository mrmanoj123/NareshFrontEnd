import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>File Upload Portal</div>

      <nav style={styles.nav}>
        <a href="/" style={styles.link}>
          Home
        </a>
        <a href="/upload" style={styles.link}>
          Upload
        </a>
        <a href="/faq" style={styles.link}>
          FAQ
        </a>
      </nav>
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
    position: "relative",
  },
};

export default Header;
