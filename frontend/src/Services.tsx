import axios from "axios";


const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    auth:{
        username: process.env.REACT_APP_GLOBAL_USERNAME!,
        password: process.env.REACT_APP_GLOBAL_PASSWORD!
    }
})


// All Foods List
export const allFoodsList = () => {
    return axiosConfig.get("foods/list");
}

// user and admin 
export const userAndAdminLogin = ( email:string, password: string ) => {
    
    const conf = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        auth: {
            username: email,
            password: password
        }
    })
    const params = {
        email: email
    }
    return conf.post("register/login", {} , {params: params})

}

// user and admin logout
export const logout = () => {
    return axiosConfig.get("register/userLogOut");
}

// user register
export const userRegister = ( name:string, surname:string, cityid:number, mobile:string, email:string, password: string ) => {

    const params = {
        "name": name,
        "surname": surname,
        "cityid": cityid,
        "mobile": mobile,
        "email": email,
        "password": password,
        "enabled": true,
        "tokenExpired": true,
        "roles": [
            { "rid": 0, "name": "role_user" }
        ]
    }
    return axios.post( process.env.REACT_APP_BASE_URL+"/register/userRegister", params )

}