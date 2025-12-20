import React from "react";

const FilesPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Uploaded Files</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>File Name</th>
            <th style={styles.th}>Size</th>
            <th style={styles.th}>Uploaded By</th>
            <th style={styles.th}>Uploaded On</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={styles.td}>Invoice_123.pdf</td>
            <td style={styles.td}>2.1 MB</td>
            <td style={styles.td}>John Doe</td>
            <td style={styles.td}>10 Jan 2025</td>
            <td style={styles.td}>
              <button style={styles.viewBtn}>View</button>
              <button style={styles.downloadBtn}>Download</button>
            </td>
          </tr>

          <tr>
            <td style={styles.td}>Contract_Agreement.docx</td>
            <td style={styles.td}>520 KB</td>
            <td style={styles.td}>Jane Smith</td>
            <td style={styles.td}>05 Jan 2025</td>
            <td style={styles.td}>
              <button style={styles.viewBtn}>View</button>
              <button style={styles.downloadBtn}>Download</button>
            </td>
          </tr>

          <tr>
            <td style={styles.td}>Product_Image.png</td>
            <td style={styles.td}>1.3 MB</td>
            <td style={styles.td}>Alex Brown</td>
            <td style={styles.td}>28 Dec 2024</td>
            <td style={styles.td}>
              <button style={styles.viewBtn}>View</button>
              <button style={styles.downloadBtn}>Download</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
    fontWeight: "600",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  th: {
    textAlign: "left",
    padding: "14px",
    backgroundColor: "#0078d4",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
  },
  td: {
    padding: "14px",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "14px",
    color: "#333",
  },
  viewBtn: {
    marginRight: "8px",
    padding: "6px 14px",
    backgroundColor: "#e7f3ff",
    color: "#0078d4",
    border: "1px solid #0078d4",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "13px",
  },
  downloadBtn: {
    padding: "6px 14px",
    backgroundColor: "#0078d4",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "13px",
  },
};

export default FilesPage;

