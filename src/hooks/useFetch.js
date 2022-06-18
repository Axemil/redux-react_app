export const useFetch = (callback) => {

    return async () => {
        try{
            await callback()
        } catch (e) {
            // обработать эту ошибку снэкбаром
            console.log(e)
        }
    }
}
