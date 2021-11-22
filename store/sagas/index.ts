import {all, fork} from 'redux-saga/effects';
import todoSaga from './todo.saga';
// import {
//     loginActionWatcher,
//     logoutActionWatcher
// } from './auth.saga';

// import {
//     affiliateGroupGetAction,
//     affiliateGroupSubmitAction,
//     affiliateGroupDeleteAction
// } from "./affiliateGroup.saga";

// import {
//     curatorInventoriesWatcher
// } from './curator.saga'

// import {
//     distributionChannelGetAction
// } from "./distributionChannel.saga";

export default function* rootSaga() {
    yield all([fork(todoSaga)
        // loginActionWatcher(),
        // logoutActionWatcher(),
        // affiliateGroupGetAction(),
        // affiliateGroupSubmitAction(),
        // affiliateGroupDeleteAction(),
        // curatorInventoriesWatcher(),
        // distributionChannelGetAction()
    ]);
}
