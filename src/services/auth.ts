import { api } from "./api";

interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}
type Request ={
    password:string;
    login:string;
}


export async function signIn(data :Request): Promise<Response> {
  return await api.post("/auth",data)
}