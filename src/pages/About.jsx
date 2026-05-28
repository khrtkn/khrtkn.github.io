import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { webpSource } from '../utils/images';
import { localizedRoute } from '../utils/language';
import '../style/styleguide.css';

const aboutContent = {
    ja: {
        heading: ['とくの　きひろ', 'TOKUNO KHIRO'],
        body: '2024年に多摩美術大学大学院情報デザイン領域を修了。AR技術を用いた共同体験の研究を国立民族学博物館や国立科学博物館と行う。事業会社でのUXディレクションを経て、現在はインクルーシブデザインスタジオ CULUMU に所属。',
        resume: '履歴書・CV　＞',
        portfolio: 'ポートフォリオ（PDF）　＞',
    },
    en: {
        heading: ['Kihiro Tokuno'],
        body: 'Kihiro Tokuno completed his master\'s degree in Information Design at Tama Art University in 2024. He has conducted research on collaborative experiences using AR technology with the National Museum of Ethnology and the National Museum of Nature and Science. After working in corporate UX direction, he is now a member of the inclusive design studio CULUMU.',
        resume: 'Resume / CV >',
        portfolio: 'Portfolio (PDF) >',
    },
};

const About = ({ language = 'ja' }) => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);
    const content = aboutContent[language] || aboutContent.ja;

    useEffect(() => {
        // ページマウント時にフェードイン開始
        setFadeIn(true);
    }, []);

    return (
        <div className='works'>
            <Header language={language} />
            <div
                className='image-header'
                style={{
                    opacity: fadeIn ? 1 : 0,
                    transform: fadeIn ? 'translateY(0px)' : 'translateY(10px)',
                    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                }}
            >
                <img
                    className='img-header'
                    alt='profile kihiro tokuno'
                    src={webpSource('/assets/About/image-header.jpg')}
                    loading='eager'
                    decoding='async'
                    fetchPriority='high'
                    width='1440'
                    height='371'
                />
            </div>
            <div
                className='body-works'
                style={{
                    opacity: fadeIn ? 1 : 0,
                    transform: fadeIn ? 'translateY(0px)' : 'translateY(10px)',
                    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                }}
            >
                <h1 className='heading'>
                    {content.heading.map((line, index) => (
                        <React.Fragment key={line}>
                            {line}
                            {index < content.heading.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h1>
                <div className='container-info'>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>Contact</span>
                        <p className='div'>kihirotkn@gmail.com</p>
                    </div>
                </div>

                <div className='div-2'>
                    <div className='container-info-sub'>
                        <p className='body-2'>{content.body}</p>
                    </div>
                </div>

                <div className='container-link'>
                    <a
                        className='link'
                        href='https://drive.google.com/drive/folders/11Wkb1foptHVuvdA_5EHDU7VpogLNVZCk?usp=sharing'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='body-3'>{content.resume}</span>
                    </a>

                    <a
                        className='link'
                        href='https://drive.google.com/drive/folders/1WfPRd4pgIyvsRW0Gh3r6ERND5KTYqWQ_?usp=sharing'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='body-3'>{content.portfolio}</span>
                    </a>
                </div>
                <button className='back-button' onClick={() => navigate(localizedRoute(language, '/'))}>
                    <img src='/assets/Arrow.svg' alt='Back' />
                </button>
            </div>
            <div className='footer'></div>
        </div>
    );
};

export default About;
