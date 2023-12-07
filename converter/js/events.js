import { handleInputAmount, handleSubmit, switchCurrencies } from "./convertAmount.js";
import { fetchCodes, handleTabClick } from "./index.js";
import { addCurrency, handleActionClick, handleAddSelectChange, handleSingleSelectChange,
} from "./singlePage.js";

import variables from "./getElements.js";

const { tabs, form, amountInput, switchButton,
    currentCurrency, currentCurrencyList, singleSelect, addButton, addCurrencySelect}
    = variables;

fetchCodes();
amountInput.addEventListener("keyup", handleInputAmount)
form.addEventListener("submit", handleSubmit)
switchButton.addEventListener("click", switchCurrencies);
tabs.forEach((tab) => tab.addEventListener("click", handleTabClick))
currentCurrency.addEventListener("click", handleActionClick)
currentCurrencyList.addEventListener("click", handleActionClick)
singleSelect.addEventListener("change", handleSingleSelectChange)
addButton.addEventListener("click", addCurrency)
addCurrencySelect.addEventListener("change", handleAddSelectChange)