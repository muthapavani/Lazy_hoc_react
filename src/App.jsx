
import './App.css'
import Index from './componets/Lazy/hoc/child1'

import Parent1 from './componets/Lazy/hoc/parent'
import Parent from './componets/Lazy/lazy'
const Updated =Parent1(Index)

function App() {
 

  return (
    <>

     <Parent/>
     <Updated/>
    </>
  )
}

export default App
