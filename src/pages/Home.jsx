import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Matter from 'matter-js';
import Header from '../components/Header';
import { localizedRoute } from '../utils/language';
import '../style/styleguide.css';

const SHAPE_SIZE = 200;
const FRAME_INTERVAL = 1000 / 30;

const randomBetween = (min, max) => Math.random() * (max - min) + min;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Home = ({ language = 'ja' }) => {
    const navigate = useNavigate();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d', { alpha: true });

        if (!canvas || !context) return undefined;

        const engine = Matter.Engine.create();
        const world = engine.world;
        world.gravity.y = 0.98;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrame = null;
        let disposed = false;
        let lastFrameTime = 0;
        let walls = [];

        const wallOptions = { isStatic: true, restitution: 0.6 };
        const topCircle = Matter.Bodies.circle(width / 2 + randomBetween(-50, 50), -SHAPE_SIZE, SHAPE_SIZE / 2, {
            restitution: 0.8,
            friction: 0.1,
            frictionAir: 0.01,
            label: 'About',
        });
        const worksSquare = Matter.Bodies.rectangle(width / 2 + randomBetween(-50, 50), -SHAPE_SIZE, SHAPE_SIZE, SHAPE_SIZE, {
            restitution: 0.6,
            friction: 0.1,
            frictionAir: 0.01,
            label: 'Works',
        });

        const makeWalls = () => [
            Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions),
            Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOptions),
            Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions),
        ];

        const resizeCanvas = () => {
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        };

        const resetWalls = () => {
            if (walls.length) {
                walls.forEach((wall) => Matter.Composite.remove(world, wall));
            }
            walls = makeWalls();
            Matter.Composite.add(world, walls);
        };

        const constrainPosition = (body) => {
            Matter.Body.setPosition(body, {
                x: clamp(body.position.x, SHAPE_SIZE / 2, width - SHAPE_SIZE / 2),
                y: clamp(body.position.y, SHAPE_SIZE / 2, height - SHAPE_SIZE / 2),
            });
        };

        const drawShape = (body, text, isCircle = false) => {
            context.save();
            context.translate(body.position.x, body.position.y);
            context.rotate(body.angle);
            context.fillStyle = '#ffffff';
            context.strokeStyle = '#091420';
            context.lineWidth = 0.5;

            context.beginPath();
            if (isCircle) {
                context.arc(0, 0, SHAPE_SIZE / 2, 0, Math.PI * 2);
            } else {
                context.rect(-SHAPE_SIZE / 2, -SHAPE_SIZE / 2, SHAPE_SIZE, SHAPE_SIZE);
            }
            context.fill();
            context.stroke();

            context.fillStyle = '#091420';
            context.font = '200 20px "Gen Jyuu GothicL", Helvetica, sans-serif';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, 0, 0);
            context.restore();
        };

        const render = () => {
            context.clearRect(0, 0, width, height);
            drawShape(topCircle, 'About', true);
            drawShape(worksSquare, 'Works');
        };

        const tick = (timestamp) => {
            if (disposed) return;

            if (!lastFrameTime) {
                lastFrameTime = timestamp;
            }

            const elapsed = timestamp - lastFrameTime;
            if (elapsed >= FRAME_INTERVAL) {
                Matter.Engine.update(engine, FRAME_INTERVAL);
                constrainPosition(topCircle);
                constrainPosition(worksSquare);
                render();
                lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);
            }

            animationFrame = window.requestAnimationFrame(tick);
        };

        const startAnimation = () => {
            if (!animationFrame && !disposed) {
                animationFrame = window.requestAnimationFrame(tick);
            }
        };

        const applyRandomForce = (body) => {
            Matter.Body.applyForce(body, body.position, {
                x: randomBetween(-0.7, 0.7),
                y: -0.7,
            });
        };

        const handlePointerDown = (event) => {
            const rect = canvas.getBoundingClientRect();
            const pointer = Matter.Vector.create(event.clientX - rect.left, event.clientY - rect.top);
            const clickedBody = Matter.Query.point(Matter.Composite.allBodies(world), pointer).find((body) => body.label === 'About' || body.label === 'Works');

            if (clickedBody?.label === 'About') {
                navigate(localizedRoute(language, '/about'));
                return;
            }

            if (clickedBody?.label === 'Works') {
                navigate(localizedRoute(language, '/works'));
                return;
            }

            applyRandomForce(topCircle);
            applyRandomForce(worksSquare);
        };

        const handleResize = () => {
            const previousWidth = width || window.innerWidth;
            const previousHeight = height || window.innerHeight;
            width = window.innerWidth;
            height = window.innerHeight;

            resizeCanvas();
            [topCircle, worksSquare].forEach((body) => {
                Matter.Body.setPosition(body, {
                    x: clamp((body.position.x * width) / previousWidth, SHAPE_SIZE / 2, width - SHAPE_SIZE / 2),
                    y: clamp((body.position.y * height) / previousHeight, SHAPE_SIZE / 2, height - SHAPE_SIZE / 2),
                });
            });
            resetWalls();
            render();
        };

        resizeCanvas();
        resetWalls();
        Matter.Composite.add(world, [topCircle, worksSquare]);
        Matter.Body.setVelocity(topCircle, { x: randomBetween(-2, 2), y: 0 });
        Matter.Body.setVelocity(worksSquare, { x: randomBetween(-2, 2), y: 0 });
        Matter.Body.setAngle(topCircle, Math.PI / 2);
        Matter.Body.setAngle(worksSquare, Math.PI / 3);
        render();
        startAnimation();

        canvas.addEventListener('pointerdown', handlePointerDown);
        window.addEventListener('resize', handleResize);

        return () => {
            disposed = true;
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
            canvas.removeEventListener('pointerdown', handlePointerDown);
            window.removeEventListener('resize', handleResize);
            Matter.Composite.clear(world, false);
            Matter.Engine.clear(engine);
        };
    }, [language, navigate]);

    return (
        <div className='home'>
            <Header language={language} />
            <div className='canvas-container'>
                <canvas ref={canvasRef} className='home-canvas' aria-label='Portfolio navigation' />
            </div>
        </div>
    );
};

export default Home;
