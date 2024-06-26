export async function logon(login: string, password: string | number) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    }
  );
  if (response.status === 400) {
    throw new Error("Неверный пароль или логин");
  } else if (!response.ok) {
    throw new Error("Заполните поля");
  }
  const responseData = await response.json();
  return responseData;
}
