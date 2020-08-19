import React from 'react'
import Chessboard from "chessboardjsx";
import StateBoard from "./component/state-board"
import { Board } from "../../colors"
import "./style.scss"

const ChessBoard = () => {
  return (
    <div className="row chessboard">
      <div className="col-8">
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
      <div className="col-4">
        <StateBoard/>
      </div>
    </div>
  )
}

export default ChessBoard
