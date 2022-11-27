import { IAuthData } from "@/services/auth/auth.helper";
// import { useTypedSelector } from "./useTypesSelector";


export const useAuth = (): IAuthData => ({
    user: null,
    accessToken: ''
})