import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Heroes, Layout} from '@/components';
import {Home} from '@/pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
