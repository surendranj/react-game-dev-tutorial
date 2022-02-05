import { useRef, useEffect } from "react";
import { SpriteAnimations, Frames, PlayerProps } from "../../types/sprite-animation-types";

const spriteWidth = 575;
const spriteHeight = 523;
const canvasWidth = 600;
const canvasHeight = 600;

let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations: SpriteAnimations = {};
const animationStates = [
    { name: "idle", frames: 7 },
    { name: "jump", frames: 7 },
    { name: "fall", frames: 7 },
    { name: "run", frames: 9 },
    { name: "dizzy", frames: 11 },
    { name: "sit", frames: 5 },
    { name: "roll", frames: 7 },
    { name: "bite", frames: 7 },
    { name: "ko", frames: 12 },
    { name: "getHit", frames: 4 },
];

animationStates.forEach((state, index) => {
    let frames: Frames = { loc: [] };
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
});

const Player = ({ playerState }: PlayerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
    const numOfFrames = spriteAnimations[playerState].loc.length;

    useEffect(() => {
        const image = new Image();
        image.src = "/images/sprites/shadow_dog.png";

        let requestId: number;

        const animate = () => {
            if (canvasRef.current) {
                canvasCtxRef.current = canvasRef.current.getContext("2d");
                let ctx = canvasCtxRef.current;
                let position = Math.floor(gameFrame / staggerFrames) % numOfFrames;
                let frameX = spriteWidth * position;
                let frameY = spriteAnimations[playerState].loc[position].y;
                ctx!.clearRect(0, 0, canvasWidth, canvasHeight);

                ctx!.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

                gameFrame++;

                requestId = requestAnimationFrame(animate);
            }
        };
        animate();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <canvas
            width={canvasWidth}
            height={canvasHeight}
            ref={canvasRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        />
    );
};

export default Player;
