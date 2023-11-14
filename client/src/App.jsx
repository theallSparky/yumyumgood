import TopPicks from './components/TopPicks'
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
      <TopPicks />
    </div>
  )
}

export default App