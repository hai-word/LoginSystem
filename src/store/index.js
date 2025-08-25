/*
pinia
 */

import {defineStore} from 'pinia'
import {ref} from "vue";


export const userStore = defineStore('userStore',{
    state:()=>{
        return {
            authorization:ref(false),
        }
    },
    actions:{
        userLogin(state){
            this.authorization=state
        }
    }
})

