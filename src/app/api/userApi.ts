const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTcxMjcxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4YzQ5NDNmOWNmNTRlZjI5NmFmNTMyOWUwODM4YWQ5IiwidXNlcl9pZCI6NzkyfQ.5n8YHTjsgAnYnc4gioyV1wPnxM2D16PS6c9kNhC-JoE";

export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}

export async function fetchFavoriteTracks(access: string) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}

export async function addLike(id: string) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}

export async function removeLike(id: string) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}
