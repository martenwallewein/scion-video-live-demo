import * as React from "react";
import {useEffect, useRef} from "react";
import videojs from "video.js";

const VideoJSPlayer = (props) => {
    const videoNode = useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,   
        fill: true,
        aspectRatio: "16:9",
    };

    useEffect(() => {

        if (!videoNode.current)
            return;

        // @ts-ignore
        window.videojs = videojs.default;
        const newPlayer = videojs(videoNode.current, videoJsOptions, function onPlayerReady() {
            console.log("Player ready");
        });

        return () => newPlayer.dispose();
    }, [props.source]);

    return (
            <div style={{width: "100%"}}>
                <div className="VideoPlayer">
                    <div data-vjs-player>
                        <video ref={videoNode}
                            className={`video-js vjs-big-play-centered`}>
                                    <source src={props.source.src} type={props.source.type}></source>
                        </video>
                    </div>
                </div>
            </div>
    );
};

export default VideoJSPlayer;
