
type BlogsArticlesProps = {
    src:string;
    title:string;
    date: string;
    category: string;
}
export default function BlogsArticles ({src, title, date, category}:BlogsArticlesProps){

    return (
        <div className="article-container">
            <img src={src} alt="Articles for a workout" />
            <div className="article-details">
                <h4 className="yellow"> <i className="mx-1 fa-solid fa-tag"></i>{category}</h4>
                <h4 className='article-date'><i className="mx-1 fa-regular fa-calendar-days"></i>{date}</h4>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed earum dolorum temporibus beatae, tenetur aspernatur possimus, iure odio dicta itaque a delectus, provident unde deleniti harum quaerat? Pariatur, veritatis.</p>
            </div>
        </div>
    )
}