import TopPicks from './components/TopPicks'
import Delivery from './components/Delivery'
import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Meal from './components/Meal'
import './index.css'

function App() {

  return (
    <div className='App'>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
    </div>
  )
}

export default App