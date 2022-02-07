import { useEffect, useRef } from "react";

const useCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctx = useRef<CanvasRenderingContext2D | null>(null);
    const canvasWidth = useRef<number | null>(null);
    const canvasHeight = useRef<number | null>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            ctx.current = canvas.getContext("2d");
            canvasWidth.current = canvas.width;
            canvasHeight.current = canvas.height;
        }
    });

    return { canvasRef, ctx, canvasWidth, canvasHeight };
};

export default useCanvas;
