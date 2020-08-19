import React from 'react'
import { connect } from 'react-redux'
import CountryFlag from "react-country-flag"

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCross, faHandPaper, faComment, faPaperPlane, faTimes,
  faFlag, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import FavoriteIcon from '../../../../components/icons/Favorite'
import LengthBullet from '../../../../components/icons/LengthBullet'
import LengthFast from '../../../../components/icons/LengthFast'
import LengthCustom from '../../../../components/icons/LengthCustom'
import { Gray } from '../../../../colors'

import './style.scss'

const LengthIcons = {
  bullet: LengthBullet,
  fast: LengthFast,
  custom: LengthCustom
}

fontawesome.library.add(faPlus, faCross, faHandPaper, faComment, faTimes,
  faFlag, faExternalLinkSquareAlt, faPaperPlane);

const StateBoard = ({
  player1,
  player2,
  player1history,
  player2history,
  currentPlayerId
}) => {
  return (
    <div className="state-board">
      <div className="history">
        <div className="time p-3">
          <label className="mb-0">10:00</label>
          <button className="btn btn-secondary">
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
        <div className="count-down py-2">
          29 seconda to play the move
        </div>
        <div className="player">
          <Player user={player1}/>
          {currentPlayerId === player1.id && (
            <PlayerHistoryTable history={player1history} />
          )}
          <Player user={player2}/>
          {currentPlayerId === player1.id && (
            <PlayerHistoryTable history={player2history} />
          )}
        </div>
      </div>
      <div className="operations my-3">
        <button className="btn btn-secondary mr-2">
          <FontAwesomeIcon icon="times" />
        </button>
        <button className="btn btn-secondary mr-2">
          <FontAwesomeIcon icon="hand-paper" />
        </button>
        <button className="btn btn-secondary mr-2">
          <FontAwesomeIcon icon="flag" />
        </button>
        <button className="btn btn-secondary">
          <FontAwesomeIcon icon="external-link-square-alt" />
        </button>
      </div>
      <div className="chatroom">
        <div className="w-50">
          <FontAwesomeIcon icon="comment" />
          Chat room
        </div>
        <div className="chat-history p-3">
          <div className="message">
            Hi!
          </div>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Please be nice in the chat!" />
          <FontAwesomeIcon icon="paper-plane" className="send-btn"/>
        </div>
      </div>
    </div>
  )
}

const Player = ({
  user
}) => {
  const LengthIcon = LengthIcons[user.length]
  const StarIcon = user.faborite ? FavoriteIcon : null
  return (
    <div key={user.id} className="d-flex align-items-center py-3 px-4 player-item">
      <div className="mx-2">
        <CountryFlag svg countryCode={user.country} />
      </div>
      <div>
        <label className="mr-2 mb-0">{user.name}</label>
        <span className={`status ${user.online?'online':''}`} >●</span>
      </div>
      <div className="ml-auto length-icon">
        <LengthIcon color={Gray}/>
      </div>
      <div className="mx-2 mt-n1">
        <StarIcon />
      </div>
      <div>
        {user.stars}
      </div>
    </div>
  )
}

const PlayerHistoryTable = ({
  history
}) => {
  return (
    <div className="player-history">
      {history.map((item, idx) => {
        return (
          <div
            key={idx}
            className="d-flex item py-2"
          >
            <div>{idx + 1}</div>
            <div>{item.from}</div>
            <div>{item.to}</div>
          </div>
        )
      })}
    </div>
  )
}

export default connect(state => state.Chess, null)(StateBoard)
