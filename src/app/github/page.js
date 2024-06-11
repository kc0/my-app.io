'use client'

import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res)=>res.json());

export default function GithubProfile() {
    const myGithubRepoProfile = "https://api.github.com/repos/kc0/my-app.io"
    const {data, error, isLoading} = useSWR(myGithubRepoProfile, fetcher)
    if (error) return "An error happened"
    if (isLoading) return "Loading..."

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <br></br><span>Subscriber count </span><strong>😀 {data.subscribers_count}</strong>{" "}<br></br>
            <span>Stargazers count </span><strong>🤩 {data.stargazers_count}</strong>{" "}<br></br>
            <span>Forks count </span><strong>🧐 {data.forks_count}</strong>
        </div>
    )
}