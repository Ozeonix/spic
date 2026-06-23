import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import AcademicsPage from "./pages/Academics";
import AdmissionsPage from "./pages/Admissions";
import FacilitiesPage from "./pages/Facilities";
import GalleryPage from "./pages/Gallery";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
import AdminPage from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/academics" element={<Layout><AcademicsPage /></Layout>} />
          <Route path="/admissions" element={<Layout><AdmissionsPage /></Layout>} />
          <Route path="/facilities" element={<Layout><FacilitiesPage /></Layout>} />
          <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
          <Route path="/news" element={<Layout><NewsPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
