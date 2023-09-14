import './LeftPanel.css';
import Button from './Button';

const LeftPanel = () => {
  return (
    <div className='left-panel'>
      <h1>Welcome Back!</h1>
      <h3>To keep connected with us please login with your personal info</h3>
      <Button name={'Sign in'} class={'in'}/>
    </div>
  );
};

export default LeftPanel;
