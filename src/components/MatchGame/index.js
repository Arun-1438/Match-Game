/* eslint-disable no-return-assign */
import {Component} from 'react'
import Header from '../Header'
import TabItem from '../TabItem'
import ThumbNail from '../ThumbNail'
import './index.css'

class MatchGame extends Component {
  state = {
    isGameRunning: true,
    matchImage: {},
    activeTab: 'FRUIT',
    imagesList: [],
    tabsList: [],
    timerCount: 60,
    score: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.timeControler, 1000)
    const {tabsListApp, imagesListApp} = this.props
    this.setState({
      matchImage: imagesListApp[0],
      activeTab: tabsListApp[0].tabId,
      imagesList: imagesListApp,
      tabsList: tabsListApp,
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  gameController = thumbnailUrlItem => {
    const {matchImage, imagesList} = this.state
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    if (matchImage.thumbnailUrl === thumbnailUrlItem) {
      // eslint-disable-next-line no-return-assign
      this.setState(prevState => ({
        // eslint-disable-next-line no-param-reassign
        score: (prevState.score += 1),
      }))
      this.setState({matchImage: imagesList[randomIndex]})
    } else {
      this.setState({isGameRunning: false})
      clearInterval(this.timerId)
    }
  }

  timeControler = () => {
    const {timerCount} = this.state
    // if(timerCount === 0){
    //     clearInterval(this.timerId)
    //     this.setState({isGameRunning : false})
    // }
    // else{
    //     this.setState(prevState => ({timerCount : prevState.timerCount -= 1}))
    // }
    const {isGameRunning} = this.state
    if (isGameRunning && timerCount > 0) {
      // eslint-disable-next-line no-return-assign
      // eslint-disable-next-line no-param-reassign
      // eslint-disable-next-line no-return-assign
      // eslint-disable-next-line no-param-reassign
      this.setState(prevState => ({timerCount: (prevState.timerCount -= 1)}))
    } else {
      this.setState({isGameRunning: false})
    }
  }

  onChangeTab = id => {
    this.setState({activeTab: id})
  }

  resetGame = () => {
    this.setState({isGameRunning: true, timerCount: 60, score: 0})
    this.componentDidMount()
  }

  render() {
    const {
      isGameRunning,
      matchImage,
      activeTab,
      tabsList,
      imagesList,
      timerCount,
      score,
    } = this.state
    const filteredImagesList = imagesList.filter(
      eachImage => eachImage.category === activeTab,
    )
    return (
      <div className="match-game">
        <Header timerCount={timerCount} score={score} />
        {isGameRunning ? (
          <div className="bottom-container">
            <div className="inner-bottom-container">
              <div className="match-container">
                <img
                  className="match-image"
                  src={matchImage.imageUrl}
                  alt="match"
                />
              </div>
              <ul className="tabs-container">
                {tabsList.map(eachTab => (
                  <TabItem
                    key={eachTab.tabId}
                    isActiveTab={activeTab === eachTab.tabId}
                    onChangeTab={this.onChangeTab}
                    tabDetails={eachTab}
                  />
                ))}
              </ul>
              <ul className="thumbnail-container">
                {filteredImagesList.map(eachImage => (
                  <ThumbNail
                    imageDetails={eachImage}
                    gameController={this.gameController}
                    key={eachImage.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="game-over">
            <div className="game-over-inner">
              <img
                className="trophy"
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
              />
              <p>Your Score</p>
              <h1>{score}</h1>
              <button
                onClick={this.resetGame}
                className="reset-button"
                type="button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                />
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
