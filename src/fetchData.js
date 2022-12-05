export const fetchQuestion = async (queryType) => {
	// console.log(`Fetching daily coding challenge from LeetCode API.`);
	const query = JSON.stringify({
		...queryType,
	});

	const init = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: query,
	};

	const response = await fetch(process.env.LEETCODE_API_ENDPOINT, init);
	return response.json();
};
