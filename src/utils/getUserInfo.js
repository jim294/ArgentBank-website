export const getUserInfo = async (output) => {
    try {
        const request = await fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${output}`
            }
        });

        const response = await request.json();
        return response.status === 200 ? response : alert("wrong Username or Password");
    } catch(error) {
        console.error(`An error has occurred while retrieving user information : ${error}`);
    }
}