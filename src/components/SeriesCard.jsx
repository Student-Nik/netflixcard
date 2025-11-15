export const SeriesCard = (props) => {

    const {id,img_url,name,rating,cast,genre,watch_url,description} = props.currElement;
    
    return (
        <li key={props.key}>
            <div>
              <img src={img_url} alt={name} width="40%"/>
            </div>
            <h2>Name:{name}</h2>
            <p>Rating: {rating}</p>
            <p>Description: {description}</p>
            <p>Cast: {cast}</p>
            <p>Genre: {genre}</p>
            <a href={watch_url}>
              <button>Watch Now</button>
            </a>
          </li>
    )
}