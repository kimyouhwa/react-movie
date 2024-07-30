// 3.Router적용
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'; //홈페이지 내용표시 
import { About } from './pages/About'; // 어바웃페이지 내용표시
import { Detail } from './pages/Detail'; // 상세페이지 정보 
import{ Navigation } from'./components/Navigation'; // 네비게이션 컴포넌트 >>네비바를 통해 페이지간 이동 
function App() {

  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>  */경로가 홈경로 일때'/'홈 컴포넌트 랜더링 /*'
      <Route path="/about" element={<About/>}/>
      <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;