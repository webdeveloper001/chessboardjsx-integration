import React from 'react'
import { connect } from 'react-redux'
import CountryFlag from "react-country-flag"
import { Gray } from '../../../../colors'
import FavoriteIcon from '../../../../components/icons/Favorite'
import LengthBullet from '../../../../components/icons/LengthBullet'
import LengthFast from '../../../../components/icons/LengthFast'
import LengthCustom from '../../../../components/icons/LengthCustom'
import RankPlaceIcon from '../../../../components/icons/RankPlace'
import { RankColors } from '../../../../colors'
import actions from '../../../../store/rank/actions'
import './style.scss'

const LengthIcons = {
  bullet: LengthBullet,
  fast: LengthFast,
  custom: LengthCustom
}

const filters = [
  {
    value: '',
    title: 'All'
  },
  {
    value: 'bullet',
    title: 'Bullet'
  },
  {
    value: 'fast',
    title: 'Fast'
  },
  {
    value: 'custom',
    title: 'Custom'
  }
]

const RankList = ({
  list,
  selectedLength,
  setSelectedLength
}) => {
  return (
    <div className="rank-list">
      <div className="filter-wrapper">
        {filters.map(filter => (
          <div
            className={`filter-item py-3 ${selectedLength === filter.value?'active':''}`}
            onClick={() => {
              setSelectedLength(filter.value)
            }}
          >
            {filter.title}
          </div>
        ))}
      </div>
      <div className="list-table">
        {list.map((user, idx) => {
          const LengthIcon = LengthIcons[user.length]
          const StarIcon = user.faborite ? FavoriteIcon : null
          return (
            <div key={user.id} className="d-flex align-items-center py-3 px-4">
              <div className="rank-place">
                {idx < 3 ?
                  <RankPlaceIcon color={RankColors[idx]} />
                : null}
                <span>{idx+1}</span>
              </div>
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
        })}
      </div>
    </div>
  )
}

export default connect(state => {
  const { selectedLength, users, rankedUserIds } = state.Rank
  const list =  rankedUserIds.filter(userId => !selectedLength || users[userId].length === selectedLength)
    .map(userId => users[userId])
  return {
    list,
    selectedLength
  }
}, {
  setSelectedLength: actions.setSelectedLength
})(RankList)
