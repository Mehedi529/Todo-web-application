export const saveStateToLocalStorage = (state)=>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todoState', serializedState);
    }
    catch(error){
        console.log("Could Not save state", error);
    }
}

export const loadStateFromLocalStorage = ()=>{
    try{
        const serializedState = localStorage.getItem('todoState');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch(error){
        console.log("Could Not save state", error);
        return undefined;
    }
}