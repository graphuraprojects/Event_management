import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Booking from "./components/Booking";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CorporateEvents from "./components/CorporateEvents";
import Gallery1 from "./pages/Gallery1";
import ScrollToTop from "./components/ScrolltoTop";
import CulturalEvent from "./components/CulturalEvent";
import About from "./pages/About";
import Calender from "./components/Calender";
import FAQS from "./pages/FAQS";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import GalleryDetailsPage from "./pages/GalleryDetails";
import Events from "./components/Events";
import CulturalDetails from "./components/CulturalDetails";
import Weddings from "./components/Weddings";
import TechCorporate from "./components/TechCorporate";




import Dashboard1 from "./pages/Dashboard1";
import WeddingEvent from "./components/WeddingEvents";
import Gallery from "./pages/GalleryPage";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50">
      
      <Router>
        <ScrollToTop />

        <Routes>
          {/* Website */}
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event/corporateevents" element={<CorporateEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event/cultural" element={<CulturalEvent />} />
          <Route path="/event/wedding" element={<WeddingEvent />} />
          <Route path="/about" element={<About />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/faq" element={<FAQS />} />
          {/* <Route path="/wedding" element={<WeddingEvent />} /> */}
          <Route path="/gallery/:category" element={<GalleryDetailsPage />} />

          <Route path='/cultural' element={<Events />} /> 
          <Route path='/cultural/:id' element={<CulturalDetails />} />  
          <Route path='weddings' element={<Weddings />} />
          <Route path="/tech-corporate" element={<TechCorporate />}  /> 

        

          {/* Dashboard */}
          <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard1 />
            </ProtectedRoute>
          }
        />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
