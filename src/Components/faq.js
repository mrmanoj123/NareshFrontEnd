import React from "react";

const Faq = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Frequently Asked Questions</h1>

        <div style={styles.faqItem}>
          <div style={styles.question}>What is this portal used for?</div>
          <div style={styles.answer}>
            This portal allows users to upload files securely and generate
            shareable links for easy access.
          </div>
        </div>

        <div style={styles.faqItem}>
          <div style={styles.question}>Is my data secure?</div>
          <div style={styles.answer}>
            Yes, all data is protected using secure authentication and access
            controls.
          </div>
        </div>

        <div style={styles.faqItem}>
          <div style={styles.question}>Who can upload files?</div>
          <div style={styles.answer}>
            Only authorized users with proper permissions can upload files.
          </div>
        </div>

        <div style={styles.faqItem}>
          <div style={styles.question}>How long are generated links valid?</div>
          <div style={styles.answer}>
            Generated links are time-limited and automatically expire for
            security purposes.
          </div>
        </div>

        <div style={styles.faqItem}>
          <div style={styles.question}>Can I regenerate an expired link?</div>
          <div style={styles.answer}>
            Yes, you can generate a new link anytime without re-uploading the
            file.
          </div>
        </div>

        <div style={styles.faqItem}>
          <div style={styles.question}>What file formats are supported?</div>
          <div style={styles.answer}>
            PDF, DOCX, XLSX, PNG, JPG, and ZIP file formats are supported.
          </div>
        </div>

        <div style={styles.faqItem}>
          <div style={styles.question}>Who should I contact for support?</div>
          <div style={styles.answer}>
            Please contact your system administrator or IT support team.
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f5f7fb",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Segoe UI, Arial",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#323130",
  },
  faqItem: {
    borderBottom: "1px solid #e1dfdd",
    padding: "15px 0",
  },
  question: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#0078d4",
    marginBottom: "8px",
  },
  answer: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.6",
  },
};

export default Faq;
