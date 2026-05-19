import getFlag from "../utils/getFlag";
import GetPosterUrl from "../utils/getPosterUrl";
import getStars from "../utils/getStars";
import '../style/Card.css'
import { useState } from "react";
import { getMovieCast, getSeriesCast } from "../utils/tmdb";


function Card({ item }) {
    const [cast, setCast] = useState([]);
    const [open, setOpen] = useState(false);

    const imageUrl = GetPosterUrl(item.poster_path);
    const rate = getStars(item.vote_average);

    const handleShowCast = () => {
        if (open) {
            setOpen(false);
            return;
        }
        if (item.title) {
            getMovieCast(item.id).then((data) => {
                setCast(data.cast.slice(0, 5));
                setOpen(true);
            });
        } else {
            getSeriesCast(item.id).then((data) => {
                setCast(data.cast.slice(0, 5));
                setOpen(true);
            });
        }


    }

    return (
        <div className=" card form-control backGround">
            <img className="m-1 p-2 rounded-4 " src={imageUrl} alt="" />
            <div className="heightSize">
                <h4 className="heightH4">{item.title || item.name}</h4> <hr />
                <p>{item.vote_average}</p>
                <p>Language : {getFlag(item.original_language)} </p>
                <h2>{rate}</h2>
            </div>

            <button className="btn btn-custom border-black" onClick={handleShowCast}>
                {open ? "Hide Cast ⬆" : "Show Cast ⬇"}
            </button>
            {open && (
                <div>
                    <h3>Cast</h3>
                    {cast.map(actor => (
                        <p key={actor.id}>{actor.name}-{actor.character}</p>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Card;