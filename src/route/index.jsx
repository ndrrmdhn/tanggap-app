import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/login-page";
import RegisterPage from "@/pages/register-page";
import NotFoundPage from "@/pages/not-found-page";
import HomePage from "@/pages/home-page";
import NewsPage from "@/pages/news-page";
import PengaduanPage from "@/pages/pengaduan-page";
import CustomerServicePage from "@/pages/customer-service-page";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/pengaduan" element={<PengaduanPage />} />
      <Route path="/berita" element={<NewsPage />} />
      <Route path="/customer-service" element={<CustomerServicePage />} />
    </Routes>
  );
};

export default AppRoute;
