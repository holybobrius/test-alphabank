const reducer = (state = [], action) => {
  switch(action.type) {
    case 'DATA_INIT':
      return action.data
    case 'LIKE':
      const cardToUpdate = state.find(n => n.info.id === action.data.info.id)
      return state.map(el => el.info.id === cardToUpdate.info.id ? action.data : el)
    default: return state
    }
}

export default reducer