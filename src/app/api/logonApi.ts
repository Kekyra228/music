type SigninFormTypes = {
  email: string;
  password: string;
};

export async function fetchUser({ email, password }: SigninFormTypes) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("Заполните поля");
  } else if (response.status === 401) {
    throw new Error("Неверный пароль или логин");
  }
  const responseData = await response.json();
  return responseData;
}

export async function fetchTokens({ email, password }: SigninFormTypes) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("Неверный токен");
  } else if (!response.ok) {
    throw new Error("Что-то пошло не так");
  }
  const responseData = await response.json();
  return responseData;
}

export async function fetchUpdateTokens(refresh: string) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/refresh/",
    {
      method: "POST",
      body: JSON.stringify({
        refresh,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("Неверный токен");
  } else if (!response.ok) {
    throw new Error("Заполните поля");
  }
  const responseData = await response.json();
  return responseData;
}
