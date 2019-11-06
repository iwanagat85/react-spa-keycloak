import React, {useEffect, useState} from 'react';

import KeycloakState from './KeycloakState';

type User = { name: String, email: String, id: String } | null

interface Props {
  keycloakState: KeycloakState;
}

const UserInfo: React.FC<Props> = (props) => {

  const keycloakState = props.keycloakState;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (keycloakState.keycloak === null) {
      throw Error('keycloak is not initialized.');
    }
    keycloakState.keycloak.loadUserInfo()
      .success((user: any) => {
        console.log(user);
        setUser({name: user.name, email: user.email, id: user.sub})
      });
  }, []);

  return (
    <div className="UserInfo">
      <p>Welcome to secure components, {user != null ? user.name : ""}</p>
    </div>
  );
};

export default UserInfo;