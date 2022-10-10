import "./App.css";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import Message from "./components/Message";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [color, setColor] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div class="card">
        <div class="card-content">
          <Message color={color} />
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <div class="buttons">
              <Button color="blue" changeColor={setColor} openModal={setIsOpen}>
                Azul
              </Button>
              <Button color="red" changeColor={setColor} openModal={setIsOpen}>
                Rojo
              </Button>
            </div>
          </p>
        </footer>
      </div>
      <Modal isOpen={isOpen} openModal={setIsOpen} color={color} />
    </div>
  );
}

export default App;
