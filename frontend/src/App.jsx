import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// Dashboard/Clinical Pages
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import AddPatient from "./pages/AddPatient";
import PatientDetails from "./pages/PatientDetails";
import AppointmentList from "./pages/AppointmentList";
import BookAppointment from "./pages/BookAppointment";
import DoctorList from "./pages/DoctorList";
import DoctorSchedule from "./pages/DoctorSchedule";
import DepartmentList from "./pages/DepartmentList";
import Invoices from "./pages/Invoices";
import GenerateInvoice from "./pages/GenerateInvoice";
import MedicineList from "./pages/MedicineList";
import LabDashboard from "./pages/LabDashboard";
import Chat from "./pages/Chat";
import AIModule from "./pages/AIModule";
import VideoConsultation from "./pages/VideoConsultation";
import NotificationList from "./pages/NotificationList";
import Settings from "./pages/Settings";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import EmergencyPatientForm from "./pages/EmergencyPatientForm";

// Layout components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Layout wrapper for dashboard views
function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth / Guest Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard & clinical routes wrapped in DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/patients/add" element={<AddPatient />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/patient-details" element={<PatientDetails />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/appointments/book" element={<BookAppointment />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctors/schedule" element={<DoctorSchedule />} />
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/billing" element={<Invoices />} />
          <Route path="/billing/generate" element={<GenerateInvoice />} />
          <Route path="/pharmacy" element={<MedicineList />} />
          <Route path="/laboratory" element={<LabDashboard />} />
          <Route path="/messages" element={<Chat />} />
          <Route path="/ai-assistant" element={<AIModule />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/notifications" element={<NotificationList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<AnalyticsDashboard />} />
          <Route path="/emergency-patient" element={<EmergencyPatientForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
