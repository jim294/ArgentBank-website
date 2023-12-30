// // Utilisation simulée du token pour récupérer les infos utilisateur
// import { token } from

// export const getUserInfo = async (token) => {
//     try {
//         // Ici, vous feriez une requête à votre API avec le token pour obtenir les informations de l'utilisateur
//         // Par exemple :
//         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });

//         if (response.ok) {
//             const userInfo = await response.json();
//             return userInfo;
//         } else {
//             throw new Error('Erreur lors de la récupération des informations utilisateur');
//         }
//     } catch (error) {
//         console.error('Erreur:', error);
//         throw error;
//     }
// };