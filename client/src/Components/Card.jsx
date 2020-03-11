import React from 'react'

const Card = (props) => {
  const cardList = props.cardList
  const mapCards = cardList.map((i, card)=>
  <li key={i}>{console.log(card)}</li>
  )
  return (<ul>{mapCards}</ul>)
}

export default Card