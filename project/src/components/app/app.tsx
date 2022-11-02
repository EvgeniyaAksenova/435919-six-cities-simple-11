import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';


import LoginPage from '../../pages/login/login';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-element';

type AppProps = {
  rentalOffers: number;
}

function App({ rentalOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffers={rentalOffers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
      </Routes>
      <Route
        path={AppRoute.Room}
        element={<PropertyPage />}
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </BrowserRouter>
  );
}

export default App;
