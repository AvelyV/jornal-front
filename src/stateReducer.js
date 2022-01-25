// we do not need to worry about the first parameter, react will get it
export default function (currentState, action) {
    switch(action.type) {
        case 'addEntry' : 
            return {
                ...currentState,
                entries: [action.entry, ...currentState.entries]
            }
            
        case "setCategories" : 
            return {
                ...currentState,
                categories: action.data
            }
            
        case "setEntries" : 
        return {
            ...currentState,
            entries: action.data
        }

        
    }
}