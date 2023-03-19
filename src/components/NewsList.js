import React, { useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import {useState} from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
box-sizing: border-box;

padding-bottom: 3rem;

width: 768px;

margin: 0 auto;

margin-top: 2rem;

@media screen and (max-width: 768px) {

width: 100%;
padding-left: 1rem;
padding-right: 1rem;

}
`

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'http://ggoreb.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = ({category}) => {
    // api로 호출한 기사 리스트를 담을 State
    const [articles, setAticles] = useState([]);
    // 로딩 여부를 보여줄 State
    const [loading, setLoading] = useState(true);

    const fetchData = async () =>{
        try {
            const query = category === 'all' ? '' : `&category=${category}`;
            const res = 
            await 
            axios
            .get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=a8f0d4f98b2f4e60847d990ca71a8503${query}`)
            setAticles(res.data.articles);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(()=>{    

    fetchData();

    },[category])

    if(loading) return <NewsListBlock>로딩 중...</NewsListBlock>
    // api에 기사가 없다면
    if(!articles) return null;

    return (
       <NewsListBlock>
            {articles.map(article => {
                return <NewsItem key={article.url} article={article} />;
            })}
       </NewsListBlock>
        );
}
export default NewsList;



