import axios from "axios";

export const fetchTodo = async (start = 0, limit = 5) => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _start: start,
            _limit: limit
        }
    }).then(function (response) {
        return response.data
    })
}