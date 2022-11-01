import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalOffers: number;
}

function App({rentalOffers}: AppProps): JSX.Element {
  return (
    <MainPage rentalOffers={rentalOffers}/>
  );
}

export default App;
