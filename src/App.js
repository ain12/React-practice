import './App.css';
import Book from "./components/Book.js";
import Books from "./books.json";

function App() {
  const Library = Books.map(book => <Book key={book.id} title={book.title} author={book.author} />)
  return (
    <div className="App">
      {Library}
    </div>
  );
}

export default App;
