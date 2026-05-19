import  getFlag  from "../utils/getFlag";
import GetPosterUrl from "../utils/getPosterUrl";
import getStars from "../utils/getStars";


function Card({ item }) {



    const imageUrl = GetPosterUrl(item.poster_path);
    const rate = getStars(item.vote_average);




    return (
        <div className="card form-control">
            <img src={imageUrl} alt="" />
            <h4>{item.title || item.name}</h4>
            <p>{item.vote_average}</p>
            <p>Language : {getFlag(item.original_language)} </p>
            <h2>{rate}</h2>

        </div>
    )
}
export default Card;