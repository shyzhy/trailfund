import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import CampaignDetail from "./pages/CampaignDetail";
import CreateCampaign from "./pages/CreateCampaign";
import CreateSelection from "./pages/CreateSelection";
import AddRequest from "./pages/AddRequest";
import Community from "./pages/Community";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import Splash from "./pages/Splash";
import Welcome from "./pages/Welcome";
import BottomNav from "./components/BottomNav";

export default function App() {
  const location = useLocation();
  const hideNavRoutes = ['/', '/welcome', '/login'];
  const showNav = !hideNavRoutes.includes(location.pathname) && !location.pathname.startsWith('/community/post/');

  return (
    <div className="app">
      <main className="main">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<CampaignDetail />} />
          <Route path="/create" element={<CreateSelection />} />
          <Route path="/create/campaign" element={<CreateCampaign />} />
          <Route path="/create/request" element={<AddRequest />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/post/:id" element={<PostDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/explore" element={<Campaigns />} />
        </Routes>
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
