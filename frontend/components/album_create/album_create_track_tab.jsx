import React from 'react';

const AlbumCreateTrackTab = ({
  trackFileName,
  setSelectedTabIndex,
  tabIndex,
}) => {
  return (
    <button
      type="button"
      className="album-create__track-tab"
      onClick={() => setSelectedTabIndex(tabIndex)}
    >
      <div className="album-create__track-num">{tabIndex}</div>
      <div className="album-create__track-description">
        <div className="album-create__track-name">Untitled Track</div>
        <div className="album-create__track-file-name">{trackFileName}</div>
      </div>
    </button>
  );
};

export default AlbumCreateTrackTab;
