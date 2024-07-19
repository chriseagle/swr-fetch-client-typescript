import type { Fetcher } from 'swr';

interface ErrorObj extends Error {
  info?: string;
  status?: number;
}

const API_URL = 'https://api.example.com';

const fetchClient = <T>(
  urlPath: `/${string}`,
  searchParams?: URLSearchParams,
  fetchOptions?: RequestInit | undefined,
) => {
  const params = new URLSearchParams(searchParams?.toString() ?? '');
	const url = new URL(`${API_URL}${urlPath}`);

  const fetcher: Fetcher<T, string> = async () => {
    const resp = await fetch(
      `${url.toString()}?${params.toString()}`,
      fetchOptions ?? {},
    );
    if (!resp.ok) {
      const error: ErrorObj = new Error(
        'An error occured while fetching data.',
      );
      error.info = await resp.json();
      error.status = resp.status;
      throw error;
    }
    return resp.json();
  };
  return fetcher;
};

export { fetchClient };
