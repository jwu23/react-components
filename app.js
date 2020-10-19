// TODO
var App = () => (
  <div>
    <h1>Grocery List</h1>
    <TodoList todo = {['get chipotle', 'learn react', 'sleep more']}/>
  </div>
);

var TodoList = (props) => (
  <ul>
    {props.todo.map(todoItem =>
      <TodoListItem todoItem={todoItem} />
    )}
  </ul>
);

// var listClick = (event) => {
//   console.log('You clicked me');
// }

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  listClick() {
    this.setState({
      done: !this.state.done
    });
  }

  listHoverOver() {
    this.setState({
      hover: !this.state.hover
    });
  }

  // listHoverOut() {
  //   this.setState({
  //     hover: false
  //   });
  // }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return (
      <li style={style} onMouseEnter={this.listHoverOver.bind(this)} onMouseOut={this.listHoverOver.bind(this)} onClick={this.listClick.bind(this)}>{this.props.todoItem}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));