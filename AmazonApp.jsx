import reducer,{ initialState } from './Amazon-clone/Reducer';

import {StateProvider} from './Amazon-clone/StateProvider'
import AmazonHome from './AmazonHome';
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
        <AmazonHome />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);