import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants/projects';
import { hiddenProjectSlugs } from '../constants/hiddenProjects';
import { useNavigate } from 'react-router-dom';

const WorksDetail = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    const isHidden = hiddenProjectSlugs.includes(slug);
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // ページマウント時にフェードイン開始
        setFadeIn(true);
    }, []);

    if (!project || isHidden) return <div>Project not found</div>;

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
                <img className='img-header' src={project.imageHeader} />
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
                        <span className='text-wrapper'>制作期間</span>
                        <p className='div'>{project.timeline}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>担当</span>
                        <p className='div'>{project.team}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>使用ツール</span>
                        <p className='div'>{project.tools}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>分野</span>
                        <p className='div'>{project.discipline}</p>
                    </div>
                </div>

                <div className='div-2'>
                    {project.sections.map((section, index) => (
                        <div key={index} className='container-info-sub'>
                            <h2 className='heading-3'>{section.heading}</h2>
                            <p className='body-2'>{section.body}</p>
                            {section.images && (
                                <div className='image-grid'>
                                    {section.images.map((image, idx) => {
                                        return (
                                            <img
                                                key={idx}
                                                className='img'
                                                src={image}
                                                alt={`${project.title} ${index + 1}`}
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
                        <a key={index} href={link.href} className='link' target='_blank'>
                            <span className='body-3'>{link.text}</span>
                        </a>
                    ))}
                </div>
                <button className='back-button' onClick={() => navigate('/works')}>
                    <img src='/assets/Arrow.svg' alt='Back' />
                </button>
            </div>

            <div className='footer'></div>
        </div>
    );
};

export default WorksDetail;
