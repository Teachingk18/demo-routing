import React from 'react';
import { Button, Tabs } from 'antd';
import UserProfile from '../../components/UserProfile';
import ListPost from '../../components/Post';
import CardUserOverview from '../../components/CardUserOverview';
import { Link } from 'react-router';

const Profile = () => {
    const tabItems = [
        {
            key: 'POSTS',
            label: 'My posts'
        },
        {
            key: 'PROFILE',
            label: 'My Profile'
        }
    ];
    return (
        <div className='profilePage m-auto p-[18px] max-w-[90vw] min-h-[50vh] flex gap-[18px]'>
            <div className='flex-[0.25 p-[18px] bg-white'>
                <CardUserOverview />
            </div>
            <div className='flex-[0.75] bg-white  p-[18px]'>
                <Link className='float-right' to={'/login'}>
                    <Button>
                        Log in
                    </Button>
                </Link>
                <Tabs
                    items={tabItems}
                    onChange={(key) => {
                        console.log(key);
                    }}
                />
                <ListPost />
                {/* <UserProfile /> */}
            </div>
        </div>
    )
}

export default Profile;