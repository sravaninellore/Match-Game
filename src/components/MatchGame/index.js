import {Component} from 'react'

import NavBar from '../NavBar'

import TabItem from '../TabItem'

import ImageItem from '../ImageItem'

import GameOverCard from '../GameOverCard'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)

    const {tabsList, imagesList} = props

    this.state = {
      activeTabId: tabsList[0].tabId,
      imageToMatch: imagesList[0].imageUrl,
      score: 0,
      seconds: 60,
    }
  }

  componentDidMount = () => {
    this.decreaseTimer()
  }

  getActiveTabItemImages = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props

    const filteredImages = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )

    return filteredImages
  }

  clickTabItem = clickedTabId => this.setState({activeTabId: clickedTabId})

  playMatchAgain = () => {
    const {imagesList, tabsList} = this.props

    clearInterval(this.timerIntervalId)

    this.decreaseTimer()
    this.setState({
      score: 0,
      seconds: 60,
      imageToMatch: imagesList[0].imageUrl,
      activeTabId: tabsList[0].tabId,
    })
  }

  decreaseTimer = () => {
    this.timerIntervalId = setInterval(this.decreaseOneSecond, 1000)
  }

  decreaseOneSecond = () => {
    const {seconds} = this.state

    if (seconds === 0) {
      clearInterval(this.timerIntervalId)
      this.setState({imageToMatch: 'gameOver'})
    } else {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    }
  }

  clickSmallImage = clickedThumbNailId => {
    const {imageToMatch} = this.state

    const {imagesList} = this.props

    const imagesListSize = imagesList.length

    const randomImageIndex = Math.floor(Math.random() * imagesListSize)

    const randomImage = imagesList[randomImageIndex].imageUrl

    // console.log(randomImageObjIndex)

    const clickedImageObj = imagesList.filter(
      eachImageObj => eachImageObj.id === clickedThumbNailId,
    )

    if (clickedImageObj[0].imageUrl === imageToMatch) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        imageToMatch: randomImage,
      }))
    } else {
      this.setState({imageToMatch: 'gameOver'})
      clearInterval(this.timerIntervalId)
    }
  }

  render() {
    const {score, seconds, activeTabId, imageToMatch} = this.state

    const isGameOver = imageToMatch === 'gameOver'

    const {tabsList} = this.props

    const activeTabImages = this.getActiveTabItemImages()

    return (
      <div className="bg-container">
        <ul className="navbar">
          <NavBar score={score} seconds={seconds} />
        </ul>

        <div className="fruits-container">
          {!isGameOver && (
            <div className="container">
              <img src={imageToMatch} className="match-image" alt="match" />
              <ul className="tabs-container">
                {tabsList.map(eachTabItem => (
                  <TabItem
                    key={eachTabItem.tabId}
                    tabItemDetails={eachTabItem}
                    isActive={activeTabId === eachTabItem.tabId}
                    clickTabItem={this.clickTabItem}
                  />
                ))}
              </ul>
              <ul className="thumbnail-images-container">
                {activeTabImages.map(eachImage => (
                  <ImageItem
                    key={eachImage.id}
                    imageItemDetails={eachImage}
                    clickSmallImage={this.clickSmallImage}
                  />
                ))}
              </ul>
            </div>
          )}
          {isGameOver && (
            <GameOverCard score={score} playMatchAgain={this.playMatchAgain} />
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
