import { AddPage } from 'pages/AddPage';
import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
      </Route>
    </Routes>
  );
};
