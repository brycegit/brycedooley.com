import React from 'react';
import Loadable from 'react-loadable';

const LoadableBye = Loadable({
  loader: () => import(/* webpackChunkName: "Bye" */ './Bye'),
  loading: () => <div>Loading...</div>
});

LoadableBye.displayName = 'LoadableBye';

export default LoadableBye;