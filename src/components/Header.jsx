import { Link, useLocation } from 'react-router-dom';
import { alternateLanguage, localizedCurrentPath, localizedRoute } from '../utils/language';

const Header = ({ language = 'ja' }) => {
    const location = useLocation();
    const nextLanguage = alternateLanguage(language);
    const nextPath = localizedCurrentPath(location.pathname, nextLanguage);

    return (
        <div className='header'>
            <Link to={localizedRoute(language, '/')} className='logo-link'>
                <img src='/assets/Logo.svg' alt='Logo' className='logo' />
            </Link>
            <Link to={nextPath} className='language-switch' aria-label={`Switch to ${nextLanguage}`}>
                {nextLanguage.toUpperCase()}
            </Link>
        </div>
    );
};

export default Header;
