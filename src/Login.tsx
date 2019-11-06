import React from 'react';
import Button from 'react-bootstrap/Button'

const Login: React.FC = () => {
  return (
    <div className="Login">
      <p>This is public content. It can view even if are not login.</p>
      <Button variant="outline-light" href="/secured">Login</Button>
    </div>
  );
};

export default Login;