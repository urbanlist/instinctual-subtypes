import * as React from 'react';
import MainContainer from './MainContainer';


class MainPage extends React.Component<object, object> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer/>
      </div>
    )
  }
}

export default MainPage;