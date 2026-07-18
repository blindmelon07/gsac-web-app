import hero from '../../assets/hero.mp4';
import cover from '../../assets/cover.jpg'; // Path to your thumbnail image
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const Membership = () => {
  return (
    <div>
      <Video
        className="m-10 h-[80vh] rounded-2xl videoo"
        poster={cover}
        controls={false} // Hide controls by default
        onMouseEnter={(e) => e.target.controls = true} // Show controls on mouse enter
        onMouseLeave={(e) => {
          if (!e.target.paused) e.target.controls = false; // Hide controls on mouse leave if the video is playing
        }}
      >
        <source src={hero} type='video/mp4' />
      </Video>
    </div>
  );
};

export default Membership;
