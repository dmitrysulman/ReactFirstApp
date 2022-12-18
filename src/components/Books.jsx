import { useContext } from "react"
import { CustomContext } from "./Context"

import { Book } from "./Book"

export function Books(props) {
    const { books = [] } = useContext(CustomContext);

    return <div>
        {
            books.map(book => (
                <Book key={book.id} {...book} />
            ))
        }
    </div>
}