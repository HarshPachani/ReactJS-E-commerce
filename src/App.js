import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { store } from './App/store';
import { Provider, useSelector } from 'react-redux';
import Carts from './components/Carts';
import Modal from './components/Modal';

function App() {

  const {isOpen} = useSelector((store) => store.modal);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        {isOpen && <Modal/>}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/cart" element={<Carts/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
