import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_BOOK_LISTS = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  return (
    <Query query={GET_BOOK_LISTS}>
      {({ loading, data }) => (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <ul>
              <h1>All Books</h1>
              {data.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Query>
  );
};

export default BookList;
