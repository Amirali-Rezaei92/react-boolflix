import { getFlag } from "../utils/getFlag";

function Card({ item }) {

    const imageUrl = item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : "https://via.placeholder.com/300x450?text=No+Image";


        return (
            <div className="card form-control">
                <img src={imageUrl} alt="" />
                <h4>{item.title || item.name}</h4>
                <p>{item.vote_average}</p>
                <p>Language : {getFlag(item.original_language)} </p>
            </div>
        )
    }
    export default Card;