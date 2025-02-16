import { configureStore } from '@reduxjs/toolkit'
import  actionlists  from './Myactionlist'

export const mystorage = configureStore({
    reducer: {
        counter:actionlists
    },
  })