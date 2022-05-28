import React from "react";
import Date from "./Date";
import Button from "./Button";
import Cardname from "./Cardname";
import Facility from "./Facility";


const Card = ({ imgSrc, date, cardname, facility}) => {
	return (
		<>
			<div>
				<Date date={date} />
				<Button />
				<Cardname cardname={cardname} />
				<Facility facility={facility} />
			</div>
			<div>
				<img src={imgSrc} />
				<b style={{ fontSize: "30px" }}>{">"}</b>
			</div>
		</>
	);
};

export default Card;
