import fetch, { Response } from 'node-fetch';

export class RestManager {
    public Request(
        url: string
    ): Promise<Response> {
        return new Promise(async (resolve, reject) => {
            fetch(url)
                .then(
                    async res => {
                        resolve(res);
                    }
                )
                .catch(
                    e => {
                        reject(e);
                    }
                )
        })
    }
}