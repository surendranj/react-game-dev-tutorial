import useCanvas from "../../hooks/useCanvas";
import { useEffect } from "react";
import useEnemies from "../../hooks/npc-movement/useEnemies";
import useImage from "../../hooks/useImage";

const NpcMovement = () => {
    const { canvasRef, ctx, canvasWidth, canvasHeight } = useCanvas();

    const enemyImg = useImage("/images/sprites/Characters/enemy2.png");
    const numOfEnemies = 50;
    const enemyConfig = {
        ctx,
        canvasWidth,
        canvasHeight,
        enemyImg: enemyImg.newImage,
    };
    const enemies = useEnemies(enemyConfig, numOfEnemies);

    useEffect(() => {
        // Animation
        let requestId: number;
        const animate = () => {
            ctx.current?.clearRect(0, 0, canvasWidth.current!, canvasHeight.current!);
            enemies.forEach((enemy) => {
                enemy.draw();
                enemy.update();
            });
            requestId = requestAnimationFrame(animate);
        };
        animate();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <div className="flex w-full h-full justify-center items-center">
            <canvas ref={canvasRef} width={1200} height={600} className="border border-black"></canvas>
        </div>
    );
};

export default NpcMovement;
