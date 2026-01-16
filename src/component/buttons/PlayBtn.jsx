import { FaPlay } from "react-icons/fa"

function PlayBtn({ videoUrl }) {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center cursor-pointer"
    >
      {/* Pulse shadow */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>

      {/* Icon circle */}
      <div
        className="relative z-10 flex items-center justify-center 
        w-14 h-14 bg-white rounded-full 
        shadow-[0_0_0_3px_rgba(255,255,255,0.6)]"
      >
        <FaPlay className="text-2xl text-orange-600 ml-1" />
      </div>
    </a>
  )
}

export default PlayBtn
