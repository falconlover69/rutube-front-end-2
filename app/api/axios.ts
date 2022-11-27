import { getContentType } from '@/utils/api.utils'
import axios from 'axios'

export const axiosClassic = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: getContentType()
})