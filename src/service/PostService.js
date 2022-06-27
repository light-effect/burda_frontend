export default class PostService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async createPost(post) {
        const response = await this.httpClient.post('/api/posts', post);

        return response.status === 201;
    }

    async getPosts() {
        const response = await this.httpClient.get('/api/posts');

        return response.data;
    }
}