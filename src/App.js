import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './MyNav';
import BooksComponent from './BooksComponent';
import FooterComponent from './MyFooter';
import Welcome from './WelcomeComponent';
function App() {
  return (
    <>
      <Welcome />

      <MyNav />

      <FooterComponent />
    </>
  );
}

export default App;
