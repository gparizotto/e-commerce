import Button from './Button'
import './LoginCreateForm.css'

const LoginCreateForm = () => {
  return (
    <>
      <input className="login-input" type="text" placeholder="Name" />
      <input className="login-input" type="text" placeholder="Email" />
      <input className="login-input" type="password" placeholder="Password" />
      <Button name='Sign Up' class='up'/>
    </>
  );
};

export default LoginCreateForm;
