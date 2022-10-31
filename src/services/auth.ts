import api from "./api";

interface IResponse {
    data: {
        token: string;
        user?: {
            name: string;
            email: string;
        };
    }
}
interface IRequest {
    password: string;
    email: string;
}


export async function signIn(data: IRequest): Promise<IResponse> {
    return api.post("/Auth", data)
}