import { baseUrl } from "../variables.js";
import { screen } from "../objects/screen.js"

async function getUser(userName) {
    const url = `${baseUrl}/${userName}`
    const response = await fetch(url);
    const user = await response.json();

    if(user.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    return user
};
export { getUser };