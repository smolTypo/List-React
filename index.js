function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'persimmons',
      isCompleted: false,
    },
    {
      text: 'black garlic',
      isCompleted: false,
    },
    {
      text: 'cultured butter',
      isCompleted: false,
    },        
    {
      text: 'poached pears',
      isCompleted: false,
    },   
    {
      text: 'panettone french toast',
      isCompleted: false,
    }, 
    {
      text: 'roasted squash',
      isCompleted: false,
    }, 
    {
      text: 'tahini desserts',
      isCompleted: false,
    }, 
    {
      text: 'earl grey',
      isCompleted: false,
    },  
        {
      text: 'beet sauerkraut',
      isCompleted: false,
    },
        {
      text: 'frangipane',
      isCompleted: false,
    },
        {
      text: 'pierogi and pierogi adjacent dumplings',
      isCompleted: false,
    },
        {
      text: 'warm milk with honey',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
