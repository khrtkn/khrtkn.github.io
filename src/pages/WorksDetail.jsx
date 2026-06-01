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

const renderValue = (value) => {
    if (Array.isArray(value)) {
        return value.join(', ');
    }

    return value || '';
};

const normalizeHref = (href) => href.replace(/\u2011/g, '-');

const renderInlineText = (text, keyPrefix) => {
    const nodes = [];
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(text)) !== null) {
        if (match.index > lastIndex) {
            nodes.push(text.slice(lastIndex, match.index));
        }

        nodes.push(
            <a key={`${keyPrefix}-link-${match.index}`} href={normalizeHref(match[2])} target='_blank' rel='noreferrer'>
                {match[1]}
            </a>
        );
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        nodes.push(text.slice(lastIndex));
    }

    return nodes;
};

const renderMarkdownBody = (body) => {
    const blocks = [];
    const lines = body.split('\n');
    let paragraph = [];
    let listItems = [];
    let listType = null;

    const flushParagraph = () => {
        if (!paragraph.length) return;

        const text = paragraph.join(' ');
        const key = `paragraph-${blocks.length}`;
        blocks.push(<p key={key}>{renderInlineText(text, key)}</p>);
        paragraph = [];
    };

    const flushList = () => {
        if (!listItems.length) return;

        const key = `list-${blocks.length}`;
        const Tag = listType === 'ol' ? 'ol' : 'ul';
        blocks.push(
            <Tag key={key}>
                {listItems.map((item, index) => (
                    <li key={`${key}-${index}`}>{renderInlineText(item, `${key}-${index}`)}</li>
                ))}
            </Tag>
        );
        listItems = [];
        listType = null;
    };

    lines.forEach((line) => {
        const trimmed = line.trim();

        if (!trimmed) {
            flushParagraph();
            flushList();
            return;
        }

        const heading = trimmed.match(/^(#{2,3})\s+(.+)$/);
        if (heading) {
            flushParagraph();
            flushList();
            const key = `heading-${blocks.length}`;
            const Tag = heading[1].length === 2 ? 'h2' : 'h3';
            blocks.push(
                <Tag key={key} className={heading[1].length === 2 ? 'markdown-heading' : 'markdown-subheading'}>
                    {renderInlineText(heading[2], key)}
                </Tag>
            );
            return;
        }

        const bullet = trimmed.match(/^[*-]\s+(.+)$/);
        if (bullet) {
            flushParagraph();
            if (listType && listType !== 'ul') flushList();
            listType = 'ul';
            listItems.push(bullet[1]);
            return;
        }

        const numbered = trimmed.match(/^\d+\.\s+(.+)$/);
        if (numbered) {
            flushParagraph();
            if (listType && listType !== 'ol') flushList();
            listType = 'ol';
            listItems.push(numbered[1]);
            return;
        }

        flushList();
        paragraph.push(trimmed);
    });

    flushParagraph();
    flushList();

    return blocks;
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
                        <p key={idx}>{renderInlineText(paragraph, `array-${idx}`)}</p>
                    ))}
                </div>
            );
        }

        if (typeof section.body === 'string' && /(^|\n)\s*#{2,3}\s+|(^|\n)\s*[*-]\s+|(^|\n)\s*\d+\.\s+|\[[^\]]+\]\([^)]+\)/.test(section.body)) {
            return <div className='body-2 markdown-body'>{renderMarkdownBody(section.body)}</div>;
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
                        <p className='div'>{renderValue(project.timeline)}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>{pageLabels.role}</span>
                        <p className='div'>{renderValue(project.team)}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>{pageLabels.tools}</span>
                        <p className='div'>{renderValue(project.tools)}</p>
                    </div>
                    <div className='container-info-2'>
                        <span className='text-wrapper'>{pageLabels.discipline}</span>
                        <p className='div'>{renderValue(project.discipline)}</p>
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
                            {section.heading && <h2 className='heading-3'>{section.heading}</h2>}
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
