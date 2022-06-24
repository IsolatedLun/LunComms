import { useEffect, useState } from 'react'
import CommsControls from './components/layouts/CommsControls'
import CommsUser from './components/layouts/CommsUser'
import Navbar from './components/layouts/Navbar'

function App() {
    return (
      <>
        <Navbar />
        <main className='
          [ main-container ] 
          [ flex flex-direction-column align-items-center justify-content-space-between ]'
          >
          <CommsUser />
          <CommsControls />
        </main>
      </>
    )
}

export default App
