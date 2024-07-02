type SignUpFormTypes = {
  email: string;
  password: string;
  username: string;
};

export async function authorize({
  email,
  password,
  username,
}: SignUpFormTypes) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("Заполните поля");
  } else if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (!response.ok) {
    throw new Error("Пользователь уже существует");
  }
  const responseData = await response.json();
  return responseData;
}
