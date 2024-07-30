// 2.JSON파일읽어오기
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  //상태변수를 설정
  const [isLoading, setIsyLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  const [movies, setMovies] = useState(null);

  const fetchMovies = async ()=>{
    console.log('fetchMovies 호출');
    const response = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(response.data.data.movies);    
    setMovies(response.data.data.movies);  
    setIsyLoading(false);  
  }
  useEffect(
    ()=>{     
      console.log('useEffect발생');
      fetchMovies();     

    },[loadCounter]

  );

  function displayMovies(){
    return (
      <div>
        <h1>Movie List2</h1>
        <ul>
          {
            movies.map(item =>{
              return  <li key={item.id}>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
  }

  return (
    <div >
      {isLoading? `Loading... ${loadCounter}`: displayMovies() }
    </div>
  );
}

export default App;