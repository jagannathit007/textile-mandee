import React, { useState } from 'react';
import "../style/Members.css"
import { FaAnglesLeft } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const membersData = [
    {
      id: 1,
      name: "Alex Johnson",
      profession: "Textile Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Raj Patel",
      profession: "Quality Controller",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Emma Wilson",
      profession: "Fashion Buyer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Mohammed Ali",
      profession: "Weaving Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      profession: "Brand Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "David Kumar",
      profession: "Production Head",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Priya Sharma",
      profession: "Supply Chain Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 10,
      name: "Aisha Khan",
      profession: "Design Coordinator",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop&crop=face",
    }
  ];

  // Filter members based on search term
  const filteredMembers = membersData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="members-section">
      <div className="container">
        <div className="members-header d-flex justify-content-between align-items-center">
          <button className="back-btn d-sm-flex d-none align-items-center" onClick={() => window.history.back()}>
            <FaAnglesLeft size={20} />
            <span>Go Back</span>
          </button>
          
          <div className="search-container">
            <FiSearch className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search Members..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Members Grid */}
        <div className="members-grid mt-5">
          <div className="row g-4">
            {filteredMembers.map((member) => (
              <div key={member.id} className=" col-lg-3 col-md-4 col-sm-6">
                <div className="member-card">
                  <div className="member-image-container">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="member-image"
                    />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-profession">{member.profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredMembers.length === 0 && (
          <div className="no-results">
            <h3>No members found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default Members;