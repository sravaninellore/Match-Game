import './index.css'

const NavBar = props => {
  const {score, seconds} = props

  return (
    <div className="navbar-container">
      <li className="nav-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>

      <li className="score-and-time">
        <p className="score">
          Score: <span className="numeric">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />

          <p className="numeric">{seconds} Sec</p>
        </div>
      </li>
    </div>
  )
}

export default NavBar
