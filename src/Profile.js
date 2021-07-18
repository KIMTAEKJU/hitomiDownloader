import React from 'react';

const data = {
    kimtaekju: {
        name: '김택주',
        description: 'test'
    }
}

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];

    if(!profile){
        return <div>not exist</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;