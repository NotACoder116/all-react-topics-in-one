import React, { useEffect, useState } from 'react'

const MouseMove = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-100">
            <div
                className="absolute bg-blue-500 rounded-full transition-transform"
                style={{
                    width: "50px",
                    height: "50px",
                    transform: `translate(${position.x-300}px, ${position.y}px)`,
                    position: "absolute",
                    transition: "transform 0.05s linear",
                }}
            ></div>
        </div>
  );
}

export default MouseMove