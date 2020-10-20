import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';
import UserShowAlbums from './user_show_albums';

const mapStateToProps = ({ entities: { users, albums } }, ownProps) => {
  // debugger;
  const user = users[ownProps.match.params.userId];
  const panes = [
    { title: 'collection', content: 'collection pane content' },
    { title: 'following', content: 'following pane content' },
    { title: 'albums', content: <UserShowAlbums user={user} /> },
  ];

  return {
    user: users[ownProps.match.params.userId],
    albums,
    panes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
