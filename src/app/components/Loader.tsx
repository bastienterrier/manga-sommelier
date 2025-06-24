import React from "react";

const LoaderStyles = () => (
  <style>{`
    .seal-svg {
        transform-origin: center;
    }

    .seal-ring {
        fill: none;
        stroke-width: 3;
        stroke: #6366f1;
        transform-origin: center;
    }

    @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @keyframes spin-reverse {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
    }
    
    @keyframes draw-in {
        0% {
            stroke-dashoffset: var(--stroke-length);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }
    
    .seal-svg #ring1 {
        stroke: #818cf8;
        animation: spin-slow 12s linear infinite, draw-in 3s ease-out forwards;
    }

    .seal-svg #ring2 {
        animation: spin-reverse 8s linear infinite, draw-in 3s ease-out 0.2s forwards;
    }

    .seal-svg #ring3 {
         stroke-width: 2;
         stroke: #4f46e5;
         animation: spin-slow 15s linear infinite, draw-in 3s ease-out 0.4s forwards;
    }

    @keyframes subtle-glow {
        0%, 100% {
            box-shadow: 0 0 50px rgba(79, 70, 229, 0.25), inset 0 0 15px rgba(79, 70, 229, 0.1);
        }
        50% {
            box-shadow: 0 0 55px rgba(79, 70, 229, 0.35), inset 0 0 20px rgba(79, 70, 229, 0.15);
        }
    }
    
    .loader-box {
        animation: subtle-glow 5s ease-in-out infinite;
    }
    
    .text-container span {
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        animation: fade-text 12s linear infinite;
    }
    
    @keyframes fade-text {
        0% { opacity: 0; transform: translateY(5px); }
        10% { opacity: 1; transform: translateY(0); }
        30% { opacity: 1; transform: translateY(0); }
        40% { opacity: 0; transform: translateY(-5px); }
        100% { opacity: 0; }
    }
  `}</style>
);

interface LoaderProps {
  messages: string[];
  heading: string;
}

const Loader: React.FC<LoaderProps> = ({ messages = [], heading }) => {
  const messageDuration = 3;
  const totalAnimationTime = messages.length * messageDuration;

  return (
    <>
      <LoaderStyles />
      <div className="loader-box bg-gray-800/50 p-12 rounded-2xl flex flex-col items-center gap-8 shadow-2xl">
        <svg className="seal-svg w-32 h-32" viewBox="0 0 100 100">
          <circle
            id="ring1"
            className="seal-ring"
            cx="50"
            cy="50"
            r="45"
            pathLength="100"
            style={
              {
                "--stroke-length": 100,
                strokeDasharray: 100,
              } as React.CSSProperties
            }
          ></circle>
          <circle
            id="ring2"
            className="seal-ring"
            cx="50"
            cy="50"
            r="35"
            pathLength="100"
            style={
              {
                "--stroke-length": 100,
                strokeDasharray: "5 5",
              } as React.CSSProperties
            }
          ></circle>

          <circle
            id="ring3"
            className="seal-ring"
            cx="50"
            cy="50"
            r="25"
            pathLength="100"
            style={
              {
                "--stroke-length": 100,
                strokeDasharray: 100,
              } as React.CSSProperties
            }
          ></circle>
        </svg>

        <div className="text-center">
          <p className="font-semibold text-lg text-white">{heading}</p>
          <div className="text-container relative h-6 mt-1 text-gray-400 text-sm w-72">
            {messages.map((msg, index) => (
              <span
                key={index}
                style={{
                  animationName: "fade-text",
                  animationDuration: `${totalAnimationTime}s`,
                  animationDelay: `${index * messageDuration}s`,
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                }}
              >
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
