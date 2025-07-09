import './App.css'
import PostEditor from './components/postEditor'
import PostList from './components/postList'

function App() {

  return (
    <>
      <div className='body'>
        <h1>Blog Manager</h1>
        <PostEditor/>
        <PostList/>
      </div>
    </>
  )
}

export default App
