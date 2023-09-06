import React from 'react';
import ReactPlayer from 'react-player';

import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';

import { VideoLinks } from '../../edits';


const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" url={url}  />
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
  <YoutubeSlide key={index} url={item} />
  );
});

class Videos extends React.Component {

    
    render () {
        

        return (
            <Element name="Reels" className="mt-12 mx-20 md:mx-32 lg:mx-48 xl:mx-64">
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
