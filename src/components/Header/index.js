import './index.css'

const Header = props => {
  const {timerCount, score} = props
  return (
    <div className="header-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="right-side">
        <p>
          Score: <span>{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{timerCount} Secs</p>
        </div>
      </div>
    </div>
  )
}

export default Header
