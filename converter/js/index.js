import variables from "./getElements.js";
import state from "./state.js";
import { handleChangeCode } from "./convertAmount.js";
import { fetchLatest } from "./singlePage.js";

const { currencySelects, success, tabs } = variables

const renderCodeList = () => {
    currencySelects.forEach((select) => {
        state.codes.forEach(([code]) => {
            const element = document.createElement('option')
            element.value = code
            element.innerText = code
            select.insertAdjacentElement('beforeend', element)
        })
        const name = select.getAttribute('name')
        name && select.addEventListener('change', handleChangeCode)
    })
}

export const fetchCodes = async () => {
    try {
        const response = await fetch(`${state.url}/codes`)
        const data = await response.json()
        if (data.result === success) {
            state.codes = data.supported_codes
            renderCodeList()
            fetchLatest()
        }
    } catch (err) {
        console.log(err)
    }
}

export const handleTabClick = ({ currentTarget: target }) => {
    const { tab } = target.dataset
    const children = document.querySelectorAll('.content')
    if (!tab || tab === state.currentTab)
        return
    tabs.forEach((item) => item.classList.remove('active'))
    target.classList.add('active')
    for (const child of children) {
        if (child.dataset.child === tab) {
            child.classList.add('show')
        } else {
            child.classList.remove('show')
        }
    }
    state.currentTab = tab
}