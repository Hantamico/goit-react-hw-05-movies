import PropTypes from 'prop-types';
import css from './Title.module.css'


const Title = ({ titleMessage }) => {
    return <h1 className={css.title}>{titleMessage}</h1>
}

Title.propTypes = {
    titleMessage: PropTypes.string,
}

export default Title;
