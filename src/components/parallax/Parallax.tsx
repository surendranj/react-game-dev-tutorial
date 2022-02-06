import React from "react";
import { useRef, useEffect } from "react";

class Layer {
    bgLayerSrc = "/images/sprites/halloween-background/1_game_background/layers/";
}

export const Parallax = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const bgLayerSrc = useRef("/images/sprites/halloween-background/1_game_background/layers/");

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const canvasWidth = canvas?.width;
        const canvasHeight = canvas?.height;

        let requestId: number;
        const layer4 = new Image();
        layer4.src = bgLayerSrc.current + "4.png";
        const layer5 = new Image();
        layer5.src = bgLayerSrc.current + "5.png";
        const layer6 = new Image();
        layer6.src = bgLayerSrc.current + "6.png";
        let x = 0;
        const animate = () => {
            if (canvasWidth && canvasHeight) {
                ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx?.drawImage(layer4, x, 0, canvasWidth, canvasHeight);
                ctx?.drawImage(layer4, x + canvasWidth, 0, canvasWidth, canvasHeight);
                ctx?.drawImage(layer5, x, 0, canvasWidth, canvasHeight);
                ctx?.drawImage(layer5, x + canvasWidth, 0, canvasWidth, canvasHeight);
                ctx?.drawImage(layer6, x, 0, canvasWidth, canvasHeight);
                ctx?.drawImage(layer6, x + canvasWidth, 0, canvasWidth, canvasHeight);
                if (x < -canvasWidth) {
                    x = 0;
                } else {
                    x -= 3;
                }
                requestId = requestAnimationFrame(animate);
            }
        };
        animate();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <div className="flex justify-center items-center w-full h-full">
            <canvas ref={canvasRef} className="border-black border" width={640} height={360} />
        </div>
    );
};

export default Parallax;
