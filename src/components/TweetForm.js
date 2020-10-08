import React, { useState } from "react";
import { dbService } from "../firebase";

export default () => {
	const [tweet, setTweet] = useState("");

	const onChange = (event) => {
		const { value } = event.target;
		setTweet(value);
	};

	const tweetSubmit = async (event) => {
		event.preventDefault();
		const collection = await dbService.collection("tweets");
		await collection.add({
			tweet,
			createdAt: Date.now(),
		});
		setTweet("");
	};

	return (
		<form onSubmit={tweetSubmit}>
			<input
				name="tweetForm"
				type="text"
				maxLength={120}
				value={tweet}
				onChange={onChange}
			/>
			<input type="submit" value="Tweet" />
		</form>
	);
};
