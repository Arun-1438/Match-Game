import './index.css'

const ThumbNail = props => {
  const {imageDetails, gameController} = props
  const {thumbnailUrl} = imageDetails
  const matchImage = () => {
    gameController(thumbnailUrl)
  }
  return (
    <li onClick={matchImage} className="thumbnail-item">
      <button type="button">
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbNail
