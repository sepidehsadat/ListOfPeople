import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});
const server = {
	get: (url: string) => instance.get(url).then(),
	// post: (url: string, body: {}) => instance.post(url, body).then(),
	// put: (url: string, body: {}) => instance.put(url, body).then(),
	// delete: (url: string) => instance.delete(url).then(),
};

export const requests = {
	getData: (): Promise<any> => server.get(`posts`),
};
