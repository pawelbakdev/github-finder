import React, {useContext} from 'react';
import UserItem from "./UserItem";
import Spiner from '../layout/Spiner';
import GithubContext from "../../conetxt/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  if(loading) {
    return <Spiner/>
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <div key={user.id}>
            <UserItem key={user.id} user={user}/>
          </div>
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;