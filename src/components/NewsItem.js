import NewsItemBlock from "./NewsItemBlock";


function NewsItem({article}){

    const {title, description, url} = article;

    return(
        <NewsItemBlock>
            <div className="thumbnail">
                <a href={url} target="_blank">
                    <img src='https://placeimg.com/64/64/any' alt="thumbnail" />
                </a>
            </div>
            <div className="contents">
            <h2>
                <a href={url} target="_blank">
                {title}
                </a>
            </h2>
            {/* 현재 api에서 description의 값이 null 표기됨 */}
            <p>{description}</p>
            </div>
        </NewsItemBlock>
    )



}


export default NewsItem;