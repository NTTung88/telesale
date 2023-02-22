import { createContext, useEffect, useState, useContext, useMemo } from "react";
import Axios from "axios";
import { REACT_URL } from "../utils/ENV";
import { useLocalStorage } from "../hooks/useStorage";
import { Navigate } from "react-router-dom";

const AxiosContext = createContext();

export default function AxiosProvider({ children }) {
  const [user, setUser, removeUser] = useLocalStorage("user", null);
  const [token, setToken, removeToken] = useLocalStorage("token", null);

  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: REACT_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : "";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          removeUser(null);
          removeToken(null);
        }
        return Promise.reject(error);
      }
    );
    return axios;
  }, []);

  useEffect(() => {
    if (user == null || token == null) {
      return <Navigate to="/login" />;
    }
  }, [token, user]);

  // Login apii
  const loginUser = (data) =>
    axios.post("/users/login", data).then((res) => res.data);
  // Get all user staff
  const getAllStaff = (roleId) =>
    axios
      .get(`/users`, roleId)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get brand
  const getBrands = () =>
    axios
      .get("/brands")
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get brand by Id
  const getBrandById = (id) =>
    axios
      .get(`/brands/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get level user
  const getLevelUser = (id) =>
    axios
      .get(`/levels/brand/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get customer
  const getCustomers = () =>
    axios
      .get("/customers")
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get campign
  const getcampaigns = () =>
    axios
      .get("/campaign")
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //post campign
  const postCustomer = ({ data, CampaignId }) =>
    axios
      .post(`/customers?CampaignId=${CampaignId}`, data)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //source data
  const getSource = (id) =>
    axios
      .get(`/source-datas`, id)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get channel
  const getChannels = (id) =>
    axios
      .get(`/channels`, id)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get customer by id
  const getCustomer = (id) =>
    axios
      .get(`/customers/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //update customer
  const updateCustomer = ({ id, data }) =>
    axios
      .patch(`/customers/${id}`, data)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  //get customer
  const getCustomerByPhone = (phone) =>
    axios
      .get(`/customers?PhoneNumber=${phone}`)
      .then((res) => res.data)
      .catch((err) => err.response.data);

  return (
    <AxiosContext.Provider value={{
        getCustomerByPhone,
        updateCustomer,
        getCustomer,
        loginUser,
        getAllStaff,
        getBrands,
        getBrandById,
        getLevelUser,
        getCustomers,
        getcampaigns,
        postCustomer,
        getSource,
        getChannels,
      }}
    >
      {children}
    </AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}
