import React from 'react';
import './App.css'
import Example from './components/Navbar';
import Lend from './components/Lend';
import AppRoute from './router/AppRouter';



function App() {
  return (
    <div className='flex flex-col min-h-screen z-50'>
      <Example />
      <main className='w-full mx-auto flex-1 my-6 max-w-screen-xl px-2.5 z-0'>
        <AppRoute />
      </main>
    </div>

  )
}
export default App
