import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getProjects } from '../constants/localizedProjects';
import { webpSource } from '../utils/images';
import { localizedRoute } from '../utils/language';
import '../style/styleguide.css';

const Works = ({ language = 'ja' }) => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);
    const projects = getProjects(language);

    useEffect(() => {
        // ページマウント時にフェードイン開始
        setFadeIn(true);
    }, []);

    return (
        <div className='works'>
            {/* ヘッダー */}
            <Header language={language} />

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
                    <Link key={project.slug} to={localizedRoute(language, `/works/${project.slug}`)} className='project-link'>
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
                <button className='back-button' onClick={() => navigate(localizedRoute(language, '/'))}>
                    <img src='/assets/Arrow.svg' alt='Back' />
                </button>
            </div>

            {/* フッター */}
            <div className='footer'></div>
        </div>
    );
};

export default Works;
