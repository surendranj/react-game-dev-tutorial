export type ParallaxSpeedProps = {
    gameSpeed: number;
    handleSpeedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type LayerConfig = {
    image: HTMLImageElement;
    speedModifier: number;
    gameSpeed: number;
    ctx: CanvasRenderingContext2D;
};
