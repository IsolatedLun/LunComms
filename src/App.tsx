import { useEffect, useState } from 'react'
import CommsControls from './components/layouts/CommsControls'
import CommsUser from './components/layouts/CommsUser'
import Navbar from './components/layouts/Navbar'
import WindowBar from './components/layouts/WindowBar'
import Button from './components/modules/Buttons/Button'
import ImageInput from './components/modules/Inputs/ImageInput'
import TextInput from './components/modules/Inputs/TextInput'
import Window from './components/modules/Window/Window'
import { WINDOW_1, WINDOW_2 } from './consts'

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
          <WindowBar />

          <Window 
            title={WINDOW_1.title} 
            id={WINDOW_1.id} 
            minMaxHeight={[155, 155]}
            minMaxWidth={[435, 435]}
            compostClass='grid place-items-center width-100 margin-inline-auto'
            utilClass='gap-1'
            >
            <TextInput value='' />
            <Button>Connect</Button>
          </Window>

          <Window 
            title={WINDOW_2.title} 
            id={WINDOW_2.id} 
            minMaxHeight={[175, 400]}
            minMaxWidth={[435, 1000]}
            compostClass='flex flex-direction-column width-100 margin-inline-auto'
            utilClass='gap-1'
            >
            <TextInput value='' label='Username' />
            <ImageInput value={null} utilClass='width-max-content' />
            <Button>Save</Button>
          </Window>
        </main>
      </>
    )
}

export default App
