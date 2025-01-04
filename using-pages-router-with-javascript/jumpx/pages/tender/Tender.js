import React from 'react';

const data = [
    {
        key: '1',
        tenderNumber: 'TDR001',
        tenderName: 'E-commerce Platform Development',
        startingDate: '2023-09-01',
        deadline: '2023-12-01',
        numberOfWebsites: 5,
        totalAmount: '$50,000',
    },
    {
        key: '2',
        tenderNumber: 'TDR002',
        tenderName: 'Educational Portal Design',
        startingDate: '2023-09-15',
        deadline: '2023-12-15',
        numberOfWebsites: 3,
        totalAmount: '$30,000',
    },
    {
        key: '3',
        tenderNumber: 'TDR003',
        tenderName: 'Corporate Website Overhaul',
        startingDate: '2023-10-01',
        deadline: '2024-01-01',
        numberOfWebsites: 2,
        totalAmount: '$20,000',
    },
];

export const tenderData = data;

const Tenders = () => {
    return (
        <div className="tenders-container">
            <style jsx>{`
                .tenders-container {
                    padding: 40px;
                    background-color: #f0f4f8;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                .tenders-header {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .tenders-header h1 {
                    font-size: 2.5rem;
                    color: #1d4ed8;
                    margin-bottom: 10px;
                    font-weight: 700;
                }

                .tenders-header p {
                    color: #4b5563;
                    font-size: 1.1rem;
                }

                .tenders-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 30px;
                    background-color: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .tenders-table:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
                }

                .tenders-table th, .tenders-table td {
                    padding: 20px;
                    text-align: left;
                }

                .tenders-table th {
                    background-color: #2563eb;
                    color: #ffffff;
                    font-weight: 600;
                    font-size: 1rem;
                }

                .tenders-table tr:nth-child(even) {
                    background-color: #f9fafb;
                }

                .tenders-table tr:hover {
                    background-color: #e0f2fe;
                }

                .amount {
                    font-weight: bold;
                    color: #1d4ed8;
                }

                a {
                    color: #3b82f6;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                a:hover {
                    color: #2563eb;
                    text-decoration: underline;
                }

                @media (max-width: 768px) {
                    .tenders-container {
                        padding: 20px;
                    }

                    .tenders-table th, .tenders-table td {
                        padding: 15px;
                    }

                    .tenders-header h1 {
                        font-size: 2rem;
                    }
                }
            `}</style>
            <div className="tenders-header">
                <h1>Active Tenders</h1>
                <p>Explore the latest tenders and their details.</p>
            </div>
            <table className="tenders-table">
                <thead>
                    <tr>
                        <th>Tender Number</th>
                        <th>Tender Name</th>
                        <th>Starting Date</th>
                        <th>Deadline</th>
                        <th>Number of Websites</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((tender) => (
                        <tr key={tender.key}>
                            <td>{tender.tenderNumber}</td>
                            <td>
                                <a href={`#tender-${tender.key}`} title={`View details of ${tender.tenderName}`}>
                                    {tender.tenderName}
                                </a>
                            </td>
                            <td>{tender.startingDate}</td>
                            <td>{tender.deadline}</td>
                            <td>{tender.numberOfWebsites}</td>
                            <td className="amount">{tender.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tenders;
