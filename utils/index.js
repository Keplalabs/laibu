import jwtDecode from "jwt-decode";

export async function validateToken(token){
    const data=await jwtDecode(token)
    let now=parseInt(Date.now().toString().slice(0,-3))
    if (now <data.exp){
        return true
    }
    return false
}
