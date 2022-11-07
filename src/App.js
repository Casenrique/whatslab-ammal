import { useState } from 'react';
import Header from './components/Header/Header'
import Main  from './components/Main/Main';


function App() {
  //rementente atual
  const [currSender, setCurrSender] = useState("Me")
  
  //possíveis remententes
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Beltrana",
    "Ciclana",
    "Astrodev"
  ])

  //mudar o remetente atual
  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }


  return (
    <div>
      <Header
        senders={senders}
        currSender={currSender}
        onChangeSender={onChangeSender}
      />
      <Main
        currSender={currSender}
      />
    </div>
  );
}

export default App;
