import './index.css'

const ImageItem = props => {
  const {imageItemDetails, clickSmallImage} = props
  const {thumbnailUrl} = imageItemDetails

  const onClickThumbNail = () => {
    const {id} = imageItemDetails
    clickSmallImage(id)
  }

  return (
    <li>
      <button type="button" className="image-button" onClick={onClickThumbNail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
