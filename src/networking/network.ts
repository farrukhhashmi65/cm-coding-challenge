import axios, { AxiosRequestConfig } from 'axios'

// simple function of network call - Axios Instance

const AxiosInstance = axios.create({
  baseURL: 'http://146.190.204.211:8000/api',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

async function makeNetworkCall (config: AxiosRequestConfig): Promise<any> {
  return await AxiosInstance.request(config)
}

export { makeNetworkCall }
