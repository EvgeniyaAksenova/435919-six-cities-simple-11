import MainPageMain from '../../pages/main-page/main-page';

type: AppScreenProps = {
  rentalOffers: number;

function App({rentalOffers}: AppScreenProps): JSX.Element {
  return (
    <MainPageMain {rentalOffers}/>
  );
}

export default App;
