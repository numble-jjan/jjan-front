import React from 'react';
import AppRouter from './AppRouter';
import { InterestedBarBox } from './@components';

function App() {
  return (
    <React.Fragment>
      <AppRouter />
      <InterestedBarBox
        style={{ width: '159px' }}
        BarName={'합정공간가나다라마바사아자차카'}
        BarType={'이자카야'}
        location={'서울 마포구 서교동가나다'}
      />
    </React.Fragment>
  );
}

export default App;
