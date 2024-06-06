// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TrackType } from "@/types/types";
// import { getTracks } from "@/app/api/userApi";

// type SongsStateType =  {
//   songsState: Array<TrackType>;
// }

// const initialState: SongsStateType = {
//   songsState: [],
// };

// export const tracksFromApi = createAsyncThunk(
//     'getTracks',
//     async () => {
//         const tracks: TrackType[] = await getTracks();
//         return tracks
//     }
//   )
  

// export const playlistSlice = createSlice({
//   name: "tracks",
//   initialState,
//   reducers: {
//     tracks:[],
//     status: null

//   },
//   extraReducers: {
//     [tracksFromApi.pendind]:(state)=>{
//         state.status="pending"
//     },
//     [tracksFromApi.fulfilled]:(state, action)=>{
//         state.status="resolved",
//         state.tracks=action.payload
//     }
//   }
// });