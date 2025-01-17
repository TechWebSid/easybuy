import React from "react";
import Link from "next/link";
import Navbar from "../../../components/Layouts/Navbar";
import Footer from "../../../components/Layouts/Footer";

const techTracks = [
  {
    title: "Frontend Development",
    icon: "💻",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [
      "HTML5, CSS3, JavaScript",
      "React.js & Next.js",
      "Responsive Design",
      "UI/UX Principles",
      "State Management",
    ],
    duration: "3 months",
    price: "₹5,000"
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [
      "Node.js & Express.js",
      "MongoDB & MySQL",
      "RESTful APIs",
      "Authentication & Security",
      "Server Architecture",
    ],
    duration: "3 months",
    price: "₹5,000"
  },
  {
    title: "Full Stack Development",
    icon: "🚀",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [
      "MERN Stack",
      "API Integration",
      "Database Design",
      "Full Stack Projects",
      "Deployment",
    ],
    duration: "4 months",
    price: "₹7,000"
  },
  {
    title: "DevOps Engineering",
    icon: "🔄",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "AWS Cloud Services",
      "Linux Administration",
      "Monitoring & Logging",
    ],
    duration: "3 months",
    price: "₹6,000"
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [
      "React Native",
      "Cross-platform Development",
      "App Store Deployment",
      "Native Features",
      "Mobile UI/UX",
    ],
    duration: "3 months",
    price: "₹5,500"
  },
  {
    title: "Cloud Architecture",
    icon: "☁️",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [
      "AWS Services",
      "Cloud Security",
      "Scalability",
      "Cost Optimization",
      "Microservices",
    ],
    duration: "3 months",
    price: "₹6,500"
  },
];

const EdTechPage = () => {
  return (
    <>
      <Navbar />
      <style jsx>{`
        .ed-tech {
          padding: 120px 20px 80px;
        //   background: linear-gradient(to bottom, #f8f9ff, #ffffff);
        background-color: #322E88;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          margin-bottom: 60px;
          
        }

        .section-title h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
        }

        .section-title p {
          font-size: 1.25rem;
          color: white;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
          gap: 25px;
          padding: 20px;
        }

        .course-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          height: auto;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .course-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .course-card:hover img {
          transform: scale(1.05);
        }

        .course-content {
          padding: 20px;
        }

        .course-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .course-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.3;
        }

        .course-header span {
          font-size: 1.75rem;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .skill-item {
          padding: 8px 12px;
          border-radius: 6px;
          background: #f8fafc;
          color: #64748b;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: #f1f5f9;
          transform: translateX(3px);
        }

        .course-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #e2e8f0;
        }

        .course-meta {
          color: #64748b;
          font-size: 0.9rem;
        }

        .price {
          font-size: 1.4rem;
          font-weight: 700;
          color: #3b82f6;
        }

        .enroll-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 15px;
          width: 100%;
        }

        .enroll-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
        }

        @media (max-width: 768px) {
          .ed-tech {
            padding: 100px 10px 40px;
          }
          
          .courses-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 10px;
          }
          
          .section-title h1 {
            font-size: 2rem;
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .ed-tech {
            padding: 90px 5px 30px;
          }
          
          .courses-grid {
            padding: 5px;
          }
          
          .section-title h1 {
            font-size: 1.75rem;
          }
          
          .course-content {
            padding: 15px;
          }

          .course-header h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>

      <div className="ed-tech">
        <div className="container">
          <div className="section-title">
            <h1>Tech Programs</h1>
            <p>
              Get hands-on experience with real projects and secure potential 
              employment opportunities at SNT Rudra Tech LLP. Learn from industry 
              experts and build your future in tech.
            </p>
          </div>

          <div className="courses-grid">
            {techTracks.map((track, index) => (
              <div key={index} className="course-card">
                <img src={track.image} alt={track.title} loading="lazy" />
                <div className="course-content">
                  <div className="course-header">
                    <h3>{track.title}</h3>
                    <span>{track.icon}</span>
                  </div>
                  <div className="skills-list">
                    {track.skills.map((skill, idx) => (
                      <div key={idx} className="skill-item">
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="course-footer">
                    <div>
                      <div className="course-meta">Duration: {track.duration}</div>
                      <div className="price">{track.price}</div>
                    </div>
                  </div>
                  <Link 
                    href={{
                      pathname: '/payment',
                      query: { 
                        amount: track.price.replace('₹', '').replace(',', ''),
                        course: track.title
                      }
                    }}
                  >
                    <span className="enroll-button">
                      Enroll Now →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EdTechPage; 