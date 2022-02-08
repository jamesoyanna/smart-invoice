// import axios from 'axios'
// import dotenv from 'dotenv';
import {axiosInstance} from './config';
// dotenv.config();

// const API = axios.create({ baseURL: 'http://localhost:5000'})
//const API = axios.create({ baseURL: process.env.REACT_APP_API})


axiosInstance.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

// export const fetchInvoices =() => axiosInstance.get('/invoices')
export const fetchInvoice =(id) => axiosInstance.get(`/invoices/${id}`)
export const addInvoice =( invoice ) => axiosInstance.post('/invoices', invoice)
export const updateInvoice = (id, updatedInvoice) => axiosInstance.patch(`/invoices/${id}`, updatedInvoice)
export const deleteInvoice =(id) => axiosInstance.delete(`/invoices/${id}`)
export const fetchInvoicesByUser = (searchQuery) => axiosInstance.get(`/invoices?searchQuery=${searchQuery.search}`);

export const fetchClient = (id) => axiosInstance.get(`/clients/${id}`);
export const fetchClients = (page) => axiosInstance.get(`/clients?page=${page}`);
export const addClient =( client ) => axiosInstance.post('/clients', client)
export const updateClient = (id, updatedClient) => axiosInstance.patch(`/clients/${id}`, updatedClient)
export const deleteClient =(id) => axiosInstance.delete(`/clients/${id}`)
export const fetchClientsByUser = (searchQuery) => axiosInstance.get(`/clients/user?searchQuery=${searchQuery.search}`);


export const signIn =(formData)=> axiosInstance.post('/users/signin', formData)
export const signUp =(formData)=> axiosInstance.post('/users/signup', formData)
export const forgot = (formData) => axiosInstance.post('/users/forgot', formData);
export const reset = (formData) => axiosInstance.post('/users/reset', formData);

export const fetchProfilesBySearch = (searchQuery) => axiosInstance.get(`/profiles/search?searchQuery=${searchQuery.search || searchQuery.year || 'none'}`);
export const fetchProfile = (id) => axiosInstance.get(`/profiles/${id}`)
export const fetchProfiles = () => axiosInstance.get('/profiles');
export const fetchProfilesByUser = (searchQuery) => axiosInstance.get(`/profiles?searchQuery=${searchQuery.search}`)
export const createProfile = (newProfile) => axiosInstance.post('/profiles', newProfile);
export const updateProfile = (id, updatedProfile) => axiosInstance.patch(`/profiles/${id}`, updatedProfile);
export const deleteProfile = (id) => axiosInstance.delete(`/profiles/${id}`);