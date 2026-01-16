import { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";
import PlayBtn from "../../../../component/buttons/PlayBtn";

Modal.setAppElement("#root");

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECTION */}
      <div
        className="relative h-[450px] md:h-[350px] bg-center bg-cover bg-fixed flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/assets/lounch.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Play Button */}
        <button
          onClick={() => setOpen(true)}
          className="relative z-0 w-20 h-20 rounded-full bg-white flex items-center justify-center 
          shadow-xl hover:scale-110 transition duration-300 group"
        >{/* Pulse shadow */}
      <span className="absolute inline-flex h-4/6 w-4/6 rounded-full bg-white opacity-75 animate-ping"></span>

      {/* Icon circle */}
      <div
        className="relative z-10 flex items-center justify-center 
        w-14 h-14 bg-white rounded-full 
        shadow-[0_0_0_3px_rgba(255,255,255,0.6)]"
      >
        <FaPlay className="text-2xl text-orange-600 ml-1" />
      </div>
        </button>
      </div>

      {/* VIDEO MODAL */}
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="fixed inset-0 flex items-center justify-center px-4"
        overlayClassName="fixed inset-0 bg-black/80"
      >
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-3 text-white text-3xl z-10"
          >

            &times;
          </button>
        </div>
      </Modal>
    </>
  );
};

export default VideoSection;
