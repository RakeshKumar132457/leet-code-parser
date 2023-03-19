export const fetchQuestion = async (queryType) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
        "Cookie",
        "csrftoken=jYLtnLQ42AP5WHLopGkt1TXAldU5e2pA4wy6kzwRY5RdDfZ5X2ekIBLvI9HvVOFE"
    );

    const query = JSON.stringify({
        ...queryType,
    });

    const init = {
        method: "POST",
        headers: myHeaders,
        body: query,
        redirect: "follow",
    };

    const response = await fetch("https://leetcode.com/graphql", init);
    return response;
};
