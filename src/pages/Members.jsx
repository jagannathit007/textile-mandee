import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import "../style/Members.css";
import { FaAnglesLeft } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [membersData, setMembersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
const [showModal, setShowModal] = useState(false);


  const fetchMembers = async (search = '', currentPage = 1, append = false) => {
    try {
      setLoading(true);
      setIsFetching(true);
      const response = await axios.post('https://startupweaver.itfuturz.in/api/users/advancedSearchUsers', {
        search: search,
        page: currentPage,
        limit: 10
      });

      const users = response.data?.data?.users || [];
      const total = response.data?.data?.totalPages || 1;
      
      const formattedUsers = users.map(user => ({
        id: user._id,
        name: user.name || "No Name",
        profession: user.userType?.name || "No Profession",
        fullData: user,
        image: user.userImage
          ? `https://startupweaver.itfuturz.in/${user.userImage}`
          : "https://ia801307.us.archive.org/1/items/instagram-plain-round/instagram%20dip%20in%20hair.jpg"
      }));

      setMembersData(prev => append ? [...prev, ...formattedUsers] : formattedUsers);
      setTotalPages(total);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleScroll = useCallback(
    debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !isFetching &&
        page < totalPages
      ) {
        setPage(prev => prev + 1);
      }
    }, 300),
    [isFetching, page, totalPages]
  );

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchMembers(searchTerm, page, page > 1);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, page]);

  useEffect(() => {
    setPage(1);
    setMembersData([]);
  }, [searchTerm]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
            {membersData.map((member) => (
              <div
  key={member.id}
  className="col-lg-3 col-md-4 col-sm-6"
  onClick={() => {
    const fullData = membersData.find(m => m.id === member.id);
    setSelectedMember(fullData);
    setShowModal(true);
  }}
>

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

{showModal && selectedMember && (
  <div className="modal-backdrop d-flex align-items-center justify-content-center" onClick={() => setShowModal(false)}>
    <div className="modal-content bg-white rounded-4 shadow-lg position-relative p-4" onClick={(e) => e.stopPropagation()}>
      <button 
        className="btn-close position-absolute top-0 end-0 m-3 btn btn-outline-danger rounded-circle p-2" 
        onClick={() => setShowModal(false)}
        style={{width: '40px', height: '40px'}}
      >
        <span className="fw-bold">×</span>
      </button>
      
      <div className="text-center">
        <div className="mb-4">
          <img 
            src={selectedMember.image} 
            alt={selectedMember.name} 
            className="modal-image rounded-circle border border-3 border-primary shadow-sm" 
            style={{width: '120px', height: '120px', objectFit: 'cover'}}
          />
        </div>
        
        <h2 className="mb-4 text-primary fw-bold">{selectedMember.name}</h2>
        
        <div className="row g-3 text-start">
          <div className="col-12">
            <div className="card border-0 bg-light">
              <div className="card-body py-2">
                <small className="text-muted fw-semibold">PROFESSION</small>
                <p className="mb-0 fw-medium">{selectedMember.profession}</p>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <div className="card border-0 bg-light">
              <div className="card-body py-2">
                <small className="text-muted fw-semibold">EMAIL</small>
                <p className="mb-0 fw-medium text-break">{selectedMember.fullData.emailId || 'N/A'}</p>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <div className="card border-0 bg-light">
              <div className="card-body py-2">
                <small className="text-muted fw-semibold">MOBILE</small>
                <p className="mb-0 fw-medium">{selectedMember.fullData.mobileNo || 'N/A'}</p>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <div className="card border-0 bg-light">
              <div className="card-body py-2">
                <small className="text-muted fw-semibold">BUSINESS NAME</small>
                <p className="mb-0 fw-medium">{selectedMember.fullData.businessName || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


        {!loading && membersData.length === 0 && (
          <div className="no-results">
            <h3>No members found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}

        {loading && (
          <div className="no-results">
            <h3>Loading...</h3>
          </div>
        )}

        {!loading && page+1  <= totalPages && page !== 0 && (
          <div className="no-results">
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Members;