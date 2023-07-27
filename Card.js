function Card(props){

    let badgeText
    if(props.openspots===0){
        badgeText= "Sold Out"
    }else if(props.location==="Online"){
        badgeText = "Online"
    }
    return(
        <div className="card">
            {
            badgeText && 
            <div className="card--badge">{badgeText}</div>
            }
            <img src={props.coverImg} className="card--image"></img>
            <div className="card--stats">
                <img src="star.png" className="card--star"></img>
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b>/person</p>
        </div>
    )
}

export default Card;