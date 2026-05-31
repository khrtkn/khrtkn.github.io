import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getProjectBySlug } from '../constants/localizedProjects';
import { webpSource } from '../utils/images';
import { localizedRoute } from '../utils/language';

const labels = {
    ja: {
        timeline: '制作期間',
        role: '担当',
        tools: '使用ツール',
        discipline: '分野',
        notFound: 'Project not found',
    },
    en: {
        timeline: 'Timeline',
        role: 'Team',
        tools: 'Tools',
        discipline: 'Field',
        notFound: 'Project not found',
    },
};

const WorksDetail = ({ language = 'ja' }) => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug, language);
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);
    const pageLabels = labels[language] || labels.ja;

    useEffect(() => {
        // ページマウント時にフェードイン開始
        setFadeIn(true);
    }, []);

    if (!project) return <div>{pageLabels.notFound}</div>;

    const renderSectionBody = (section) => {
        if (section.bodyHtml) {
            return <div className='body-2 body-html' dangerouslySetInnerHTML={{ __html: section.bodyHtml }} />;
        }

        if (Array.isArray(section.body)) {
            return (
                <div className='body-2 body-copy'>
                    {section.body.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            );
        }

        return <p className='body-2'>{section.body}</p>;
    };

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
                    src={webpSource(project.imageHeader)}
                    alt={project.titleshort}
                    loading='eager'
                    decoding='async'
                    fetchPriority='high'
                    width='1280'
                    height='332'
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
                    {project.title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </h1>
                <div className='container-info'>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>{pageLabels.timeline}</span>
                        <p className='div'>{project.timeline}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>{pageLabels.role}</span>
                        <p className='div'>{project.team}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>{pageLabels.tools}</span>
                        <p className='div'>{project.tools}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>{pageLabels.discipline}</span>
                        <p className='div'>{project.discipline}</p>
                    </div>
                </div>

                {project.videoEmbeds && (
                    <div className='video-grid'>
                        {project.videoEmbeds.map((video) => (
                            <div className='video-frame' key={video.src}>
                                <iframe
                                    src={video.src}
                                    title={video.title}
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                )}

                <div className='div-2'>
                    {project.sections.map((section, index) => (
                        <div key={index} className='container-info-sub'>
                            <h2 className='heading-3'>{section.heading}</h2>
                            {renderSectionBody(section)}
                            {section.images && (
                                <div className={`image-grid ${section.imageMode === 'natural' ? 'image-grid--natural' : ''}`}>
                                    {section.images.map((image, idx) => {
                                        return (
                                            <img
                                                key={idx}
                                                className='img'
                                                src={webpSource(image)}
                                                alt={`${project.titleshort} ${index + 1}-${idx + 1}`}
                                                loading='lazy'
                                                decoding='async'
                                                width='1280'
                                                height='720'
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='container-link'>
                    {project.links.map((link, index) => (
                        <a key={index} href={link.href} className='link' target='_blank' rel='noreferrer'>
                            <span className='body-3'>{link.text}</span>
                        </a>
                    ))}
                </div>
                <button className='back-button' onClick={() => navigate(localizedRoute(language, '/works'))}>
                    <img src='/assets/Arrow.svg' alt='Back' />
                </button>
            </div>

            <div className='footer'></div>
        </div>
    );
};

export default WorksDetail;
