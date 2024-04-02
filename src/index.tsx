import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './i18nextConf';
import App from './App';
import Spinner from './components/Spinner'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Suspense fallback={<Spinner />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
);
