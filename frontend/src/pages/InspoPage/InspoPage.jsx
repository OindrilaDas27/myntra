import { useState } from 'react'
import InspoBar from '../../components/InspoBar/InspoBar'
import TakeInspo from '../TakeInspo/TakeInspo';
import MoodBoard from '../MoodBoard/MoodBoard';
import SearchBar from '../../components/SearchBar/SearchBar';

const InspoPage = () => {
    const [selectedSection, setSelectedSection] = useState('takeInspiration');

  return (
    <div>
        <SearchBar />
        <InspoBar selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
              {selectedSection === 'takeInspiration' ? <TakeInspo /> : <MoodBoard />}

    </div>
  )
}

export default InspoPage