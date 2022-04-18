
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
 import Checkout from './components/Checkout/Checkout';
 import RequireAuth from './RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       
       <Route path='/checkout' element={<RequireAuth>
         <Checkout></Checkout>
       </RequireAuth>}></Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
