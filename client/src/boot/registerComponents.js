import Injector from "lib/Injector";
import TextDropdownField from "../components/TextDropdownField";
import CharacterCounter from "../components/CharacterCounter";

export default () => {
  Injector.component.registerMany({
    TextDropdownField,
    CharacterCounter,
  });
};

Injector.transform("character-count-transform", (updater) => {
  updater.component("TextField", CharacterCounter);
});
