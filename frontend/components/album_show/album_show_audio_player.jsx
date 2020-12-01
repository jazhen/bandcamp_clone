import React from 'react';
import { Link } from 'react-router-dom';
import AlbumShowDiscography from './album_show_discography';
import AudioPlayer from './audio_player';

const AlbumShowAudioPlayer = ({ user, albums, tracks, albumId }) => {
  const album = albums[albumId];

  if (!user) {
    return null;
  }

  return (
    <div className="album-player">
      <div className="album-player__container">
        <div className="album-player__art-container">
          <img
            id="album-player__art"
            className="album-player__art"
            src={album.artUrl}
            alt="album art"
          />
        </div>

        <div className="album-player__metadata">
          <div className="album-player__metadata-container">
            <span className="album-player__title">
              {album.name}
              <span className="album-player__title-nbsp">&nbsp;</span>
            </span>
            <div className="album-player__artist-container">
              <span>by&nbsp;</span>
              <Link to={`/users/${user.id}`} className="album-player__artist">
                {user.band}
              </Link>
            </div>
          </div>
          <AudioPlayer album={album} tracks={tracks} />
        </div>

        <div className="album-player__sidebar">
          <div className="album-player__artist-name">
            <Link to={`/users/${user.id}`}>{user.band}</Link>
          </div>
          <AlbumShowDiscography albums={albums} albumIds={user.albumIds} />
        </div>
      </div>
    </div>
  );
};

export default AlbumShowAudioPlayer;