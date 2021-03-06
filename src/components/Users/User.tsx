import React, { FC } from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import { IUsers } from '../Redux/Users_Reduser';


type PropsType = {
    user : IUsers
    followingInProgress : Array<number>;
    follow : (userId: number) => void;
    unfollow : (userId: number) => void;
}

const User : FC<PropsType> = ({user, followingInProgress, follow, unfollow, ...props }) => {
    return (
        <div>

            <div className={style.usersContainer} key={user.id}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small || userPhoto} alt='avatar' className={style.userAvatar}></img>
                    </NavLink>
                </div>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>follow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }} >unfollow</button>
                }

                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
            </div>

        </div>
    )


}

export default User