import SocialsButton from './SocialsButton';
import LoginCreateForm from './LoginCreateForm';
import './RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel">
      <h1>Create Account</h1>
      <div className="social-btns">
        <SocialsButton icon={'/public/facebook-icon.png'} alt="facebook icon" />
        <SocialsButton icon={'/public/google-icon.png'} alt="google icon"/>
        <SocialsButton icon={'/public/linkedin-icon.png'} alt="linkedin icon" />
      </div>
      <h3>or use your email for registration</h3>
      <LoginCreateForm />
    </div>
  );
};

export default RightPanel;
