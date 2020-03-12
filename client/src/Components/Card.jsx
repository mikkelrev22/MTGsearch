import React from 'react'

const Card = (props) => {
  const cardList = props.cards
  const mappedCards = cardList.map((card, i)=>
<li key={i}> {card.name}: {card.mana_cost} <img src= {card.image}></img><div>{card.text}</div></li>)
  return (
    <ul>
      {mappedCards}
    </ul>
  )
}

export default Card