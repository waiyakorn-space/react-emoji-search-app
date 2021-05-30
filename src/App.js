import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import SearchInput from './SearchInput'
import EmojiResults from './EmojiResults'
import filterEmoji from './filterEmoji'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("",20)     
    }
    
    //case 1 เขียนใน constructor
    this.handleSearchChange= (event)=>{
      this.setState({
        filteredEmoji: filterEmoji(event.target.value,20)     
      })
    }

    // this.handleSearchChange = this.handleSearchChange.bind(this); //อันนี้คือ bind case 2
  }

  /*
  case 2 ต้อง bind
  handleSearchChange(event){
    this.setState({
      filteredEmoji: filterEmoji(event.target.value,20)     
    })
  }
  case 3 arrow ไม่ต้อง bind
  handleSearchChange= (event)=>{
    this.setState({
      filteredEmoji: filterEmoji(event.target.value,20)     
    })
  }*/

  render() {
    return (
      <div className="container">
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji}/> {/* 1.ส่ง props emojiData ไปที่ EmojiResults */}
      </div>
    )
  }
}
