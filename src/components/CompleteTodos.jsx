import React from "react";

const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    padding: "8px",
    minHeight: "200px",
    margin: "8px",
    borderRadius: "8px",
};

export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;
    return (
        <div style={style}>
            <p className="title">完了のTODO</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={todo} className="list-row">
                            <p>{todo}</p>
                            <button onClick={() => onClickBack(index)}>
                                戻す
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
