import React, { useEffect, useState } from 'react'
import axios from 'axios';



const NewsFeed=()=> {
  const [NewsArticles, setNewsArticles] = useState(null)
  useEffect(()=>{

    const options = {
      method: 'GET',
      url: 'https://real-time-news-data.p.rapidapi.com/top-headlines',
      params: {country: 'US', lang: 'en'},
      headers: {
        'X-RapidAPI-Key': process.env.Process_ID_NewsFeed,
        'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
      }
    };
    
    axios.request(options).then((response)=> {
      console.log(response.data)
      setNewsArticles(response.data)
    }).catch((error) =>{
      console.error(error);
    });
    })

    console.log('bhai dikh rah hai', NewsArticles)
    // const first10Articles=NewsArticles?.slice(0, 10)
  return (
    <div className='news-feed'>
     <h2> NewsFeed</h2> 
     {/* {first10Articles.map((article, _index)=>(<div key={_index}><a href={article.url}> <p>{article.title}</p></a> </div>))} */}
    </div>
  )
}

export default NewsFeed
