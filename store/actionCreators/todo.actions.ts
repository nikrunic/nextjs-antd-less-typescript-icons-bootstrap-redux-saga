// import axios from "axios";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
} from "../constants/todo.constants";
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  FetchTodoFailure,
  FetchTodoFailurePayload,
  ITodo,
} from "../types/todo.types";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});

export const fetchTodoFailure = (
  payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE,
  payload,
});

export default {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoFailure,
};
