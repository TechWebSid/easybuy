import React, { useState } from "react";
import Navbar from "../../components/Layouts/Navbar";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    resume: null,
    message: "",
  });

  const openPositions = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote / On-site",
      experience: "3+ years",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Performance Optimization"],
      description: "Looking for an expert frontend developer to create stunning user interfaces and deliver exceptional user experiences using modern web technologies.",
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote / Hybrid",
      experience: "3+ years",
      skills: ["Node.js", "Python", "PostgreSQL", "Redis", "Microservices", "API Design"],
      description: "Seeking a skilled backend developer to architect and build robust server-side applications and scalable APIs.",
    },
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Remote / On-site",
      experience: "4+ years",
      skills: ["React.js", "Node.js", "MongoDB", "AWS", "TypeScript"],
      description: "Looking for an experienced full-stack developer to build scalable web applications and lead technical initiatives.",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      description: "Seeking a creative UI/UX designer to craft beautiful and intuitive user experiences for our products.",
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote / On-site",
      experience: "3+ years",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS/Azure", "Infrastructure as Code"],
      description: "Join us to build and maintain robust cloud infrastructure and deployment pipelines.",
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      skills: ["SEO", "Content Marketing", "Social Media", "Google Analytics", "Email Marketing"],
      description: "Drive our digital marketing initiatives and help grow our online presence.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <style jsx>{`
        .careers-container {
          padding: 120px 20px 80px;
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .careers-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .careers-header h1 {
          font-size: 3.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 25px;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .careers-header p {
          font-size: 1.25rem;
          color: #e2e8f0;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .positions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .position-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          border: none;
          position: relative;
        }

        .position-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .position-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 18px;
          letter-spacing: -0.3px;
        }

        .meta-item {
          font-size: 0.95rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .skill-tag {
          background: #e5edff;
          color: #1e40af;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .position-description {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .application-form {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
          margin-bottom: 60px;
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 30px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.9rem;
          color: #475569;
          margin-bottom: 8px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 12px 15px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          color: #1e293b;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #1e40af;
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
          outline: none;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          padding: 14px 28px;
          background: linear-gradient(45deg, #1e3a8a, #1e40af);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(30, 64, 175, 0.2);
        }

        .submit-button:hover {
          background: linear-gradient(45deg, #1e40af, #1e3a8a);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 64, 175, 0.2);
        }

        @media (max-width: 768px) {
          .careers-header h1 {
            font-size: 2.5rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .application-form {
            padding: 20px;
          }
        }
      `}</style>

      <div className="careers-container">
        <div className="container">
          <div className="careers-header">
            <h1>Join Our Team</h1>
            <p>
              We're looking for talented individuals who are passionate about technology 
              and innovation. Join us in building the future of digital solutions.
            </p>
          </div>

          <div className="positions-grid">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card">
                <h3 className="position-title">{position.title}</h3>
                <div className="position-meta">
                  <span className="meta-item">📍 {position.location}</span>
                  <span className="meta-item">⏰ {position.type}</span>
                  <span className="meta-item">💼 {position.experience}</span>
                </div>
                <div className="skills-list">
                  {position.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <p className="position-description">{position.description}</p>
              </div>
            ))}
          </div>

          <div className="application-form">
            <h2 className="form-title">Apply Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Position Applied For</label>
                  <select
                    name="position"
                    className="form-select"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Position</option>
                    {openPositions.map((pos, index) => (
                      <option key={index} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Years of Experience</label>
                  <input
                    type="text"
                    name="experience"
                    className="form-input"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Portfolio URL (Optional)</label>
                  <input
                    type="url"
                    name="portfolio"
                    className="form-input"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Resume/CV</label>
                  <input
                    type="file"
                    name="resume"
                    className="form-input"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Cover Letter / Message</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="submit-button">
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers; 