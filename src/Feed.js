import React from 'react';
import Profile from './profile/profile';
import Interests from './interests/interests';
import Learn from './learn/learn';
import Expectations from './expectations/expectations';



export default function Feed(){
    return(
        <div>
            <Profile />
            <Interests />
            <Learn />
            <Expectations />
        </div>
    )
}