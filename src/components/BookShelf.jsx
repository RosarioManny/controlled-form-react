import { useState } from 'react'

const BookShelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState([{
        title: '',
        author: '',
    }])

    // This will update the form
    const handleInputChange = (evt) => {
        // Setting the newBook to the information that was inputted.
        setNewBook({...newBook, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setBooks([...books, newBook])
        
        setNewBook({title: '', author: ''})
    }

    const listedBooks = books.map((book, idx)=>{
        return (
        <div className="bookCard "key={idx}>
           <p><em>{book.title}</em> </p> 

            <p>By <b>{book.author}</b></p>
        </div>  
        )
    })

    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                id="title"
                name='title'
                value={newBook.title}
                onChange={handleInputChange}
                />
                <label>Author:</label>
                <input 
                id='author'
                name='author'
                value={newBook.author}
                onChange={handleInputChange}
                />
                <button type='submit'>Add Book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
           {listedBooks}
        </div>
    </div>
    )
}

export default BookShelf
