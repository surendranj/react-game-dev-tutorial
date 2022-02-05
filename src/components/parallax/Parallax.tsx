import { useRef } from "react";

const Parallax = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
    return (
        <div className="flex flex-col justify-center content-center items-center h-full w-full">
            <canvas></canvas>
        </div>
    );
};

export default Parallax;
