import { MutableRefObject } from "react";

export type UseEnemiesConfig = {
    ctx: MutableRefObject<CanvasRenderingContext2D | null>;
    canvasWidth: MutableRefObject<number | null>;
    canvasHeight: MutableRefObject<number | null>;
    enemyImg: MutableRefObject<HTMLImageElement | null>;
};

export type EnemyConfig = {
    ctx: CanvasRenderingContext2D;
    canvasWidth: number;
    canvasHeight: number;
    enemyImg: HTMLImageElement;
};
