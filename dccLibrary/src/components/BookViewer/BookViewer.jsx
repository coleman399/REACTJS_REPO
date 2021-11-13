import React from 'react';
import Book from '../Book/Book';

const BookViewer = (props) => {
    return (
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={props.previousBook}>Previous Book</button>
            </div>
            <div className="col-md-4">
                {/*Display Book with cover here*/}
                <Book book={props.book}/>
            </div>
            <div className="col-md-4">
                <button onClick={props.goToNextBook}>Next Book</button>
            </div>  
        </div>
    )
}

export default BookViewer;