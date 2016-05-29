import { combineReducers } from 'redux'
import pagination from './pagination.js'
import articleList from './articleList.js'
import messages from './messages.js'
import article from './article.js'
import comment from './comment.js'
import category from './category.js'
const rootReducer = combineReducers({
    pagination,
    articleList,
    messages,
    article,
    comment,
    category
});
export default rootReducer;