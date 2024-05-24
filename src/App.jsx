import { useState } from 'react'
import { CategoryOne } from './components'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('')

  let view;

  if (currentView === 'Category 1') {
    view = <CategoryOne setCurrentView={setCurrentView}/>
  }

  return (
    <>
      {!view ? 
        <div className='flex flex-col bg-gray-200 h-96 p-4 rounded-lg border-2 border-black'>
          <h1>Quiz Guild</h1>
          <button onClick={() => setCurrentView('Category 1')}>Category 1</button>
          <button>Category 2</button>
        </div> : 
        view}
    </>
  )
}

export default App
