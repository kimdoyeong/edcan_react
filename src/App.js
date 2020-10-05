import React from "react";

class App extends React.Component {
  state = {
    text: "",
    todo: [],
  };
  constructor(props) {
    super(props);

    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  toggleTodo(index) {
    const { todo } = this.state;
    const todoCloned = [...todo];

    todoCloned[index].checked = !todoCloned[index].checked;

    this.setState({
      todo: todoCloned,
    });
  }
  deleteTodo(index) {
    const { todo } = this.state;
    const todoCloned = [...todo];

    delete todoCloned[index];

    this.setState({
      todo: todoCloned.filter((v) => v !== undefined),
    });
  }
  render() {
    const { text, todo } = this.state;

    console.log(todo);
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            this.setState((state) => ({
              todo: [
                ...state.todo,
                {
                  text: state.text,
                  checked: false,
                },
              ],
              text: "",
            }));
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => {
              this.setState({ text: e.target.value });
            }}
          />
          <button type="text">추가</button>
        </form>
        <div>
          {todo.map((todo, i) => (
            <div key={i}>
              {todo.checked ? "✅" : ""}
              {todo.text}
              <button onClick={() => this.toggleTodo(i)}>
                {todo.checked ? "체크 해제" : "체크"}
              </button>
              <button onClick={() => this.deleteTodo(i)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
