export async function authorize(
  name: string,
  login: string,
  password: string | number
) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        name,
        login,
        password,
      }),
    }
  );
  if (response.status === 400) {
    throw new Error("Пользователь уже существует");
  } else if (!response.ok) {
    throw new Error("Заполните поля");
  }
  const responseData = await response.json();
  return responseData;
}
