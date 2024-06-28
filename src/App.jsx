import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import JobPage from "./pages/JobPage";
import MessagePage from "./pages/MessagePage";
import PaymentsPage from "./pages/PaymentsPage";
import Applicants from "./components/jobdeatailsection/Applicants";
import JobPreview from "./components/jobdeatailsection/JobPreview";
import Match from "./components/jobdeatailsection/Match";
import JobMessage from "./components/jobdeatailsection/JobMessage";
function App() {
  return (
    <>
      <div >
        <BrowserRouter>
        <div className="mx-auto max-w-[1300px]">
          <Header />
          <Routes>
            <Route path="/" element={<JobPage />}>
              <Route index element={<JobPreview />} />
              <Route path="applicants" element={<Applicants />} />
              <Route path="match" element={<Match />} />
              <Route path="jobmessage" element={<JobMessage />} />
            </Route>
            <Route path="/message" element={<MessagePage />} />
            <Route path="/payments" element={<PaymentsPage />} />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
