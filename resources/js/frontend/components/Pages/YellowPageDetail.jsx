import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiPhone, FiMapPin, FiMail, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import PhotoSlider from '../Comp/PhotoSlider';

const YellowPageDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  useEffect(() => {
    setListing(null);
    setNotFound(false);
    fetch(`/api/cms/yellow-pages/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error('not found');
        return r.json();
      })
      .then((data) => setListing(data))
      .catch(() => setNotFound(true));
  }, [id]);

  const photos = listing?.photos || [];

  if (notFound) {
    return (
      <div className="p-10 lg:p-28 text-center">
        <h1 className="font-headline text-3xl text-dark-blue mb-4">Listing not found</h1>
        <Link to="/yellow-pages" className="text-blue text-sm underline">
          Back to Yellow Pages
        </Link>
      </div>
    );
  }

  if (!listing) {
    return <div className="p-10 lg:p-28 text-center text-dark-text">Loading…</div>;
  }

  return (
    <div className="mx-6 my-8 lg:mx-24 lg:my-12">
      <Link to="/yellow-pages" className="inline-flex items-center gap-2 text-blue text-sm mb-6 hover:underline">
        <FiArrowLeft /> Back to Yellow Pages
      </Link>

      <PhotoSlider photos={photos} onOpen={setLightboxIdx} />

      <div className="mt-8">
        <span className="bg-blue/10 text-blue text-xs capitalize px-3 py-1 rounded-full">
          {listing.category}
        </span>
        <h1 className="font-headline text-3xl lg:text-5xl text-dark-blue mt-3">{listing.name}</h1>
      </div>

      <div className="max-w-3xl mt-6">
        <p className="text-dark-text leading-relaxed">{listing.description}</p>
      </div>

      <div className="flex flex-wrap gap-x-12 gap-y-6 mt-10 pt-8 border-t border-powder">
        <div className="flex items-start gap-3">
          <FiMapPin className="text-blue mt-1 flex-shrink-0" />
          <div>
            <p className="text-xs text-steel uppercase tracking-wide">Address</p>
            <p className="text-sm text-dark-text mt-1">{listing.address || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FiPhone className="text-blue mt-1 flex-shrink-0" />
          <div>
            <p className="text-xs text-steel uppercase tracking-wide">Phone</p>
            <p className="text-sm text-dark-text mt-1">{listing.phone || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FiMail className="text-blue mt-1 flex-shrink-0" />
          <div>
            <p className="text-xs text-steel uppercase tracking-wide">Email</p>
            <p className="text-sm text-dark-text mt-1">{listing.email || 'N/A'}</p>
          </div>
        </div>
      </div>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightboxIdx(null)}>
            <FiX className="text-3xl" />
          </button>

          {photos.length > 1 && (
            <button
              className="absolute left-4 md:left-10 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx - 1 + photos.length) % photos.length);
              }}
            >
              <FiChevronLeft className="text-4xl" />
            </button>
          )}

          <img
            src={photos[lightboxIdx]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {photos.length > 1 && (
            <button
              className="absolute right-4 md:right-10 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx + 1) % photos.length);
              }}
            >
              <FiChevronRight className="text-4xl" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default YellowPageDetail;
