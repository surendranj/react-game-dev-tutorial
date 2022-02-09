import { useEffect, useRef } from "react";

const useImage = (imageSrc: string) => {
    const newImage = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        newImage.current = new Image();
        newImage.current.src = imageSrc;
    });
    return { newImage };
};

export default useImage;
