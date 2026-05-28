import React from 'react';
import Sketch from 'react-p5';
import { useNavigate } from 'react-router-dom';
import Matter from 'matter-js';
import Header from '../components/Header';
import { localizedRoute } from '../utils/language';
import '../style/styleguide.css';

const Home = ({ language = 'ja' }) => {
    const navigate = useNavigate();
    let engine;
    let world;
    let topCircle;
    let worksSquare;
    let walls = [];
    const shapeSize = 200;

    const setup = (p5, canvasParentRef) => {
        p5.pixelDensity(1);
        p5.frameRate(30);
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);

        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies;

        engine = Engine.create();
        world = engine.world;
        engine.world.gravity.y = 0.98;

        // 中央のx座標を計算
        const centerX = p5.width / 2;

        // 円の作成（中央から±50pxの範囲でランダム）
        const circleX = centerX + p5.random(-50, 50);
        topCircle = Bodies.circle(circleX, -shapeSize, shapeSize / 2, {
            restitution: 0.8,
            friction: 0.1,
            frictionAir: 0.01,
            label: 'About',
        });

        // 矩形の作成（中央から±50pxの範囲でランダム）
        const squareX = centerX + p5.random(-50, 50);
        worksSquare = Bodies.rectangle(squareX, -shapeSize, shapeSize, shapeSize, {
            restitution: 0.3,
            friction: 0.1,
            frictionAir: 0.01,
            label: 'Works',
        });

        // 壁の作成
        const wallOptions = { isStatic: true, restitution: 0.3 };
        walls = [
            Bodies.rectangle(p5.width / 2, p5.height + 50, p5.width, 100, wallOptions),
            Bodies.rectangle(-50, p5.height / 2, 100, p5.height, wallOptions),
            Bodies.rectangle(p5.width + 50, p5.height / 2, 100, p5.height, wallOptions),
        ];

        // ワールドに追加
        World.add(world, [topCircle, worksSquare, ...walls]);

        Matter.Body.setVelocity(topCircle, { x: p5.random(-2, 2), y: 0 });
        Matter.Body.setVelocity(worksSquare, { x: p5.random(-2, 2), y: 0 });
        Matter.Body.setAngle(topCircle, p5.PI / 2);
        Matter.Body.setAngle(worksSquare, p5.PI / 3);
    };

    // 残りのコードは変更なし
    const draw = (p5) => {
        p5.clear();
        Matter.Engine.update(engine);

        constrainPosition(p5, topCircle);
        constrainPosition(p5, worksSquare);

        drawShape(p5, topCircle, 'About', true);
        drawShape(p5, worksSquare, 'Works');
    };

    const drawShape = (p5, body, text, isCircle = false) => {
        p5.push();
        p5.translate(body.position.x, body.position.y);
        p5.rotate(body.angle);

        p5.fill(255);
        p5.stroke('#091420');
        p5.strokeWeight(0.5);

        if (isCircle) {
            p5.ellipse(0, 0, shapeSize);
        } else {
            p5.rectMode(p5.CENTER);
            p5.rect(0, 0, shapeSize, shapeSize);
        }

        p5.noStroke();
        p5.fill(0);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.drawingContext.font = '200 20px Gen Jyuu GothicL, Helvetica';
        p5.text(text, 0, 0);
        p5.pop();
    };

    const mousePressed = (p5) => {
        const mouseVector = Matter.Vector.create(p5.mouseX, p5.mouseY);
        const bodies = Matter.Composite.allBodies(world);
        const clickedBody = Matter.Query.point(bodies, mouseVector)[0];

        if (clickedBody) {
            switch (clickedBody.label) {
                case 'About':
                    navigate(localizedRoute(language, '/about'));
                    break;
                case 'Works':
                    navigate(localizedRoute(language, '/works'));
                    break;
                default:
                    break;
            }
        } else {
            applyRandomForce(p5, topCircle);
            applyRandomForce(p5, worksSquare);
        }
    };

    const applyRandomForce = (p5, body) => {
        const force = {
            x: p5.random(-0.7, 0.7),
            y: p5.random(-0.7, -0.7),
        };
        Matter.Body.applyForce(body, body.position, force);
    };

    const constrainPosition = (p5, body) => {
        const minX = shapeSize / 2;
        const maxX = p5.width - shapeSize / 2;
        const minY = shapeSize / 2;
        const maxY = p5.height - shapeSize / 2;

        if (body.position.x < minX) Matter.Body.setPosition(body, { x: minX, y: body.position.y });
        if (body.position.x > maxX) Matter.Body.setPosition(body, { x: maxX, y: body.position.y });
        if (body.position.y < minY) Matter.Body.setPosition(body, { x: body.position.x, y: minY });
        if (body.position.y > maxY) Matter.Body.setPosition(body, { x: body.position.x, y: maxY });
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
        if (engine && engine.world && engine.world.bodies) {
            engine.world.bodies.forEach((body) => {
                if (body && body.position) {
                    Matter.Body.setPosition(body, {
                        x: (body.position.x * window.innerWidth) / p5.width,
                        y: (body.position.y * window.innerHeight) / p5.height,
                    });
                }
            });
        }
        Matter.Body.setPosition(walls[0], { x: p5.width / 2, y: p5.height + 50 });
        Matter.Body.setPosition(walls[2], { x: p5.width + 50, y: p5.height / 2 });
    };

    return (
        <div className='home'>
            <Header language={language} />
            <div className='canvas-container'>
                <Sketch setup={setup} draw={draw} mousePressed={mousePressed} windowResized={windowResized} />
            </div>
        </div>
    );
};

export default Home;
