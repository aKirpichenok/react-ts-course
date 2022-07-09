import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import UsersPage from "./components/UsersPage"
import TodosPage from "./components/TodosPage"
import UserItemPage from "./components/UserItemPage"
import TodoItemPage from "./components/TodoItemPage"


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
      </div>
      <Routes>
        <Route path={'/users'} element={<UsersPage />} />
        <Route path={'/todos'} element={<TodosPage />} />
        <Route path={'/users/:id'} element={<UserItemPage />} />
        <Route path={'/todos/:id'} element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

{/* <EventsExaple />
<Card variant={CardVariant.outlined} width="200px" height="200px">
  <button>button</button>
  <div>asdasd</div>
</Card> */}