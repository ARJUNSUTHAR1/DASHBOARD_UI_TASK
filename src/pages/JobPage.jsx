import Applicants from "../components/jobdeatailsection/Applicants"
import JobMessage from "../components/jobdeatailsection/JobMessage"
import JobPreview from "../components/jobdeatailsection/JobPreview"
import Match from "../components/jobdeatailsection/Match"
import Tabs from "../components/tabslider/Tabs"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const JobPage = () => {
  return (
    <div>
    <Tabs/> 
    <Routes>
        <Route index element={<JobPreview />} />
        <Route path='applicants' element={<Applicants />} />
        <Route path='match' element={<Match />} />
        <Route path='jobmessage' element={<JobMessage />} />
      </Routes>
    </div>
  )
}

export default JobPage
