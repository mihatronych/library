import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import PublicationStore from "./store/PublicationStore";
import LanguageStore from "./store/LanguageStore";
import ThemeStore from "./store/ThemeStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        publication: new PublicationStore(),
        language: new LanguageStore(),
        theme: new ThemeStore()
    }}>
        <App />,
    </Context.Provider>,
  document.getElementById('root')
);
