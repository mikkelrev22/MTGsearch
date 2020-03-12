import React from 'react'
import axios from 'axios'
import Card from './Card.jsx'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
        value: '',
        cards: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    axios.get(`http://localhost:42069/cards/${this.state.value}`)
    .then((res)=>{
      this.setState({
        cards: [...this.state.cards, res.data]
      })
    })
    .catch((error)=>{
      console.log(error)
    })
    event.preventDefault();
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          <Card cards={this.state.cards}/>
        </div>
      </div>
    )
  }
}

export default App