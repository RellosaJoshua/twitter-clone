import React from "react";
import TweetForm from "../components/TweetForm";
import Tweets from "../components/Tweets";

export default () => {
	return (
		<div className="home">
			<TweetForm />
			<Tweets />
		</div>
	);
};
