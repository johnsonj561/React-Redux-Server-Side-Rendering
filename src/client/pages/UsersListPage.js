import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';


class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () => {
    return this.props.users.map(user => (
      <li key={user.id}>
        {user.name}
      </li>
    ));
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        List of users!
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
  fetchUsers
};


function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(UsersList),
}
