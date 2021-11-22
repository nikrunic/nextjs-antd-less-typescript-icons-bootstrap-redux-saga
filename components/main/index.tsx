import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoRequest } from "@redux/actionCreators/todo.actions";
import { AppState } from "@redux/reducers/index";

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector((state: AppState) => state.todo.pending);
  const todos = useSelector((state: AppState) => state.todo.todos);
  const error = useSelector((state: AppState) => state.todo.error);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <div className="mainLogo">
      <a href="">
        <img src="/images/logo.png" alt="pankod" width="140" height="28" />
      </a>
      <div style={{ padding: "15px" }}>
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          todos.map((todo, index) => (
            <div style={{ marginBottom: "10px" }} key={todo.id}>
              {++index}. {todo.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
