/*eslint-disable */
export const ping = store => next => action => {
    console.log(`Тип события: ${action.type}, addition data action: ${action.payload}`)
    return next(action)
}
/*eslint-enable */
