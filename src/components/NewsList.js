import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NewsItem from "./NewsItem";
import axios from "axios";


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
`;

//테스트 더미 데이터
// const dummyArticle = {
//     title:'제목',
//     description:'내용',
//     url:'https://google.com',
//     urlToImage:'https://via.placeholder.com/160'
//
//
// }

function NewsList(   {category} ) {


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    //최초 렌더링 시 한번만 실행

    useEffect(() => {
//async/ await 메소드 선언
        const loadData = async () => {
            setLoading(true);
            try {

                const data = category==='all' ? '' : `&category=${category}`;

                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${data}&apiKey=88c4d6b7a8d44f45bc448ae3c107dfa7`);
                setArticles(() => response.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        loadData();
    }, [category]);

    if (loading) {
        return <NewsListBlock> 로딩중...</NewsListBlock>
    }
    //articles의 값이 없을 때
    if (!articles) {
        return null;
    }
    return (
        <div>
            <NewsListBlock>
                {articles && articles.map(
                    article=>(
                        <NewsItem key={article.url} article={article}></NewsItem>
                    )
                )}
            </NewsListBlock>
        </div>
    );
}
export default NewsList;
