//Modulos de terceros - react-icons
import { VscBug } from 'react-icons/vsc'

// Fetch API
export const Posts = () => {
    return <button onClick={(e) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }}>
        <VscBug />
        Traer datos
    </button>
}