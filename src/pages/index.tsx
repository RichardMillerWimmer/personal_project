import Header from '../Components/Header/Header'
import routes from '../routes'
import Footer from '../Components/Footer/Footer'
import './Styles/Reset.css';
import './Styles/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}
export default App;
