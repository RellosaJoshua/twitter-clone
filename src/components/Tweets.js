import React, { useEffect, useState } from "react";
import { dbService } from "../firebase";

export default () => {
	const [tweets, setTweets] = useState([]);

	const getTweets = async () => {
		const getTweets = await dbService.collection("tweets").get();

		getTweets.forEach((document) => {
			const tweet = {
				id: document.id,
				...document.data(),
			};

			setTweets((prev) => [tweet, ...prev]);
		});
	};

	useEffect(() => {
		getTweets();
	}, []);

	console.log(tweets);

	return (
		<div className="tweets-container">
			{tweets.map((tweet) => (
				<div key={tweet.id} className="tweet">
					{tweet.tweet}
				</div>
			))}
		</div>
	);
};
