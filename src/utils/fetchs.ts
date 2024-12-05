import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_API_URL;

export async function getUser() {
  const token = Cookies.get("martyrToken"); 
  
  if (token) {
    const res = await fetch(`${apiUrl}/api/user/GetUserInfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  }
}
export async function getUsers() {
  const token = Cookies.get("martyrToken"); 
  
  if (token) {
    const res = await fetch(`${apiUrl}/api/UserManagementControler/GetAll`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  }
}
export async function getSms() {
  const token = Cookies.get("martyrToken"); 
  
  if (token) {
    const res = await fetch(`${apiUrl}/api/SmsTemplate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  }
}
