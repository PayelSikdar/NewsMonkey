import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const pageSize=5;
  const apiKey = process.env.REACT_APP_NEWS_API
  console.log(apiKey)
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar progress={progress} height={3}/> 
        <Routes>
        <Route exact path="/" element={<News key="general" apiKey={apiKey} setProgress={setProgress} category="general" pageSize={pageSize} country="in"/>}/>
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} setProgress={setProgress} category="business" pageSize={pageSize} country="in"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} setProgress={setProgress} category="entertainment" pageSize={pageSize} country="in"/>}/>
          <Route exact path="/general" element={<News key="general"apiKey={apiKey} setProgress={setProgress}  category="general" pageSize={pageSize} country="in"/>}/>
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} setProgress={setProgress} category="health" pageSize={pageSize} country="in"/>}/>
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} setProgress={setProgress} category="science" pageSize={pageSize} country="in"/>}/>
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} setProgress={setProgress} category="sports" pageSize={pageSize} country="in"/>}/>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} setProgress={setProgress} category="technology" pageSize={pageSize} country="in"/>}/>
        </Routes>
    </Router>
     
    </div >
  );
}

export default App;
