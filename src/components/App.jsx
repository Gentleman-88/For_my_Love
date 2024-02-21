import { Navigate, Route, Routes } from 'react-router-dom';
import Love from 'Pages/LovePage/Love';
import Navigation from './Navigation/Navigation';
import HomePage from 'Pages/HomePage/HomePage';
import GamePage from 'Pages/GamePage/GamePage';
import PhotoPage from 'Pages/PhotoPage/PhotoPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/love" element={<Love />} />
        <Route path="/Game" element={<GamePage />} />
        <Route path="/Photos" element={<PhotoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
