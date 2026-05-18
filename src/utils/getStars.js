function getStars(vote) {
    const fullStars=Math.floor(vote / 2);
    const emptyStars = 5-fullStars;
    
    let stars = "";
    for (let i = 0; i < fullStars; i++) {
        stars += "⭐";
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += "☆";
    }

    return stars;
    
}
export default getStars;