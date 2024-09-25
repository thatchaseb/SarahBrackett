import React from 'react';
import ReactPlayer from 'react-player';
import { VideoLinks } from '../../edits';

import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';


const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer url={url}  />
);
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

const getVideoId = (url) => url.substr('https://youtu.be/'.length, url.length);

const customRenderThumb = () =>
        VideoLinks.map((item) => {
            const videoId = getVideoId(item);
            return <img alt="Thumbnail" src={getVideoThumb(videoId)} />;
        });

const renderedVideos = VideoLinks.map((item, index) => {

  return (
  <YoutubeSlide class="aspect-video h-full mx-auto" key={index} url={item} />
  );
});

class Videos extends React.Component {

    
    render () {
        

        return (
            <Element name="Reels" className="mt-12 max-w-7xl w-full mx-auto p-12">
                <div 
                    className="
                        font-Merriweather 
                        text-[4rem] lg:text-[5rem]
                        my-16 
                        text-navy
                    "
                >
                    Media
                </div>
                <Carousel autoplay={false} showStatus={false} showIndicators={false} renderItem={customRenderItem} renderThumbs={customRenderThumb}>
                    
                    {renderedVideos}
                </Carousel>
            </Element>
        );
    }
};

export default Videos;
