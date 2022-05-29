import VideoJS from "./components/Animation/VideoJS";
import video from './Data/videos/BFS.mp4';

const Anime = () => {
    const videoJsOptions = {
        controls: true,
        sources: [{
            src: video,
            type: 'video/mp4'
        }]
    }
    return(
        <div>
            <VideoJS options={videoJsOptions} />
        </div>
    );
}

export default Anime;