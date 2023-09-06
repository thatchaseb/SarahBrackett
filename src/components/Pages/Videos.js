import React from 'react';
import ReactPlayer from 'react-player';

import { Element } from 'react-scroll'
import { Carousel } from 'react-responsive-carousel';

import { VideoLinks } from '../../edits';


const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer width="100%" url={url}  />
);
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

const getVideoId = (url) => url.substr('https://youtu.be/'.length, url.length);

const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img alt="Thumbnail" src={getVideoThumb(videoId)} />;
        });

class Videos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video1:  {
              "title": "Video Url 1",
              "url": `${VideoLinks[0]}`,
              "id": 1
            },
            video2: {
              "title": "Video Url 2",
              "url": `${VideoLinks[1]}`,
              "id": 2
            },
            video3: {
              "title": "Video Url 3",
              "url": `${VideoLinks[2]}`,
              "id": 3
            },
            video4: {
              "title": "Video Url 4",
              "url": `${VideoLinks[3]}`,
              "id": 4
            },
            video5: {
              "title": "Video Url 5",
              "url": `${VideoLinks[4]}`,
              "id": 5
            }
        };
    }
    
    render () {
        if (!this.state.video1 || !this.state.video2 || !this.state.video3 || !this.state.video4) {
          return <div>Loading..</div>;
        }

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
                    <YoutubeSlide key="youtube-1" url={this.state.video1.url} />
                    <YoutubeSlide key="youtube-2" url={this.state.video2.url} />
                    <YoutubeSlide key="youtube-3" url={this.state.video3.url} />
                    <YoutubeSlide key="youtube-4" url={this.state.video4.url} />
                    <YoutubeSlide key="youtube-5" url={this.state.video5.url} />
                </Carousel>
            </Element>
        );
    }
};

export default Videos;
