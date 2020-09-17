import React, { useReducer, useState } from "react";
import styled from "styled-components";
// import Todo from './Todo';
interface Props {
  click1: any;
}
interface TodoObject {
  id: number;
  work: string;
  done: boolean;
}
enum ActionTypes {
  DONE = "DONE",
  ADD = "ADD",
  DELETE = "DELETE",
}
interface TypeAction {
  type: ActionTypes;
  id: number;
  value: string;
}
interface TypeState {
  td: TodoObject[]; // trước đó chỗ này là any,
}
const initTd: TypeState = {
  td: [
    { id: 1, work: "thuc day", done: true },
    { id: 2, work: "An sang", done: false },
    { id: 3, work: "Tap the duc", done: true },
    { id: 4, work: "Di lam", done: false },
  ],
};
const reducer: React.Reducer<TypeState, TypeAction> = (state, action) => {
  switch (action.type) {
    case ActionTypes.DONE:
      return {
        ...state,
        td: state.td.map((i: any) => {
          if (i.id === action.id) {
            return { ...i, done: !i.done };
          } else {
            return i;
          }
        }),
      };
    case ActionTypes.ADD:
      return {
        ...state,
        td: [
          {
            id: state.td[state.td.length-1].id + 1, // fix lỗi chùng id sau khi xóa
            work: action.value,
            done: false,
          },
        ].concat(state.td),
      };
    case ActionTypes.DELETE:
      return {
        ...state,
        td: state.td.filter((item: any) => item.id !== action.id),
      };
    default:
      return state;
  }
};
const Todo = styled.label`
  background-color: ${(props) => props.color || "#ddd"};
  border: hidden;
  border-radius: 8px;
  width: 600px;
  height: 30px;
  margin: 8px;
  padding: 4px;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: "row";
  input {
    float: left;
    align-self: center;
  }
  p {
    margin-left: 4px;
    align-self: center;
    flex: 9;
  }
  button {
    flex: 1;
    margin-left: 4px;
    border-radius: 8px;
    border: hidden;
  }
`;
const AddList = styled.div`
  width: 600px;
  display: flex;
  margin: 8px;
  flex-direction: row;
  margin-left: 50%;
  transform: translateX(-50%);
  input {
    flex: 9;
    padding: 12px;
    background-color: #ebe1f2;
    border-radius: 8px;
    border: hidden;
  }
  button {
    flex: 1;
    margin-left: 4px;
    border: hidden;
  }
`;

const Container: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer<React.Reducer<TypeState, TypeAction>>(
    reducer,
    initTd
  );
  const [toadd, setToadd] = useState<string>("");
  return (
    <div className="container">
      <button onClick={props.click1}>Bấm để đổi màu Header</button>
      <AddList>
        <input
          placeholder="Nhập việc cần làm"
          onChange={(e) => setToadd(e.target.value)}
        ></input>
        <button
          onClick={() => {
            dispatch({ type: ActionTypes.ADD, id: 0, value: toadd });
            setToadd("");
          }}
        >
          Add
        </button>
      </AddList>
      {state.td.map((item: any) => {
        let color = item.done ? "#AEF9B4" : "#ddd";
        return (
          // <Todo key={item.id} color={color}>
          //     <input value={item.id} type="checkbox" hidden
          //     onChange={() => dispatch({type: ActionTypes.DONE, id: item.id, value: ""})}
          //     />
          //     <p>{item.work}</p>
          //     <button onClick={() => dispatch({type: ActionTypes.DELETE, id: item.id, value: ""})}>Dele</button>
          // </Todo>
          <TodoItem
            color={color}
            workitem={item}
            isDone={() =>
              dispatch({ type: ActionTypes.DONE, id: item.id, value: "" })
            }
            dele={() =>
              dispatch({ type: ActionTypes.DELETE, id: item.id, value: "" })
            }
          />
        );
      })}
    </div>
  );
};
export default Container;
interface CProps {
  color: string;
  workitem: TodoObject;
  isDone: any;
  dele: any;
}
const TodoItem: React.FC<CProps> = (props) => {
  return (
    <div>
      <Todo color={props.color}>
        <input
          value={props.workitem.id}
          type="checkbox"
          hidden
          onChange={props.isDone}
        />
        <p>{props.workitem.work}</p>
        <button onClick={props.dele}>Dele</button>
      </Todo>
    </div>
  );
};
