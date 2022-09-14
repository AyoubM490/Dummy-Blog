import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import fetchPosts from './actions';
import './App.scss';

const tempArr = [
  {
    id: 1,
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true,
  },
];

const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    const { fetchPosts } = this.props;
    fetchPosts();
    this.exampleMethodUpdatesState();
  }

  exampleMethodUpdatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }

  exampleMethodReturnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch,
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          {!hideBtn && <SharedButton {...configButton} />}
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

App.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};

export default connect(mapStateToProps, { fetchPosts })(App);
