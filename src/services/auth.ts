import { handleErrors } from "../errors/errorHandler";
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
interface IRequestSignIn {
    password: string;
    email: string;
}

interface IRequestSignUp {
    firstName: string;
    lastName: string;
    ddd: string;
    phoneNumber: string;
    password: string;
    email: string;
    roles: number;
}

export async function signIn(data: IRequestSignIn): Promise<IResponse> {
    return api.post("/Auth", data)
}

export async function signUp(data: IRequestSignUp) {
    try {
        return api.post("/User", data)
    } catch (error) {
        handleErrors(error)
    }
}