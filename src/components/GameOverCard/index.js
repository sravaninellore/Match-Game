import './index.css'

const GameOverCard = props => {
  const {score, playMatchAgain} = props

  const onClickPlayButton = () => {
    playMatchAgain()
  }

  return (
    <div className="game-over-card-container-big-small">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
        alt="trophy"
      />
      <p className="game-score-text">YOUR SCORE</p>
      <p className="numeric-score">{score}</p>
      <button type="button" className="button" onClick={onClickPlayButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset-icon"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOverCard
