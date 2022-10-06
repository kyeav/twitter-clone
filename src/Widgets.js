import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId={"1577637406349529088"} />

        <TwitterTimelineEmbed sourceType='profile' screenName='elonmusk' options={{ height: 400 }} />

        <TwitterShareButton className="twitterShareButton" url={"https://facebook.com/kylie"} options={{ text: "#reactjs is awesome", via: "kylie" }} />
      </div>
    </div>
  )
}

export default Widgets