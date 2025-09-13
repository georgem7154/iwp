import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      <style>{`
        /* General Body Styles */
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
          color: #333;
          width:100vw;
        }

        /* Dashboard Layout */
        .dashboard-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width:100vw;
        }

        /* Header */
        .header {
          background-color: #007bff;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3vw;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 1.8vw;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1vw;
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: background-color 0.3s, color 0.3s;
          border-radius: 5px;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        /* Main Layout (Sidebar + Content) */
        .main-layout {
          display: flex;
          flex: 1;
        }

        /* Sidebar */
        .sidebar {
          width: 20vw;
          min-width: 200px;
          background-color: #fff;
          padding: 2rem 0;
          border-right: 1px solid #e0e6ed;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          padding: 0 1.5rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          text-decoration: none;
          color: #555;
          font-size: 1.1vw;
          min-height: 30px;
          font-weight: 500;
          border-radius: 8px;
          transition: background-color 0.3s, color 0.3s;
        }

        .sidebar-link:hover {
          background-color: #e9f5ff;
          color: #007bff;
        }

        .sidebar-link.active {
          background-color: #007bff;
          color: white;
          box-shadow: 0 4px 6px rgba(0, 123, 255, 0.2);
        }

        /* Team Members Box */
        .team-members {
          background-color: #f7f7f7;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1rem;
          margin: auto 1.5rem 0;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .team-members h4 {
          font-size: 1vw;
          font-weight: 600;
          color: #007bff;
          margin: 0 0 0.5rem 0;
          min-height: 14px;
        }
        .team-members ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .team-members li {
          font-size: 0.9vw;
          color: #555;
          line-height: 1.5;
        }

        /* Main Content Area */
        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .main-title {
          color: #0056b3;
          margin-bottom: 1.5rem;
          font-size: 2.2vw;
          font-weight: 600;
          min-height: 25px;
        }

        /* Form Card */
        .form-card {
          background-color: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #444;
        }

        input[type="text"] {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        input[type="text"]:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }

        /* Submit Button */
        .submit-button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: background-color 0.3s, transform 0.2s;
          letter-spacing: 0.5px;
        }

        .submit-button:hover {
          background-color: #218838;
          transform: translateY(-2px);
        }

        /* Media Queries for better responsiveness */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            padding: 1rem;
          }

          .logo {
            font-size: 5vw;
          }

          .nav-link {
            font-size: 3vw;
            margin-top: 10px;
          }

          .main-layout {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #e0e6ed;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          }

          .sidebar-nav {
            flex-direction: row;
            justify-content: space-around;
            padding: 1rem 0;
          }

          .sidebar-link {
            font-size: 3vw;
            min-height: auto;
          }

          .main-content {
            padding: 1rem;
          }

          .main-title {
            font-size: 6vw;
          }
          
          .team-members {
            margin: 1.5rem;
          }
          
          .team-members h4 {
            font-size: 3.5vw;
          }
          
          .team-members li {
            font-size: 3vw;
          }
        }
      `}</style>

      <div className="dashboard-container">
        {/* Header */}
        <header className="header">
          <div className="logo">PLACEMENT CELL</div>
          <nav className="nav">
            <Link to="/overview" className="nav-link">
              Overview
            </Link>
          </nav>
        </header>

        <div className="main-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <Link to="/dashboard" className="sidebar-link active">Dashboard</Link>
              <Link to="/schedule" className="sidebar-link">Schedule</Link>
              <Link to="/analytics" className="sidebar-link">Analytics</Link>
              <Link to="/landing" className="sidebar-link">Landing Page</Link>
            </nav>
            {/* Team Members Box */}
            <div className="team-members">
              <h4>Team Members:</h4>
              <ul>
                <li>George</li>
                <li>Riya</li>
                <li>Keren</li>
                <li>Yeshi</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            <h1 className="main-title">Student Details</h1>
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="studentName">Student Name</label>
                  <input type="text" id="studentName" name="studentName" placeholder="Enter student's name" />
                </div>
                <div className="form-group">
                  <label htmlFor="registerNumber">Register Number</label>
                  <input type="text" id="registerNumber" name="registerNumber" placeholder="Enter register number" />
                </div>
                <div className="form-group">
                  <label htmlFor="tenthMarks">10th Marks (%)</label>
                  <input type="text" id="tenthMarks" name="tenthMarks" placeholder="e.g., 95.5" />
                </div>
                <div className="form-group">
                  <label htmlFor="twelfthMarks">12th Marks (%)</label>
                  <input type="text" id="twelfthMarks" name="twelfthMarks" placeholder="e.g., 92.0" />
                </div>
                <div className="form-group">
                  <label htmlFor="semesterResults">Semester Results (CGPA)</label>
                  <input type="text" id="semesterResults" name="semesterResults" placeholder="e.g., 8.5" />
                </div>
                <div className="form-group">
                  <label htmlFor="aggregate">Consolidated Aggregate (%)</label>
                  <input type="text" id="aggregate" name="aggregate" placeholder="e.g., 88.7" />
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;