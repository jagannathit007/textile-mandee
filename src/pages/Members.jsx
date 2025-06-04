import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import "../style/Members.css";
import { FaAnglesLeft } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [membersData, setMembersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

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
        image: user.userImage
          ? `https://startupweaver.itfuturz.in/${user.userImage}`
          : "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-picture-coming-creative-vector-png-image_40968940.jpg"
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
              <div key={member.id} className="col-lg-3 col-md-4 col-sm-6">
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
      </div>
    </section>
  );
};

export default Members;