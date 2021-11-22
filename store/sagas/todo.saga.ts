import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess } from "../actionCreators/todo.actions";
import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "../constants/todo.constants";
import { ITodo } from "../types/todo.types";

const getTodos = () =>
    axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga(): any {
    try {
        const response = yield call(getTodos);
        yield put(
            fetchTodoSuccess({
                todos: response.data,
            })
        );
    } catch (e) {
        if (e instanceof Error) {
            yield put(
                fetchTodoFailure({
                    error: e.message,
                })
            );
        }
    }
}

function* fetchSuccessSaga(): any {
    console.log("sucess");
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
    yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga), takeLatest(FETCH_TODO_SUCCESS, fetchSuccessSaga)]);
}

export default todoSaga;