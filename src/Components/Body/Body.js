import React from 'react';
import leaderboard from '../../images/leaderboard.png';
import review from '../../images/review.png';

const Body = () => {
  return (
    <div className="middle-section">
      <div className="message-box">
        <h2>See what your friends are listening to!</h2>
      </div>
      <div className="container">
        <img src={leaderboard} alt="Leaderboard" className="image" />
        <div>
          View recent songs, albums, artists, and genres you and your friends are listening to.
        </div>
      </div>
      <h2>Rate and comment on some songs!</h2>
      <div className="container">
        <img src={review} alt="Review" className="image" />
        <div>
          Write your thoughts and opinions on songs, albums, and artists.
        </div>
      </div>
    </div>
  );
};

export default Body;
