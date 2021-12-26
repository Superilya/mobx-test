import { createContext } from "react";
import { InputListStore } from "./inputlist";
import { WeatherStore } from "./weather";
import { SelectedSuggestionStore } from './selectedSuggestion'

export const rootStoreContext = createContext({
    inputListStore: new InputListStore(),
    weatherStore: new WeatherStore(),
    selectedSuggestionStore: new SelectedSuggestionStore(),
});
