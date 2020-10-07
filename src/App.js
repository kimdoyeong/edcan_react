import React, { useRef, useState } from "react";
import video from "./video.mp4";

function App() {
  const ref = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  function play() {
    if (!ref.current) return;
    ref.current.play();
  }
  function pause() {
    if (!ref.current) return;
    ref.current.pause();
  }
  return (
    <div>
      <video
        src={video}
        style={{ width: "100%", maxWidth: 540 }}
        ref={ref}
        onDurationChange={() => {
          ref.current && setDuration(ref.current.duration);
        }}
        onTimeUpdate={() => {
          ref.current && setCurrentTime(ref.current.currentTime);
        }}
      />
      <div>
        <button onClick={play}>재생</button>
        <button onClick={pause}>정지</button>
        <button>반복</button>
      </div>
      <div>
        {currentTime}/{duration}
      </div>
    </div>
  );
}

export default App;
