
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSingOut from './pages/LoginSingOut';
import Shop from './pages/Shoped';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/banner_mens.png'
import Women_banner from './component/Assets/banner_women.png'
import kids_banner from './component/Assets/banner_kids.png'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
       <Route path='/' element = {<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner}  category='men'/>}/>
        <Route path='/womens' element={<ShopCategory  banner={Women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory  banner={kids_banner} category='kid'/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productId' element={<Product/>}/>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/login' element={<LoginSingOut/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
