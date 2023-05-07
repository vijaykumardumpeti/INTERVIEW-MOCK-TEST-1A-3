import {RiDeleteBin6Line} from 'react-icons/ri'

import './index.css'

const ListItem = props => {
  const {item, deleteMusic} = props
  const {id, name, imageUrl, genre, duration} = item

  const deleteFunc = () => {
    deleteMusic(id)
  }

  return (
    <li key={id} className="list-container">
      <div className="image-and-text-container">
        <img className="music-image" alt="track" src={imageUrl} />
        <div>
          <p className="heading">{name}</p>
          <p className="para">{genre}</p>
        </div>
      </div>

      <div className="duration-and-button-container">
        <p>{duration}</p>
        <button
          onClick={deleteFunc}
          data-testid="delete"
          type="button"
          className="delete-button"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </li>
  )
}

export default ListItem
