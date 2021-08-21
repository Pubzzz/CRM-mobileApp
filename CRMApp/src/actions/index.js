export const selectPerson=(peopleId) =>{
    return{
        type:'SELECTED_PERSON',
        selectId: peopleId,
    };
};

export const noneSelected =()=>{
    return{
        type:'NON_SELECTED',
    };
};