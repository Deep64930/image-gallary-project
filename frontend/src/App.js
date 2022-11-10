
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import {useState} from 'react';

const handleSearchSubmit =(e)=>{
  e.preventDefault();
  console.log(e)
}




function App() {
  const [word,setWord]=useState('');
 
  return (
    <>
     <Header />
     <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </>
  );
}

export default App;
