import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
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

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
