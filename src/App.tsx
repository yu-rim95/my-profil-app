import React, { useState, useEffect } from 'react';
import './App.scss';
import Loading from './components/Loading';
import Intro from './components/Intro';
import Myprofil from './components/Myprofil';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Intro/>
          <Myprofil/>
        </div>
      )}
    </div>
  );
}

export default App;
