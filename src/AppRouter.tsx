import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onboarding from './pages/onboarding';
import ProfileSetting from './pages/ProfileSetting';
import SignUpCompleted from './pages/signUpCompleted';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signUpCompleted" element={<SignUpCompleted />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
