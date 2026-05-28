import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../constants/projects';
import { useNavigate } from 'react-router-dom';
import { webpSource } from '../utils/images';
import '../style/styleguide.css';

const Works = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // ページマウント時にフェードイン開始
        setFadeIn(true);
    }, []);

    return (
        <div className='works'>
            {/* ヘッダー */}
            <div className='header'>
                <a href={'/'}>
                    <img src='/assets/Logo.svg' alt='Logo' className='logo' />
                </a>
            </div>

            {/* 本文エリア */}
            <div
                className='body'
                style={{
                    opacity: fadeIn ? 1 : 0,
                    transform: fadeIn ? 'translateY(0px)' : 'translateY(10px)',
                    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                }}
            >
                {projects.map((project, index) => (
                    <Link key={project.slug} to={`/works/${project.slug}`} className='project-link'>
                        <div className='top-button-explore'>
                            <img
                                className='image-wrapper'
                                src={webpSource(project.imageBanner)}
                                alt=''
                                loading={index === 0 ? 'eager' : 'lazy'}
                                decoding='async'
                                fetchPriority={index === 0 ? 'high' : undefined}
                                width='600'
                                height='316'
                            />
                            <div className='text-content'>
                                <h3 className='project-title'>{project.titleshort}</h3>
                                <p className='project-year'>{project.year}</p>
                            </div>
                        </div>
                    </Link>
                ))}
                <button className='back-button' onClick={() => navigate('/')}>
                    <img src='/assets/Arrow.svg' alt='Back' />
                </button>
            </div>

            {/* フッター */}
            <div className='footer'></div>
        </div>
    );
};

export default Works;
