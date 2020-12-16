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

    addOneMore(state, payload) {
        state.cartList.forEach(item => {
            if(item.iid == payload.iid) {
                item.count++
            }
        })
    },

    reduceOneMore(state, payload) {
        for(let i=0; i < state.cartList.length; i++) {
            if(state.cartList[i].iid == payload.iid) {
                if(state.cartList[i].count > 1) {
                    state.cartList[i].count--
                    
                }else {
                    state.cartList.splice(i, 1)
                }
                break
            }
        }
    }
}