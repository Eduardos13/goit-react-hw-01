import React from 'react';
import Profile from '../Profile/Profile';
import userData from '/src/userData.json';

const App = () => {
  return (
    <div className="App">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;