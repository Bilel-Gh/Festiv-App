import React from 'react';
import CustomTheme from '../CustomTheme/CustomTheme';
import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import "./ProfileSide.scss";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <ProfileCard/>
        <FollowersCard/>
        <CustomTheme/>
    </div>
  )
}

export default ProfileSide