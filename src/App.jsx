import { useState } from 'react';
import { useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from './components/Navbar'
import db from './config/firebase'
import './App.css'
import { collection, onSnapshot } from '@firebase/firestore';

function App() {
  useEffect(() =>{
    onSnapshot(collection(db,'user'),(onSnapshot) =>{
        console.log(onSnapshot.docs.map(doc => doc.data))
    });
  })
  const [showSidebar, setShowBar] = useState(false)
  return (
      <div className='App'>
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>

         < Navbar show={showSidebar} />
      </div>
  )
}

export default App
