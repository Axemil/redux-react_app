import axios from "axios";

export const fetchTodo = async (start = 0, limit = 5) => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
        //пишем только камелкэйсом, сорри
        params: {
            _start: start,
            _limit: limit
        }
        //если используешь на проекте асинк и авэйт, то отходи от использования зэнов
    }).then(function (response) {
        return response.data
    })
}
