import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookContainer = () => {
  const bookItems = useSelector((store) => store.book.bookItems);
  console.log(bookItems);
  return (
    <section className="book-container">
      <div>
        <ul className="booklist__container">
          {bookItems.map((book) => (
            <li key={book.item_id}>
              <BookItem title={book.title} category={book.category} author={book.author} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default BookContainer;
