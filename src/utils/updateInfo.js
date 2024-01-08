export async function updateInfo(output, newUserName) {
    try {
        const requestBody = {
            userName: newUserName // Utilisation de la clé "userName" attendue par le serveur
        };
        const request = await fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'PUT',
            headers: { 
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${output}`
            },
            body: JSON.stringify(requestBody)
        });

        const response = await request.json();
        console.log(response)
        return response.status === 200;
    } catch (error) {
        console.error(`An error occurred while updating user info : ${error}`);
    }
}