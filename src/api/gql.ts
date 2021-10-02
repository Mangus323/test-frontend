import {createClient, fetchExchange} from "urql";

console.log(process.env.API_URL);

const client = createClient({
    url: process.env.API_URL || "http://localhost:3000/graphql",
    fetchOptions: () => {
        return {
            headers: {
                authorization: "IYE6DnRXyKs6hQAcFb2hNLCwg0QvP6NW"
            },
            exchanges: [fetchExchange],
        }
    }
});

export default client;
