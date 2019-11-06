import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import KeycloakState from "./KeycloakState";

interface Props {
  keycloakState: KeycloakState;
}

type LogoutProps = Props & RouteComponentProps & {
  keycloakState: KeycloakState;
};

const Logout: React.FC<LogoutProps> = (props) => {

  const keycloakState = props.keycloakState;

  function logout() {
    props.history.push('/')
    if (keycloakState.keycloak != null) {
      keycloakState.keycloak.logout();
    }
  }

  return (
    <div className="Logout">
      <Button variant="outline-light" onClick={ () => logout() }>Logout</Button>
    </div>
  );
};

export default withRouter(Logout);
