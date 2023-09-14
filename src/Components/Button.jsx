import PropTypes from 'prop-types'
import './Button.css';

const Button = (props) => {
  return <button className={`sign-btn ${props.class}`}>{props.name}</button>;
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
}

export default Button;
