
import React, { useState } from 'react';
import './Post.css';

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [isShared, setIsShared] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const[isoffline, setIsoffline] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    setIsShared(!isShared);
  };
  
  
  const handleClick = () => {
    setIsFollowing(true);
};
  

  const handleoffline =() =>{
    setIsoffline(true);
  } 

  return (
   <div className='on'> 
       <button className={'o'}
            onClick={handleoffline}
           disabled={isoffline}
       >
        {isoffline ? 'Offline':'Online'}
       </button>
    <div className={'layout'}>
      <div className="dp">
        <img src="me.jpg" className="dp1"></img>
        <h3>Sujitha_Rasu</h3>
        <button 
            className={'fb'}
            onClick={handleClick} 
            disabled={isFollowing}
        >
            {isFollowing ? '👨🏻‍❤️‍💋‍👨🏻' : 'Follow'}
        </button>
        <p className='d'>⋮</p>
        </div>

      <img
        src="me.jpg"
        alt="Post"
        className="post-img"
      />

      <div className="b">
        <button onClick={handleLike} className="like">
          ♡ {likes}
        </button>
        <button className="comment"> 💬34</button>
        <button onClick={handleShare} className="share">
        ➤ 24
        </button>
        <button className="save">✔</button>
      </div>

      <p className="caption">
        <b>Sujitha_Rasu </b>
      "If you don't like something, change it. If you can't change it, change your attitude."
      </p><p className='c'>View all comment...</p>
      <div className='time'>11 Hours ago</div>


      <div className="dp">
        <img src="profile.jpeg" className="dp1"></img>
        <h4>__Shinchan___</h4>
        <button 
            className={'fb'}
            onClick={handleClick} 
            disabled={isFollowing}
        >
            {isFollowing ? '👨🏻‍❤️‍💋‍👨🏻' : 'Follow'}
        </button>
        <p className='d'>⋮</p>
      </div>
      <img
        src="profile1.jpg"
        alt="Post"
        className="post-img"

      />
      <div className="b">
        <button onClick={handleLike} className="like">
          ♡ {likes}
        </button>
        <button className="comment"> 💬347</button>
        <button onClick={handleShare} className="share">
        ➤ 249k
        </button>
        <button className="save">✔</button>
      </div>

      <p className="caption">
        <b>Shinchan_Nohara </b>
       "Happiee Family"
      </p><p className='c'>View all comment...</p>
      <div className='time'>1 day ago</div>

      <div className="dp">
        <img src="pro.jpeg" className="dp1"></img>
        <h4>____BMW____</h4>
        <button 
            className={'fb'}
            onClick={handleClick} 
            disabled={isFollowing}
        >
            {isFollowing ? '👨🏻‍❤️‍💋‍👨🏻' : 'Follow'}
        </button>
        <p className='d'>⋮</p>
      </div>
      <img
        src="profile2.jpeg"
        alt="Post"
        className="post-img"

      />
      <div className="b">
        <button onClick={handleLike} className="like">
          ♡ {likes}
        </button>
        <button className="comment"> 💬947K</button>
        <button onClick={handleShare} className="share">
        ➤ 1M
        </button>
        <button className="save">✔</button>
        {/* <div className='s'>
          <img src="save.png"></img>
        </div> */}
      </div>

      <p className="caption">
        <b>____BMW____ </b>
       "New Look"
      </p><p className='c'>View all comment...</p>
      <div className='time'>2 day ago</div>
    </div>
    

    

  </div>  
  );
};



export default Post;
