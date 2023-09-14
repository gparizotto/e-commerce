import PropTypes from 'prop-types'
import './SocialsButton.css'

const SocialsButton = (props) => {
    return (
        <button className='socials-btn'>
            <img src={props.icon} alt={props.alt} />
        </button>
    )
}

SocialsButton.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default SocialsButton;