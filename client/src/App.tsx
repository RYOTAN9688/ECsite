import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';
import Routes from './Routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
