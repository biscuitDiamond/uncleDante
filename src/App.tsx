import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Body } from './components/Body.tsx';



function App() {
/*   const [themeMode, setThemeMode] = useState('dark-theme');

  function changeTheme(){
    setThemeMode(themeMode === 'dark-theme' ? 'light-theme' : 'dark-theme');
  }

  useEffect(()=> {
    if(themeMode === 'dark-theme'){
      document.querySelector('html')?.classList.remove('dark-theme')
      document.querySelector('html')?.classList.add('white-theme')
    } else {
      document.querySelector('html')?.classList.remove('white-theme')
      document.querySelector('html')?.classList.add('dark-theme')
    }
  }, [themeMode]) */

  const [themeMode, setThemeMode] = useState('white-theme');

  function changeTheme(){
    setThemeMode(themeMode === 'white-theme' ? 'dark-theme' : 'white-theme');
  }

  useEffect(()=> {
    if(themeMode === 'white-theme'){
      document.querySelector('html')?.classList.remove('white-theme')
      document.querySelector('html')?.classList.add('dark-theme')
    } else {
      document.querySelector('html')?.classList.remove('dark-theme')
      document.querySelector('html')?.classList.add('white-theme')
    }
  }, [themeMode])

  return (
    <div className="App w-9/12  mx-auto">
      <div className='flex flex-row-reverse '>
      <button className='bg-lime-600 py-1 px-2 rounded mt-2' onClick={changeTheme}>
          <span>
            theme changer
          </span>
      </button>
      </div>
      <header className="App-header">
        <Header></Header>
      </header>
      <body>
        <Body></Body>
      </body>
    </div>
  );
}

export default App;
