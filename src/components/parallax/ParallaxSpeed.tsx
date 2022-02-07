import { ParallaxSpeedProps } from "../../types/parallax-types";

const ParallaxSpeed = (props: ParallaxSpeedProps) => {
    return (
        <div className="absolute bottom-5">
            <p>Speed: {props.gameSpeed} </p>
            <input
                type="range"
                min={0}
                max={20}
                value={props.gameSpeed}
                onChange={props.handleSpeedChange}
                className="cursor-pointer"
            />
        </div>
    );
};

export default ParallaxSpeed;
