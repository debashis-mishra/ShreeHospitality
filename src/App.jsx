import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import HotelDetails from "./pages/hotelDetails";
import Booking from "./pages/booking";
import BookingConfirmation from "./pages/bookingConfirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotelDetails/:id" element={<HotelDetails />} />
        <Route path="/book/hotel/:id" element={<Booking />} />
        <Route path="/bookingConfirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
