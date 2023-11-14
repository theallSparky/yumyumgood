import Delivery from './components/Delivery'
import TopNav from './components/TopNav'
import Featured from './components/Featured'
import './index.css'

function App() {

  return (
    <div className='App'>
      <TopNav />
      <Featured />
      <Delivery />
    </div>
  )
}

export default App