const reducer = (state = [], action) => {
  switch(action.type) {
    case 'DATA_INIT':
      return action.data
    default: return state
    }
}

export const initializeData = () => {
  
}

export default reducer