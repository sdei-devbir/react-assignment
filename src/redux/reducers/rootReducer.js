import categoriesReducer from "./categoriesReducer";
import merchantsReducer from "./merchantsReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  categoriesData: categoriesReducer,
  merchantsReducer: merchantsReducer,
});

export default rootReducer;
