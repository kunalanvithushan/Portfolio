import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.tsx';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Place this outside the Layout route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
