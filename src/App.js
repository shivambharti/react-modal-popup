import './App.css';
import { useState } from "react";
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dolorem cum consectetur, libero recusandae, iusto commodi, dolor earum voluptates facere quam suscipit temporibus optio. Nihil deserunt commodi sunt nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dolorem cum consectetur, libero recusandae, iusto commodi, dolor earum voluptates facere quam suscipit temporibus optio. Nihil deserunt commodi sunt nisi.</p>

      <Modal isOpen={open} onClose={() => setOpen(false)}> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dolorem cum consectetur, libero recusandae, iusto commodi, dolor earum voluptates facere quam suscipit temporibus optio. Nihil deserunt commodi sunt nisi.</p></Modal>

    </div>
  );
}
export default App;