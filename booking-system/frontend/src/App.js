import BookingList from "./components/BookingList";
import BookingForm from "./components/BookingForm";
import CookiePopup from "./components/CookiePopup";

const App = () => {
  return (
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Система бронювання</h1>
        <BookingForm />
        <BookingList />
        <CookiePopup />
      </div>
  );
};

export default App;
