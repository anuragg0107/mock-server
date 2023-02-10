import { lazy, Suspense } from 'react';
import './App.css';
// import Fetch from './Fetch/Fetch';
import Loading from './Loading/Loading';

const Fetch=lazy(()=>import("./Fetch/Fetch"))

function App() {
  return (
    <div className="App">
    <Suspense
    fallback={
      <div>
        <Loading />
      </div>
    }
    >
     <Fetch/>
    </Suspense>
    
    </div>
  );
}

export default App;
