import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UploadFiles = () => {
  const { id } = useParams();
  console.log("id:", id);
  const navigate = useNavigate();
  function Move() {
    navigate("/unauth");
  }
  useEffect(() => {
    if (!id) return;
    let tokenresponse;
    const verifyToken = async () => {
      try {
        //const url = `http://localhost:3001/api/token/${id}`;
        const url = `https://urlgeneartor.onrender.com/api/token/${id}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        //console.log(response.ok);
        tokenresponse = response.ok;
        if (!tokenresponse) {
          Move();
        }
      } catch (error) {
        console.error("Token verification error:", error.message);
      }
    };

    verifyToken();

    // ✅ Optional cleanup (not required here)
    return () => {
      console.log("UploadFiles unmounted");
    };
  }, [id]); // ✅ dependency array added

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📤 Upload Files</h2>
      <p>Id : {id}</p>

      <p style={styles.subtitle}>
        Upload your files securely and generate access links that can be shared
        with authorized users only.
      </p>

      <div style={styles.card}>
        <label style={styles.label}>Select File</label>
        <input type="file" style={styles.fileInput} />

        <div style={styles.fileInfo}>
          <strong>Selected File:</strong> None
        </div>

        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn}>⬆ Upload</button>
          <button style={styles.secondaryBtn}>❌ Clear</button>
        </div>
      </div>

      <div style={styles.info}>
        <h4>ℹ️ Notes</h4>
        <ul>
          <li>Maximum file size: 10 MB</li>
          <li>Supported formats: PDF, JPG, PNG, DOCX</li>
          <li>Uploaded files are secured using token-based links</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 24px",
    backgroundColor: "#f5f7fb",
    minHeight: "calc(100vh - 70px)",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#323130",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#605e5c",
    marginBottom: "28px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#323130",
    display: "block",
    marginBottom: "8px",
  },
  fileInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
  },
  fileInfo: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#107c10",
  },
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
  },
  primaryBtn: {
    backgroundColor: "#0078d4",
    color: "#ffffff",
    border: "none",
    padding: "10px 22px",
    fontSize: "14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondaryBtn: {
    backgroundColor: "#e1dfdd",
    color: "#323130",
    border: "none",
    padding: "10px 22px",
    fontSize: "14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  info: {
    backgroundColor: "#ffffff",
    padding: "18px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
};

export default UploadFiles;
