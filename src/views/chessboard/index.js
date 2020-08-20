import React, { useState } from 'react'
import Chessboard from "chessboardjsx";

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import StateBoard from "./component/state-board"
import { Board } from "../../colors"
import "./style.scss"

fontawesome.library.add(faExternalLinkSquareAlt)

const ChessBoard = () => {
  const [ fullScreen, setFullScreen ] = useState(true)

  return (
    <div className="row chessboard">
      <div className={`col-8 ${fullScreen?'offset-2':''}`}>
        <div className={`justify-content-center align-items-center mt-n4 ${fullScreen?'d-flex':'d-none'}`}>
          <label className="fullscreen-count-down mr-3 mb-0">10:00</label>
          <button
            className="btn btn-secondary px-4"
            onClick={() => {
              setFullScreen(false)
            }}
          >
            <FontAwesomeIcon icon="external-link-square-alt" />
          </button>
        </div>
        <div className="board-wrapper">
          <Chessboard
            id="board"
            orientation="black"
            position="start"
            lightSquareStyle={{ backgroundColor: Board.light }}
            darkSquareStyle={{ backgroundColor: Board.dark }}
          />
        </div>
      </div>
      <div className={`col-4 ${fullScreen?'d-none':''}`}>
        <StateBoard
          setFullScreen={setFullScreen}
        />
      </div>
    </div>
  )
}

export default ChessBoard
