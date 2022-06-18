import postSlice from "./postSlice";
import errorHandlerSlice from "./errorHandlerSlice";
import selectSortSlice from "./selectSortSlice";
import searchSlice from "./searchSlice";
import loadingSlice from "./loadingSlice";


const reducers = {
 posts: postSlice,
 error: errorHandlerSlice,
 select: selectSortSlice,
 search: searchSlice,
 loading: loadingSlice
}

export default reducers