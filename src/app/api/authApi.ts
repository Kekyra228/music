export async function authorize(
  email: string,
  password: string,
  username: string
) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
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
