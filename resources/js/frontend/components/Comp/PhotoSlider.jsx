import { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';

const SWIPE_THRESHOLD = 45;

const PhotoSlider = ({ photos, onOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const goTo = (i) => setActiveIndex((i + photos.length) % photos.length);
  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'ArrowRight') next();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  if (photos.length === 0) {
    return (
      <div className="w-full h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl bg-powder/40 flex items-center justify-center">
        <FiImage className="text-steel text-5xl" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden shadow-md bg-powder/20 outline-none focus-visible:ring-2 focus-visible:ring-blue"
        tabIndex={0}
        role="group"
        aria-label={`Photo gallery, ${photos.length} photos`}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-400 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {photos.map((url, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 cursor-pointer" onClick={() => onOpen(activeIndex)}>
              <img src={url} alt="" className="w-full h-full object-cover" draggable={false} />
            </div>
          ))}
        </div>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white shadow-md flex items-center justify-center text-dark-blue transition-colors"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white shadow-md flex items-center justify-center text-dark-blue transition-colors"
            >
              <FiChevronRight className="text-xl" />
            </button>
            <span className="absolute top-3 right-3 bg-black/55 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
              {activeIndex + 1} / {photos.length}
            </span>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {photos.map((url, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => goTo(i)}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeIndex ? 'border-blue ring-2 ring-blue/30' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoSlider;
