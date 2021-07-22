import { call,apply, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from '@/utils/request';
import userAction from '../actions/user'

function* init(){
    console.log('hello saga');

    // 监听 saga Action
    // yield takeEvery('user_login_async',login)
    yield takeLatest('user_login_async',login);
    yield takeLatest('get_shopping_cart',getCart);
}

function * login(action){
    // const data = yield request.post('/login',action.user);

    // 单元测试，测试用例
    // 使用call,apply目的是为了方便测试
    const data = yield call(request.post,'/login',action.user);
    console.log('data',data);

    if(data.code === 200){
        yield put(userAction.login(data.data))
    }

    return data;
}

function * getCart(action){
    const data = yield request.post('/cart',action.user);
    console.log('data',data);

    if(data.code === 200){
        // yield put(userAction.login(data.data))
    }

}

// dispatch({type:'user_login_async',user:{username:'laoxie',password:123456}})

export default init;