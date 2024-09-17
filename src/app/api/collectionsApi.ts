import { TrackType } from "@/types/types";

interface CollectionResponse {
  id: number;
  items: TrackType[];
}

// 💡 Укажем, что промис вернет массив треков
export async function getCollections(id: string): Promise<TrackType[]> {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/selection/${id}`
  );
  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const data: CollectionResponse = await response.json(); //💡 Указываем, что в ответе объект
  return data.items; // 💡и нам нужен лишь массив треков из этого объекта
}
