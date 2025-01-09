import React, { useState } from 'react';


// This data should be moved to a central state management solution
export const tenderData = [
  {
    id: 'TDR001',
    title: 'E-commerce Platform Development',
    category: 'Web Development',
    value: '$45,000',
    startDate: '2024-03-15',
    deadline: '2024-04-30',
    status: 'Active',
    submissions: 12,
    description: 'Development of a full-featured e-commerce platform with mobile-first approach',
    requirements: 'React, Node.js, 5+ years experience',
    location: 'Remote'
  },
  {
    id: 'TDR002',
    title: 'Mobile Banking App',
    category: 'Mobile Apps',
    value: '$65,000',
    startDate: '2024-03-20',
    deadline: '2024-05-15',
    status: 'Under Review',
    submissions: 8,
    description: 'iOS and Android banking application with secure transaction features',
    requirements: 'React Native, 4+ years experience',
    location: 'Hybrid'
  },
  {
    id: 'TDR003',
    title: 'Enterprise CRM System',
    category: 'Enterprise Software',
    value: '$85,000',
    startDate: '2024-03-10',
    deadline: '2024-06-01',
    status: 'Under Review',
    submissions: 15,
    description: 'Custom CRM solution for large-scale enterprise operations',
    requirements: '.NET, SQL, 6+ years experience',
    location: 'On-site'
  },
  // Add more tender entries as needed...
];

const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: 'deadline', direction: 'asc' });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const filteredTenders = tenderData
    .filter(tender => 
      (statusFilter === 'all' || tender.status === statusFilter) &&
      (tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       tender.id.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      }
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    });

  return (
   <> 
   
  
    <div className="tenders-container">
      <div className="tenders-header">
        <h1>Tender Management</h1>
        <button className="new-tender-btn">+ Create New Tender</button>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <input
            type="search"
            placeholder="Search tenders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-options">
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Under Review">Under Review</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="tenders-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>Tender ID</th>
              <th onClick={() => handleSort('title')}>Title</th>
              <th onClick={() => handleSort('category')}>Category</th>
              <th onClick={() => handleSort('value')}>Value</th>
              <th onClick={() => handleSort('startDate')}>Start Date</th>
              <th onClick={() => handleSort('deadline')}>Deadline</th>
              <th onClick={() => handleSort('status')}>Status</th>
              <th onClick={() => handleSort('submissions')}>Submissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenders.map((tender) => (
              <tr key={tender.id}>
                <td>{tender.id}</td>
                <td>
                  <div className="tender-title">
                    <span>{tender.title}</span>
                    <span className="tender-location">{tender.location}</span>
                  </div>
                </td>
                <td>{tender.category}</td>
                <td>{tender.value}</td>
                <td>{tender.startDate}</td>
                <td>{tender.deadline}</td>
                <td>
                  <span className={`status-badge status-${tender.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {tender.status}
                  </span>
                </td>
                <td>{tender.submissions}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit" title="Edit">
                      <span>📝</span>
                    </button>
                    <button className="action-btn view" title="View Details">
                      <span>👁️</span>
                    </button>
                    <button className="action-btn delete" title="Delete">
                      <span>🗑️</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .tenders-container {
          padding: 2rem;
          background-color: #f8fafc;
          min-height: 100vh;
        }

        .tenders-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .tenders-header h1 {
          color: #1e40af;
          font-size: 1.875rem;
          font-weight: 700;
        }

        .new-tender-btn {
          background: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .new-tender-btn:hover {
          background: #1d4ed8;
        }

        .filters-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .search-input {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          width: 300px;
          font-size: 0.875rem;
        }

        .status-filter {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: white;
          min-width: 150px;
        }

        .table-container {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .tenders-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .tenders-table th {
          background: #f8fafc;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .tenders-table th:hover {
          background: #f1f5f9;
        }

        .tenders-table td {
          padding: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .tender-title {
          display: flex;
          flex-direction: column;
        }

        .tender-location {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .status-badge {
          padding: 0.375rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .status-active {
          background: #dcfce7;
          color: #166534;
        }

        .status-under-review {
          background: #fef3c7;
          color: #92400e;
        }

        .status-completed {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-cancelled {
          background: #fee2e2;
          color: #991b1b;
        }

        .action-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: transform 0.2s ease;
        }

        .action-btn:hover {
          transform: scale(1.1);
        }

        @media (max-width: 1024px) {
          .filters-section {
            flex-direction: column;
          }

          .search-input {
            width: 100%;
          }

          .tenders-table {
            display: block;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Tenders;
