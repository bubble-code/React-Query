import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        Authorization: "Bearer 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",
        // Authorization: `token ${process.env.GITHUB_TOKEN}`, 
    }
});