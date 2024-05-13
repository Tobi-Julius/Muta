import { request } from "./request";

export const fetchPostRequestInit = async (
  endPoint,
  body,
  contentType
  //   token,
  //   onUploadProgress
) => {
  const response = await request.post(endPoint, body, {
    headers: {
      //   Authorization: token,
      "Content-Type": contentType,
      
    },
    // onUploadProgress: onUploadProgress,
  });

  return { response };
};
