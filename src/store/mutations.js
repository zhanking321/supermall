import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'
export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },

    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },

    checkedChange(state, payload) {
        state.cartList.forEach(item => {
            if(item.iid == payload.iid) {
                item.checked = !item.checked
            }
        })
    },

/*     allCheck(state) {
        state.cartList.forEach(item => item.checked = !this.getters.allChecked)
    } */
}