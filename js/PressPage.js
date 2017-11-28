import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

export class PressPage extends React.Component {
  render () {
    return (
      <div id='press-page'>
        <Header className='main-header' />
        <div className='press-one press-div'>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/press/komohomo.jpg' className='press-photo' />
          <h3 className='press'>May 23rd, 2017 &#32;&#32;<i>KOMO News</i></h3>
          <h1 className='press'>Seattle Filmmaker Puts New Spin On Old Game Show Classics</h1>
          <p className='press'>What began as house-party-slash-game-night in their Seattle living room is now on stage, with two recent sellout performances on Capitol Hill.
            "The Future is 0" is filmed in front of a live audience and is the brainchild of Claire Buss and Kat O&#39;Hara.
            Contestants are pitted against each other, sometimes in silly situations.</p>
          <a href='http://komonews.com/news/local/seattle-filmmaker-and-friend-turn-love-of-game-shows-into-real-life-quirky-stage-show' className='press' target='_blank'>Read More...</a>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-two press-div'>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/press/thestranger.jpg' className='press-photo' />
          <h3 className='press'>May 10th, 2017 &#32;&#32;<i>The Stranger</i></h3>
          <h1 className='press'>Person of Interest: Claire Buss, Filmmaker and Game-Show Host</h1>
          <p className='press'>The Future Is 0 is a satirical game show filmed in front of a live studio audience. The show features Northwest artists as contestants competing in games that are designed to underscore how funny and stupid it is to be a human in 2017.</p>
          <a href='http://www.thestranger.com/person-of-interest/2017/05/10/25135108/person-of-interest-claire-buss-filmmaker-and-game-show-host' className='press' target='_blank'>Read More...</a>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-three press-div'>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/press/seaweekly.jpg' className='press-photo' />
          <h3 className='press'>January 4th, 2017 &#32;&#32;<i>Seattle Weekly</i></h3>
          <h1 className='press'>'The Future Is 0' -- A Live Game Show for Nihilists</h1>
          <p className='press'>During a rough winter two years ago, Claire Buss couldn’t stop watching game-show reruns.
            The artist and filmmaker found herself inexplicably drawn to their shiny, surreal aesthetic—and began to dream about hosting a game show of her own. “The desire to create a world is really appealing to me,” she says.</p>
          <a href='http://www.seattleweekly.com/arts/the-future-is-0-a-locally-produced-live-game-show-for-nihilists/' className='press' target='_blank'>Read More...</a>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-four press-div'>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/press/knkx.jpg' className='press-photo' />
          <h3 className='press'>June 25th, 2016 &#32;&#32;<i>KNKX</i></h3>
          <h1 className='press'>This Seattle Filmmaker Loves Game Shows So Much, She Started One In Her Living Room</h1>
          <p className='press'>A lot of kids grow up wanting to make it in show business and Seattle filmmaker Claire Buss was no different. Buss says she was practically raised by TV and she loved every second of it. She especially loved those morning game shows</p>
          <a href='http://knkx.org/post/seattle-filmmaker-loves-game-shows-so-much-she-started-one-her-living-room' className='press' target='_blank'>Read More...</a>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <Footer className='main-footer' />
      </div>
    )
  }
}
