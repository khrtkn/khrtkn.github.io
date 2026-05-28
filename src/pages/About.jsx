import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { webpSource } from '../utils/images';
import '../style/styleguide.css';

const About = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // ページマウント時にフェードイン開始
        setFadeIn(true);
    }, []);

    return (
        <div className='works'>
            <div className='header'>
                <a href={'/'}>
                    <img src='/assets/Logo.svg' alt='Logo' className='logo' />
                </a>
            </div>
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
                    とくの　きひろ
                    <br />
                    TOKUNO KHIRO
                </h1>
                <div className='container-info'>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>Contact</span>
                        <p className='div'>kihirotkn@gmail.com</p>
                    </div>
                </div>

                <div className='div-2'>
                    <div className='container-info-sub'>
                        <p className='body-2'>
                            2024年に多摩美術大学大学院情報デザイン領域を修了。AR技術を用いた共同体験の研究を国立民族学博物館や国立科学博物館と行う。事業会社でのUXディレクションを経て、現在はインクルーシブデザインスタジオ CULUMU に所属。
                        </p>
                    </div>
                </div>

                <div className='container-link'>
                    <a
                        className='link'
                        href='https://drive.google.com/drive/folders/11Wkb1foptHVuvdA_5EHDU7VpogLNVZCk?usp=sharing'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='body-3'>履歴書・CV　＞</span>
                    </a>

                    <a
                        className='link'
                        href='https://drive.google.com/drive/folders/1WfPRd4pgIyvsRW0Gh3r6ERND5KTYqWQ_?usp=sharing'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='body-3'>ポートフォリオ（PDF）　＞</span>
                    </a>
                </div>
                <button className='back-button' onClick={() => navigate('/')}>
                    <img src='/assets/Arrow.svg' alt='Back' />
                </button>
            </div>
            <div className='footer'></div>
        </div>
    );
};

export default About;
