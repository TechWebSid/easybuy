import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [analyticsData, setAnalyticsData] = useState({
    totalApplications: 0,
    applicationsByPosition: [],
    monthlyApplications: [],
    recentApplications: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  useEffect(() => {
    if (activeTab === 'applicants') {
        fetchApplications();
    }
  }, [activeTab]);

  const fetchAnalyticsData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/job/analytics');
      const data = await response.json();
      
      if (data.success) {
        // Transform monthly applications data for chart
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const transformedMonthlyData = data.data.monthlyApplications.map(item => ({
          month: monthNames[item._id.month - 1],
          applications: item.count
        }));

        setAnalyticsData({
          totalApplications: data.data.totalApplications,
          applicationsByPosition: data.data.applicationsByPosition,
          monthlyApplications: transformedMonthlyData,
          recentApplications: data.data.recentApplications.map(app => ({
            id: app._id,
            name: app.name,
            position: app.position,
            experience: app.experience,
            appliedDate: new Date(app.createdAt).toLocaleDateString(),
            status: 'pending' // You can add status field in your schema if needed
          }))
        });
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchApplications = async () => {
    try {
        setIsLoading(true);
        const response = await fetch('http://localhost:5000/api/job/applications-list');
        const data = await response.json();
        
        if (data.success) {
            setApplications(data.data);
        }
    } catch (error) {
        console.error('Error fetching applications:', error);
    } finally {
        setIsLoading(false);
    }
  };

  const monthlyRevenue = [
    { month: 'Jan', revenue: 15000 },
    { month: 'Feb', revenue: 38000 },
    { month: 'Mar', revenue: 65999 }, 
  ];

  const subscriptionsByPlan = [
    { name: 'Basic', value: 18 },
    { name: 'Standard', value: 15 },
    { name: 'Premium', value: 78 },
  ];

  const applicationsByDepartment = analyticsData.applicationsByPosition;

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
    totalApplications: analyticsData.totalApplications,
    pendingReviews: 23
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const tenderAnalytics = {
    monthlyTenders: [
      { month: 'Jan', count: 12, value: 45000 },
      { month: 'Feb', count: 15, value: 55000 },
      { month: 'Mar', count: 18, value: 65000 },
      { month: 'Apr', count: 14, value: 52000 },
      { month: 'May', count: 20, value: 75000 },
      { month: 'Jun', count: 22, value: 85000 },
    ],
    tendersByCategory: [
      { category: 'Web Development', count: 45 },
      { category: 'Mobile Apps', count: 32 },
      { category: 'UI/UX Design', count: 28 },
      { category: 'Cloud Services', count: 25 },
      { category: 'Cybersecurity', count: 20 },
    ],
    tenderStatus: [
      { name: 'Active', value: 35 },
      { name: 'Completed', value: 45 },
      { name: 'Under Review', value: 15 },
      { name: 'Cancelled', value: 5 },
    ]
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
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
            
            <div className="graphs-grid">
              <div className="graph-container revenue-trend">
                <h2>Revenue Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyRevenue}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis 
                      label={{ 
                        value: 'Revenue ($)', 
                        angle: -90, 
                        position: 'insideLeft' 
                      }}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Revenue']}
                      contentStyle={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#2563eb" 
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="graph-container subscription-distribution">
                <h2>Subscription Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={subscriptionsByPlan}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {subscriptionsByPlan.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="tables-grid">
              <div className="table-container recent-subscriptions">
                <div className="table-header">
                  <h2>Recent Subscriptions</h2>
                  <button className="view-all-btn">View All</button>
                </div>
                <div className="table-wrapper">
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
              </div>

              <div className="table-container recent-applications">
                <div className="table-header">
                  <h2>Recent Applications</h2>
                  <button className="view-all-btn">View All</button>
                </div>
                <div className="table-wrapper">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Experience</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <tr>
                          <td colSpan="5" className="loading">Loading...</td>
                        </tr>
                      ) : (
                        analyticsData.recentApplications.map((app) => (
                          <tr key={app.id}>
                            <td>{app.name}</td>
                            <td>{app.position}</td>
                            <td>{app.experience}</td>
                            <td>{app.appliedDate}</td>
                            <td>
                              <span className={`status-badge status-${app.status}`}>
                                {app.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        );

      case 'subscriptions':
        return (
          <div className="graph-container">
            <h2>Subscriptions by Plan</h2>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={subscriptionsByPlan}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {subscriptionsByPlan.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );

      case 'applications':
        return (
          <div className="graph-container">
            <h2>Applications by Position</h2>
            {isLoading ? (
              <div className="loading">Loading...</div>
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={applicationsByDepartment}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis 
                    label={{ 
                      value: 'Number of Applications', 
                      angle: -90, 
                      position: 'insideLeft' 
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="count" 
                    fill="#2563eb"
                    radius={[4, 4, 0, 0]}
                  >
                    {applicationsByDepartment.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        );

      case 'tenders':
        return (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>156</h3>
                <p>Total Tenders</p>
              </div>
              <div className="stat-card">
                <h3>35</h3>
                <p>Active Tenders</p>
              </div>
              <div className="stat-card">
                <h3>$2.5M</h3>
                <p>Total Value</p>
              </div>
              <div className="stat-card">
                <h3>89%</h3>
                <p>Success Rate</p>
              </div>
            </div>

            <div className="graphs-grid">
              <div className="graph-container">
                <h2>Tender Trends</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart 
                    data={tenderAnalytics.monthlyTenders}
                    margin={{ top: 20, right: 50, left: 50, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis 
                      yAxisId="left" 
                      orientation="left" 
                      stroke="#2563eb"
                      label={{ 
                        value: 'Number of Tenders', 
                        angle: -90, 
                        position: 'inside-left',
                        offset: 0,
                        style: {
                          textAnchor: 'middle',
                          fontSize: '0.9rem',
                          fill: '#64748b',
                        }
                      }} 
                    />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right" 
                      stroke="#10b981"
                      label={{ 
                        value: 'Value ($)', 
                        angle: 90, 
                        position: 'outside',
                        offset: 0
                      }} 
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="count" 
                      stroke="#2563eb" 
                      name="Number of Tenders"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10b981" 
                      name="Tender Value"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="graph-container">
                <h2>Tender Status Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={tenderAnalytics.tenderStatus}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    >
                      {tenderAnalytics.tenderStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="graph-container" style={{ marginTop: '30px' }}>
              <h2>Tenders by Category</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={tenderAnalytics.tendersByCategory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-45} textAnchor="end" height={70} />
                  <YAxis label={{ value: 'Number of Tenders', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="count" 
                    fill="#2563eb"
                    radius={[4, 4, 0, 0]}
                  >
                    {tenderAnalytics.tendersByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case 'applicants':
        return (
            <div className="applications-container">
                <h2>Job Applications</h2>
                {isLoading ? (
                    <div className="loading">Loading applications...</div>
                ) : (
                    <div className="applications-grid">
                        {applications.map((application) => (
                            <div key={application._id} className="application-card">
                                <div className="application-header">
                                    <h3>{application.name}</h3>
                                    <span className="position-badge">{application.position}</span>
                                </div>
                                <div className="application-details">
                                    <div className="detail-item">
                                        <span className="label">Email:</span>
                                        <span>{application.email}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Phone:</span>
                                        <span>{application.phone}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Experience:</span>
                                        <span>{application.experience}</span>
                                    </div>
                                    {application.portfolio && (
                                        <div className="detail-item">
                                            <span className="label">Portfolio:</span>
                                            <a href={application.portfolio} target="_blank" rel="noopener noreferrer">
                                                View Portfolio
                                            </a>
                                        </div>
                                    )}
                                    <div className="detail-item">
                                        <span className="label">Resume:</span>
                                        <a href={`http://localhost:5000/${application.resume}`} target="_blank" rel="noopener noreferrer">
                                            Download Resume
                                        </a>
                                    </div>
                                    <div className="detail-item full-width">
                                        <span className="label">Message:</span>
                                        <p className="message">{application.message}</p>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Applied On:</span>
                                        <span>{new Date(application.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );

      // Add more cases for other tabs...
      default:
        return null;
    }
  };

  const additionalStyles = `
    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      font-size: 1.2rem;
      color: #64748b;
    }

    .applications-container {
        padding: 20px;
    }

    .applications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .application-card {
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        transition: transform 0.3s ease;
    }

    .application-card:hover {
        transform: translateY(-5px);
    }

    .application-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e2e8f0;
    }

    .application-header h3 {
        font-size: 1.25rem;
        color: #1e40af;
        margin: 0;
    }

    .position-badge {
        background: #dbeafe;
        color: #1e40af;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 500;
    }

    .detail-item {
        display: flex;
        margin-bottom: 12px;
        font-size: 0.95rem;
    }

    .detail-item.full-width {
        flex-direction: column;
    }

    .label {
        font-weight: 600;
        color: #64748b;
        min-width: 100px;
        margin-right: 12px;
    }

    .message {
        margin-top: 8px;
        color: #475569;
        line-height: 1.5;
        white-space: pre-wrap;
    }

    .detail-item a {
        color: #2563eb;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .detail-item a:hover {
        color: #1e40af;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        .applications-grid {
            grid-template-columns: 1fr;
        }
    }
  `;

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

        .graphs-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 30px;
          margin: 30px 0;
        }

        .tables-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .view-all-btn {
          padding: 8px 16px;
          background: #f1f5f9;
          border: none;
          border-radius: 6px;
          color: #1e40af;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          background: #e2e8f0;
        }

        .table-wrapper {
          overflow-x: auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .graph-container {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease;
          margin-bottom: 20px;
        }

        .graph-container:hover {
          transform: translateY(-5px);
        }

        .graph-container h2 {
          margin-bottom: 20px;
          color: #1e40af;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: capitalize;
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

        @media (max-width: 1280px) {
          .graphs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Add animation for tab transitions */
        .main-content > div {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        ${additionalStyles}
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
            <div 
              className={`nav-item ${activeTab === 'tenders' ? 'active' : ''}`}
              onClick={() => setActiveTab('tenders')}
            >
              <i className='bx bx-file'></i>
              
                <span className="nav-text">Tenders</span>
              
            </div>
            <div 
              className={`nav-item ${activeTab === 'applicants' ? 'active' : ''}`}
              onClick={() => setActiveTab('applicants')}
            >
              <i className='bx bx-user-pin'></i>
              <span className="nav-text">Applicants</span>
            </div>
          </nav>
        </div>

        <div className="main-content">
          <div className="header">
            <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <div className="user-menu">
              {/* Add user menu/profile here */}
            </div>
          </div>

          {renderActiveTabContent()}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard; 