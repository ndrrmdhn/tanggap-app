import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/login-page";
import RegisterPage from "@/pages/register-page";
import NotFoundPage from "@/pages/not-found-page";
import HomePage from "@/pages/home-page";
import NewsPage from "@/pages/news-page";
import PengaduanPage from "@/pages/pengaduan-page";
import CustomerServicePage from "@/pages/customer-service-page";
import KebijkanPrivasiPage from "@/pages/kebijakan-privasi-page";
import ProfilePage from "@/pages/profile-page";
import PengaduanSayaPage from "@/pages/pengaduan-saya-page";
import DetailNewsPage from "@/pages/detail-news-page";

const AppRoute = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/pengaduan' element={<PengaduanPage />} />
      <Route path='/berita' element={<NewsPage />} />
      <Route path='/customer-service' element={<CustomerServicePage />} />
      <Route path='/kebijakan-privasi' element={<KebijkanPrivasiPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/pengaduan-saya' element={<PengaduanSayaPage />} />
      <Route path='/berita/:id' element={<DetailNewsPage />} />
    </Routes>
  );
};

export default AppRoute;
