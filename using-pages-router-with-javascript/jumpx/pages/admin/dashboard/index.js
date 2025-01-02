import React, { useState } from 'react';
import Link from 'next/link';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy data for demonstration
  const recentSubscriptions = [
    {
      id: 1,
      user: "John Doe",
      plan: "Enterprise Plan",
      amount: "$999",
      date: "2024-03-15",
      status: "active"
    },
    {
      id: 2,
      user: "Sarah Smith",
      plan: "Professional Plan",
      amount: "$499",
      date: "2024-03-14",
      status: "active"
    },
    // Add more...
  ];

  const jobApplications = [
    {
      id: 1,
      name: "Michael Johnson",
      position: "Frontend Developer",
      experience: "4 years",
      appliedDate: "2024-03-15",
      status: "pending"
    },
    {
      id: 2,
      name: "Emily Brown",
      position: "UI/UX Designer",
      experience: "3 years",
      appliedDate: "2024-03-14",
      status: "interviewed"
    },
    // Add more...
  ];

  const stats = {
    totalRevenue: "$25,999",
    activeSubscriptions: 48,
    totalApplications: 156,
    pendingReviews: 23
  };

  return (
    <>
      <style jsx>{`
        .admin-dashboard {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 250px;
          background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%);
          padding: 30px 20px;
          color: white;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          padding: 0 10px;
        }

        .nav-item {
          padding: 12px 20px;
          margin: 5px 0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-item:hover, .nav-item.active {
          background: rgba(255, 255, 255, 0.1);
        }

        .main-content {
          flex: 1;
          margin-left: 250px;
          padding: 30px;
          background: #f8fafc;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .stat-card h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 8px;
          background: linear-gradient(45deg, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-card p {
          color: #64748b;
          font-size: 0.9rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        .table-container {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th {
          text-align: left;
          padding: 12px;
          border-bottom: 2px solid #e2e8f0;
          color: #64748b;
          font-weight: 600;
        }

        .table td {
          padding: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .status-active {
          background: #dcfce7;
          color: #166534;
        }

        .status-pending {
          background: #fef3c7;
          color: #92400e;
        }

        .status-interviewed {
          background: #dbeafe;
          color: #1e40af;
        }

        .action-btn {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
          border: none;
          background: #f1f5f9;
          color: #1e293b;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: #e2e8f0;
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 70px;
            padding: 20px 10px;
          }

          .main-content {
            margin-left: 70px;
          }

          .nav-text {
            display: none;
          }

          .logo {
            font-size: 1.2rem;
            text-align: center;
          }
        }
      `}</style>

      <div className="admin-dashboard">
        <div className="sidebar">
          <div className="logo">E2BH Admin</div>
          <nav>
            <div 
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <i className='bx bxs-dashboard'></i>
              <span className="nav-text">Overview</span>
            </div>
            <div 
              className={`nav-item ${activeTab === 'subscriptions' ? 'active' : ''}`}
              onClick={() => setActiveTab('subscriptions')}
            >
              <i className='bx bx-dollar-circle'></i>
              <span className="nav-text">Subscriptions</span>
            </div>
            <div 
              className={`nav-item ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              <i className='bx bx-briefcase'></i>
              <span className="nav-text">Job Applications</span>
            </div>
            <div 
              className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <i className='bx bx-user'></i>
              <span className="nav-text">Users</span>
            </div>
            <div 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <i className='bx bx-cog'></i>
              <span className="nav-text">Settings</span>
            </div>
          </nav>
        </div>

        <div className="main-content">
          <div className="header">
            <h1>Dashboard Overview</h1>
            <div className="user-menu">
              {/* Add user menu/profile here */}
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>{stats.totalRevenue}</h3>
              <p>Total Revenue</p>
            </div>
            <div className="stat-card">
              <h3>{stats.activeSubscriptions}</h3>
              <p>Active Subscriptions</p>
            </div>
            <div className="stat-card">
              <h3>{stats.totalApplications}</h3>
              <p>Total Applications</p>
            </div>
            <div className="stat-card">
              <h3>{stats.pendingReviews}</h3>
              <p>Pending Reviews</p>
            </div>
          </div>

          <div className="content-grid">
            <div className="table-container">
              <h2>Recent Subscriptions</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSubscriptions.map((sub) => (
                    <tr key={sub.id}>
                      <td>{sub.user}</td>
                      <td>{sub.plan}</td>
                      <td>{sub.amount}</td>
                      <td>{sub.date}</td>
                      <td>
                        <span className={`status-badge status-${sub.status}`}>
                          {sub.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h2>Recent Applications</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobApplications.map((app) => (
                    <tr key={app.id}>
                      <td>{app.name}</td>
                      <td>{app.position}</td>
                      <td>
                        <span className={`status-badge status-${app.status}`}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard; 