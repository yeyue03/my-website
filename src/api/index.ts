import { createAxiosByinterceptors } from "./request";

const request = createAxiosByinterceptors({
  baseURL: '/'
})

export default request;