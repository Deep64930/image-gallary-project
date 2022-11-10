
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';


const handleSearchSubmit =(e)=>{
  e.preventDefault();
  console.log(e)
}


function App() {
  return (
    <>
     <Header />
     <Search handleSubmit={handleSearchSubmit} />
    </>
  );
}

export default App;
