import {Component} from 'react'

import {BiSearchAlt2} from 'react-icons/bi'

import './index.css'

export default class InputAndTextContainer extends Component {
  render() {
    const {searchInput, changeSearchInput} = this.props

    this.onChangeSearchInput = event => {
      changeSearchInput(event)
    }

    return (
      <div className="input-and-text-container">
        <h1>Songs Playlist</h1>
        <div className="input-container">
          <input
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="input-element"
            type="search"
            placeholder="Search"
          />
          <div className="icon-container">
            <BiSearchAlt2 />
          </div>
        </div>
      </div>
    )
  }
}
