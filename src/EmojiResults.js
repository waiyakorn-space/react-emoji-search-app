import React, { Component } from 'react'
import './EmojiResults.css'

import EmojiResultRow from './EmojiResultRow'

//ติดตั้ง npm i clipboard
import Clipboard from 'clipboard'

export default class EmojiResults extends Component {
  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard')
  }
  componentWillUnmount(){
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow 
            key = {emojiData.keywords} // 2.ส่ง props เหล่านี้ไป EmojiResultRow
            symbol ={emojiData.symbol}
            title = {emojiData.title}
            
          />
    ))}
      </div>
    )
  }
}
