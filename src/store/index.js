import Vue from "vue"
import Vuex from "vuex"
import userService from "../services/users.service"


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        users: [],
        orders: [],
        requestFailed: null
    },

    getters: {
        users: state => {
            return state.users;
        },
        orders: state => {
            return state.orders
        }
    },
    mutations: {
        SET_USERS (state, users) {
            state.users = users
        },
        SET_ORDERS (state, orders) {
            state.orders = orders
        },
        RequestFailure(state, error) {
            state.requestFailed = error
        },
    },
    actions: {
        loadUsers ({commit}) {
            userService.getUsers().then(
                (users) => {
                    commit("SET_USERS", users)
                },
                (error) => {
                    commit("RequestFailure", error)
                }
            )
        },
        loadOrders ({commit}) {
            userService.getOrders().then(
                (orders) => {
                    commit("SET_ORDERS", orders)
                },
                (error) => {
                    commit("RequestFailure", error)
                }
            )
        }
    }
})