import {combineReducers} from 'redux'
export const ADD_CART = "ADD_CART"
//删除商品
export const DELETE_CART = "DELETE_CART"
//改变商品数量
export const UPDATE_GOODS_COUNT = "UPDATE_GOODS_COUNT"
//改变商品选中与否
export const UPDATE_GOODS_SELECTED = "UPDATE_GOODS_SELECTED";

let initState = {
    cart_list:[]
}

function cart_list(state=initState.cart_list,action){
    switch (action.type){
        case ADD_CART:
        let flag = false;//新添的数据是不存在的
        state.forEach((item,index) => {
            if(item.goods_id == action.data.goods_id){
                ++item.count;
                flag = true
            }
        })
        return flag?[...state]:[...state,action.data] 
        break;
        case UPDATE_GOODS_COUNT:
            let arr = [...state];
            arr.forEach((item) =>{
                if(item.goods_id == action.id){
                item.count=action.data
                }
            });
            return arr
        break;
        case UPDATE_GOODS_SELECTED: 
            let arr2 = [...state];
            arr2.forEach((item) =>{
                if(item.goods_id == action.id){
                item.selected=action.data
                }
            });
            return arr2;
        default:return state
    }
    return state
}
export default combineReducers ({
    cart_list
}) 


















// import {combineReducers} from 'redux'
// export let ADD_CART='ADD_CART';//添加购物车
// //删除商品
// export const DELETE_CART='DELETE_CART';
// //改变商品数量
// export const UPDATE_GOODS_COUNT='UPDATE_GOODS_COUNT';
// //改变商品选中与否
// export const UPDATE_GOODS_SELECTED='UPDATE_GOODS_SELECTED'
// let inintState={
//     cart_list:[]
// }


// function cart_list(state=inintState.cart_list,action){//用于存储的数据
//     switch (action.type){
//         case ADD_CART:
//             let flag=false;//添加的商品在没在购物车
//             state.forEach((item,index)=>{
//                 if(item.goods_id===action.data.goods_id){
//                     ++item.count
//                     flag=true
//                 }
//             })
//             return flag?[...state]:[...state,action.data]
//             break;
//         case UPDATE_GOODS_COUNT:
//                 let arr=[...state];
//                 arr.forEach(item=>{
//                     if(item.goods_id==action.id){
//                         item.count=action.data
//                     }
//                 })
//                 return arr
//                 break;
//          default :return state;
//         }
//         return state
// }
// export default combineReducers({
//     cart_list
// })