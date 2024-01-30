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
      <nav>
        <MyNav />
      </nav>

      <main>
        <BooksComponent />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
