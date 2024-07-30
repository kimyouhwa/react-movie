import './Detail.css';
import {useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';// HTTP요청을 보내기 위해 axios 라이브러리가져오기  
export function Detail(){
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(null);//영화 정보 와 업데이트 정보 
  const [error, setError] = useState(null);//오류 상태를저장 하기 위한 함수 
  const location = useLocation(); //현재 URL정보를 얻기 위한 useLocation hook 사용
  const navigate = useNavigate(); //페이지 이동을 위한 useMavigate hook사용

  //id값 구하기
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');  //

  const fetchMovies = async ()=>{
    try{
      console.log('fetchMovies 호출');
      const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      console.log(response);    
      setInfo(response.data.data.movie);  
      setIsLoading(false); // 로딩 완료
    } catch (err){
      setError(err);
    }
    // setIsyLoading(false);  
  }
  useEffect(
    ()=>{     
      console.log('useEffect발생');
      fetchMovies();   
    },[info]
  );

  if(error){
    return (
      <div>Error: {error.message} </div>
    );
  }

  return(
    <div className = 'detail'>
      {isLoading? (
        <div className='loader'>
          <span className='loader_text'>Loading...</span>
        </div>
      ):(
        <>
        <img src={info.medium_cover_image}/>
        <h2>{info.title}({info.year})</h2>
        <p>{info.description_full}</p>
        <ul>
          {
            info.genres.map(
              (item,index) => {
                return(
                  <li key={index}>{item}</li>
                )
              }
            )
          }
        </ul>
        </>
      )}




    </div>
  );
}