import { RestManager } from "./RestManager";

const Rest = new RestManager();

class Client {
    /**
     * The main endpoint for the server.
     */
    protected EndPoint: string;

    constructor(EndPoint: string) {
        this.EndPoint = EndPoint;
    }
}