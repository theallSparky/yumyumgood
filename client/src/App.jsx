import NewsLetter from './components/NewsLetter'
import Categories from './components/Categories'
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
      <Categories />
      <NewsLetter />
    </div>
  )
}

export default App