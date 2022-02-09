import { UseEnemiesConfig } from "../../types/npc-movement";
import Enemy from "../../utils/enemy";
import { useEffect } from "react";

const useEnemies = (config: UseEnemiesConfig, numOfEnemies: number) => {
    const enemies: Enemy[] = [];


    useEffect(() => {
        const enemyConfig = {
            ctx: config.ctx.current!,
            canvasWidth: config.canvasWidth.current!,
            canvasHeight: config.canvasHeight.current!,
            enemyImg: config.enemyImg.current!
        };
        // const enemies: Enemy[] = [];
        for (let i = 0; i < numOfEnemies; i++) {
            enemies.push(new Enemy(enemyConfig));
        }
    });
    return enemies;
};

export default useEnemies;
