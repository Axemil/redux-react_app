export const useFetch = (callback) => {

    return async () => {
        try{
            await callback()
        } catch (e) {
            console.log(e)
        }
    }
}