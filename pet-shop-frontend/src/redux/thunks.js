import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Получение всех категорий товаров
export const getAllCategories = createAsyncThunk('data/getAllCategories', async () => {
  try {
    const response = await axios.get('https://petshop-backend-33od.onrender.com/categories/all');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the categories!', error);
    throw error;
  }
});

// Получение продуктов по категории
export const getProductsByCategory = createAsyncThunk('data/getProductsByCategory', async (categoryId) => {
  try {
    const response = await axios.get(`https://petshop-backend-33od.onrender.com/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the products!', error);
    throw error;
  }
});

// Получение всех продуктов
export const getAllProducts = createAsyncThunk('data/getAllProducts', async () => {
  /* async ( _ ,{ getState }) => { */
  /*     const existingProducts = getState().products.products;
    if (existingProducts && existingProducts.length > 0) {
      return existingProducts; // Не загружаем заново, если товар уже в state
    }  */
  try {
    const response = await axios.get('https://petshop-backend-33od.onrender.com/products/all');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the products!', error);
    throw error;
  }
});

export const getProductById = createAsyncThunk('products/getProductById', async (productId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://petshop-backend-33od.onrender.com/products/${productId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return rejectWithValue('Product not found.');
    }
    return rejectWithValue('An error occurred fetching the product.');
  }
});

// Оформление заказа
export const sendOrder = createAsyncThunk('data/sendOrder', async (orderData, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://petshop-backend-33od.onrender.com/order/send', orderData);
    console.log('Order successfully placed!', response.data);
    return response.data;
  } catch (error) {
    console.error('There was an error sending the order!', error);
    return rejectWithValue(error.response?.data || 'Unknown error');
  }
});
