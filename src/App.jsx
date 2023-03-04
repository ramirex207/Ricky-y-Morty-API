import { Buttons } from "./components/Buttons"
import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import './sass/App.scss'
//importando iconos
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
function App() {
  const [characterID, setCharacterID] = useState(1)
  const [characterRnM, setCharacterRnM] = useState([])
  
  //funciones para el click en los botones 
  function prevClick(){
    (characterID===1)?
    setCharacterID(1):
    setCharacterID(characterID-1)
  }
  function nextClick(){
    setCharacterID(characterID+1)
  }

  useEffect(() => {
    getCharacters(characterID)
  }, [characterID])
  
  //funcion para consumir el nombre del peronaje de la API
  async function getCharacters(id){
    const response = await fetch (`https://rickandmortyapi.com/api/character/${id}/`)
    const data = await response.json()
    let character = [data.name , data.image]
    setCharacterRnM(character)

  }
  
  return (
  <div className="app">
    <h1 className="titulo">
      CONSUMIENDO UNA API RICK Y MORTY
    </h1>
    <div className="card-container">
      <Card
        key={characterRnM[0]}
        name={characterRnM[0]}
        image={characterRnM[1]}
      />
    </div>
    <div className="buttons-container">
      <Buttons 
        icon={<GoArrowLeft/>}
        click={prevClick} 
      />
      {console.log(characterID)}
      <Buttons
        icon={<GoArrowRight/>}
        click={nextClick}
      />
    </div>
  </div>
  )
}

export default App
