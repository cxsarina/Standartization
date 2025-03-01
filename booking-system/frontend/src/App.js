import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingList from "./components/BookingList";
import BookingForm from "./components/BookingForm";
import CookiePopup from "./components/CookiePopup";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
    return (
        <Router>
            <Routes>
                {}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                {}
                <Route path="/" element={
                    <div className="max-w-lg mx-auto p-4">
                        <h1 className="text-2xl font-bold text-center mb-4">Система бронювання</h1>
                        <BookingForm />
                        <BookingList />
                        <CookiePopup />
                    </div>
                } />
            </Routes>
        </Router>
    );
};

export default App;