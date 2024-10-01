const Homevideo = ({ controls = false, autoplay = true, loop = true, muted = true }) => {
    const videoSrc = `https://www.youtube.com/embed/CrrKpNnBOWk?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&controls=${controls ? 1 : 0}&mute=${muted ? 1 : 0}&playlist=CrrKpNnBOWk&vq=hd1080&cc_load_policy=0&modestbranding=1&rel=0`;

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
            <iframe
                src={videoSrc}
                frameBorder="0"
                allow="autoplay; loop; muted; fullscreen"
                allowFullScreen
                style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    width: '100vw', 
                    height: '56.25vw', 
                    transform: 'translate(-50%, -50%)', 
                    border: 'none' 
                }}
            ></iframe>
        </div>
    );
};

export default Homevideo;
