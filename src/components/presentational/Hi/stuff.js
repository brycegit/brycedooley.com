import React from 'react';
import Loadable from 'react-loadable';

const LoadableHi = Loadable({
  loader: () => import(/* webpackChunkName: "Hi" */ './Hi'),
  loading: () => <div>Loading...</div>
});

LoadableHi.displayName = 'LoadableHi';

export default LoadableHi;
