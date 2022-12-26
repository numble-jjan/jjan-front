import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Onboarding from './pages/OnBoarding';
import ProfileSetting from './pages/ProfileSetting';
import SignUP from './pages/SignUp';
import SignUpCompleted from './pages/SignUpCompleted';
import Login from './pages/Login';
import WritePost from './pages/WritePost';
import DrinkKeywordSetting from './pages/DrinkKeywordSetting';
import MoodKeywordSetting from './pages/MoodKeywordSetting';
import LocationSetting from './pages/LocationSetting';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signUpCompleted" element={<SignUpCompleted />} />
          <Route path="/signUp" element={<SignUP />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/login" element={<Login />} />
          <Route path="writepost" element={<WritePost />} />
          <Route
            path="/drinkKeywordSetting"
            element={<DrinkKeywordSetting />}
          />
          <Route path="/moodKeywordSetting" element={<MoodKeywordSetting />} />
          <Route path="/locationSetting" element={<LocationSetting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
