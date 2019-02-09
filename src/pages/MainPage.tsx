import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Newsletter from '../components/Newsletter';


class MainPage extends React.Component<object, object> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
        <Header />
        <Main />
        <Newsletter />
        <Footer />
      </div>
    )
  }
}

export default MainPage;