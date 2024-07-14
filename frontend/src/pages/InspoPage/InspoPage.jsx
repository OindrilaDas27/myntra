import { useState } from 'react'
import InspoBar from '../../components/InspoBar/InspoBar'
import TakeInspo from '../TakeInspo/TakeInspo';
import MoodBoard from '../MoodBoard/MoodBoard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';

const InspoPage = () => {
  const [selectedSection, setSelectedSection] = useState('takeInspiration');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const isMoodBoard = location.pathname === '/inspo/moodboard' || selectedSection === 'moodBoard';

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    <div>
      {!isMoodBoard && <SearchBar onSearch={handleSearch} />}
      <InspoBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      {selectedSection === 'takeInspiration' ? <TakeInspo searchResults={searchResults} /> : <MoodBoard />}

    </div>
  )
}

export default InspoPage