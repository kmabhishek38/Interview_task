
import Navigation from '../Navigation/Nav' 
import Products from '../Products/Product'
import Recommended from '../Recommended/Recommended' 
import Category from '../Category/Category'
import '../App.css'


function App() {



  return (
    <>
    <div>
    <Navigation/>
    <Recommended/>
    </div>
    <div className='d-flex'>
      <div className='me-4'><Category/></div>
      <div> <Products/></div>
    </div>
   
    </>
  )
}

export default App
