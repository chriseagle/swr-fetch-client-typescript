# swr-fetch-client-typescript

A typescript fetch client to use with [swr](https://swr.vercel.app/)

`const { data, error, isLoading } = useSWR('/api/user', fetchClient<YourResponse>('/some-path'));`