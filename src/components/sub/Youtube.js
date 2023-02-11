import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { useEffect, useState } from 'react';
import axios from 'axios';

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [popup, setPopup] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const key = 'AIzaSyBjrOKaWRkP5g3P8aW1QsSd1bpFDhUKVZk';
    const playlistId = 'PLR22mOC3bZYoRxVtcK0_J5EOkq7SK9Tv9';
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

    axios.get(url).then((json) => {
      setVideos(json.data.items);
    });
  }, []);

  const onPopup = (index) => {
    setPopup((prev) => !prev);
    setIndex(index);
  };

  return (
    <>
      <Layout name={'youtube'}>
        <div className='videosWrap'>
          {videos.map((video, index) => {
            const idx = (index + 1).toString();

            return (
              <article key={index} onClick={() => onPopup(index)}>
                <h2>{`salt aewol #${idx.length < 2 ? idx.padStart(2, '0') : idx
                  }`}</h2>
                <div className='pic'>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                  />
                </div>
                <div className='desc'>
                  <p>{idx.length < 2 ? idx.padStart(2, '0') : idx}</p>
                  <span>{video.snippet.publishedAt.split('T')[0]}</span>
                </div>
              </article>
            );
          })}
        </div>
      </Layout>

      {popup ? (
        <Popup setPopup={setPopup}>
          <iframe
            src={`https://www.youtube.com/embed/${videos[index].snippet.resourceId.videoId}`}
            frameBorder='0'></iframe>
        </Popup>
      ) : null}
    </>
  );
}

export default Youtube;