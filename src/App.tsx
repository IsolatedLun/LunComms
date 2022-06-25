import { useEffect, useState } from 'react'
import CommsControls from './components/layouts/CommsControls'
import CommsUser from './components/layouts/CommsUser'
import Navbar from './components/layouts/Navbar'
import Button from './components/modules/Buttons/Button'
import Window from './components/modules/Window/Window'

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
          <Window 
            title='Audio relay' 
            id='connector' 
            minMaxHeight={[123, 123]}
            minMaxWidth={[435, 435]}
            compostClass='flex flex-direction align-items-center width-100 margin-inline-auto'>
            <input type='text' />
            <Button>Connect</Button>
          </Window>
        </main>
      </>
    )
}

export default App
