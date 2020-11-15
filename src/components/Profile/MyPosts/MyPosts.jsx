import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (

    <div>
      My posts
      <div>
      New post
      </div>
      <div className={style.posts}>
        <Post message = 'Hi, how are you?' />
        <Post message = 'It is my first post' />  
      </div>
    </div>
  )
}

export default MyPosts;