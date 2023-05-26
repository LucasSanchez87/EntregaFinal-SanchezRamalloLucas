import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  

  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Crazyfoots te traemos las mejores medias y remeras del condado" />
      
    </div>
  );
}

export default App;
 