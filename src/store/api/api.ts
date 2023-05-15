import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";

export const emptySplitApi = createApi({
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: "https://punkapi.com/documentation/v2",
  }),
  endpoints: (builder) => ({
    getBeers: builder.query<string, void>({
      query: () => `/beers`,
    }),
  }),
});
