import { useState } from 'react'

const BookShelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState([{
        title: '',
        author: '',
    }])

    // This will update the form
    const handleInputChange = () => {

    }

    const secondInput = () => {

    }

    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleInputChange}>
                <input></input>
            </form>
        </div>
        <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
    )
}

export default BookShelf
