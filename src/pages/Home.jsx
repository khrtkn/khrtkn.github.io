import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Matter from 'matter-js';
import Header from '../components/Header';
import { localizedRoute } from '../utils/language';
import '../style/styleguide.css';

const SHAPE_SIZE = 200;
const FRAME_MS = 1000 / 30;

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
        let lastFrameTime = 0;
        let idleFrames = 0;
        let isRunning = false;
        let disposed = false;
        let walls = [];

        const wallOptions = { isStatic: true, restitution: 0.3 };
        const topCircle = Matter.Bodies.circle(width / 2 + randomBetween(-50, 50), -SHAPE_SIZE, SHAPE_SIZE / 2, {
            restitution: 0.8,
            friction: 0.1,
            frictionAir: 0.01,
            label: 'About',
        });
        const worksSquare = Matter.Bodies.rectangle(width / 2 + randomBetween(-50, 50), -SHAPE_SIZE, SHAPE_SIZE, SHAPE_SIZE, {
            restitution: 0.3,
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
            const nextX = clamp(body.position.x, SHAPE_SIZE / 2, width - SHAPE_SIZE / 2);
            const nextY = clamp(body.position.y, SHAPE_SIZE / 2, height - SHAPE_SIZE / 2);

            if (nextX !== body.position.x || nextY !== body.position.y) {
                Matter.Body.setVelocity(body, {
                    x: nextX !== body.position.x ? 0 : body.velocity.x,
                    y: nextY !== body.position.y ? 0 : body.velocity.y,
                });
            }

            Matter.Body.setPosition(body, {
                x: nextX,
                y: nextY,
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

        const bodiesAreSettled = () => [topCircle, worksSquare].every((body) => body.speed < 0.03 && Math.abs(body.angularVelocity) < 0.003);

        const tick = (time) => {
            if (disposed) return;

            if (!lastFrameTime) {
                lastFrameTime = time;
            }

            if (time - lastFrameTime >= FRAME_MS) {
                Matter.Engine.update(engine, FRAME_MS);
                constrainPosition(topCircle);
                constrainPosition(worksSquare);
                render();
                lastFrameTime = time;
                idleFrames = bodiesAreSettled() ? idleFrames + 1 : 0;

                if (idleFrames > 60) {
                    animationFrame = null;
                    isRunning = false;
                    return;
                }
            }

            animationFrame = window.requestAnimationFrame(tick);
        };

        const startAnimation = () => {
            idleFrames = 0;
            if (!isRunning && !disposed) {
                isRunning = true;
                lastFrameTime = 0;
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
            startAnimation();
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
            startAnimation();
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
