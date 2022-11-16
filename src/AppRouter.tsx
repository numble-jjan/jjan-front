import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onboarding from './pages/onboarding';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
