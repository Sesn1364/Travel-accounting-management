// import RegisterTrip from "./pages/travel-registration/RegisterTrip";

// function App() {
//   return (
//     <div>
//       <RegisterTrip />
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterTrip from "./pages/travel-registration/RegisterTrip"; // یا مسیر مناسب
import AccountingManagement from "./pages/accounting-management/AccountingManagement"; // صفحه مدیریت حسابداری

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterTrip />} /> {/* روت برای صفحه اصلی */}
        <Route path="/register-trip" element={<RegisterTrip />} /> {/* صفحه ثبت سفر */}
        <Route path="/accounting-management/:tripId" element={<AccountingManagement />} /> {/* صفحه مدیریت حسابداری */}
      </Routes>
    </Router>
  );
};

export default App;


