import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { commonErrorHandler } from "../Common/CommonErrorHandler";
import { setAuthToken, setUser } from "../Redux/Slices/authSlice";
// import {authToken, user} from "../redux/slice/authSlice";

export const authApi = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:"https://reqres.in"
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (formData) => {
        return {
          url: `/api/login`,
          method: "POST",
          body: formData
        };
      },

      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        //onStart side-effect
        try {
          const {data} = await queryFulfilled;
          // onSuccess side-effect
           dispatch(setAuthToken(data));
        } catch (error) {
          // onError side-effect
          console.log("error1", error);
          commonErrorHandler(error);
        }
      }
    }),
    registerUser: builder.mutation({
      query: (formData) => {
        return {
          url: `/api/register`,
          method: "POST",
          body: formData
        };
      },

      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        //onStart side-effect
     
        try {
          const {data} = await queryFulfilled;
          // onSuccess side-effect
          dispatch(setAuthToken(data));
        } catch (error) {
          console.log("error1R", error);
          // onError side-effect
           commonErrorHandler(error);
        }
      }
    })
  })
});
export const {
  useLoginUserMutation,
  useRegisterUserMutation,

} = authApi;
