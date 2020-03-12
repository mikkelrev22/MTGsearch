import React from 'react'

const Card = (props) => {
  const cardList = props.cards
  const mappedCards = cardList.map((card, i)=>
  <li key={i}> 
  <div className="nameContainer">{card.name}:</div> 
  <div className="manaContainer">{card.mana_cost}</div>
  <div className="imageContainer"><img src={card.image}></img></div>
  <div className="textContainer">{card.text}</div>
  </li>)
  return (
    <ul>
      {mappedCards}
    </ul>
  )
}

export default Card