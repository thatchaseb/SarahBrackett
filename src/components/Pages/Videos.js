import React from 'react';
import ReactPlayer from 'react-player';
import { VideoLinks } from '../../edits';

import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';

import { VideoLinks } from '../../edits';

<<<<<<< Updated upstream

const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" url={url}  />
=======
const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" url={url}  />
>>>>>>> Stashed changes
);
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

const getVideoId = (url) => url.substr('https://youtu.be/'.length, url.length);

<<<<<<< Updated upstream
const customRenderThumb = () =>
        VideoLinks.map((item) => {
            const videoId = getVideoId(item);
            return <img alt="Thumbnail" src={getVideoThumb(videoId)} />;
        });
=======
const customRenderThumb = (children) =>
children.map((item) => {
  const videoId = getVideoId(item.props.url);
  return <img alt="Thumbnail" src={getVideoThumb(videoId)} />;
});


>>>>>>> Stashed changes

const renderedVideos = VideoLinks.map((item, index) => {

  return (
  <YoutubeSlide key={index} url={item} />
  );
});

class Videos extends React.Component {
<<<<<<< Updated upstream

    
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
=======
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
        
          <YoutubeSlide key="youtube-1" url={VideoLinks[0]} />
          <YoutubeSlide key="youtube-2" url={VideoLinks[1]} />
          <YoutubeSlide key="youtube-3" url={VideoLinks[2]} />
          <YoutubeSlide key="youtube-4" url={VideoLinks[3]} />
          <YoutubeSlide key="youtube-5" url={VideoLinks[4]} />
        
        </Carousel>
      </Element>
    );
  }
>>>>>>> Stashed changes
};

export default Videos;
