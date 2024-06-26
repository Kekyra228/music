export async function getCollections(id: string) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/selection/" + id
  );
  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return response.json();
}
