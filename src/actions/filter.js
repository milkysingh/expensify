export const setTextFilter=(text='')=>({
    type:'TEXT_FILTER',
    text
});

export const setSortByDate=()=>({
    type:'SORT_BY_DATE',
    sortBy:'date'
});

export const setSortByAmount=()=>({
  type :'SORT_BY_AMOUNT',
  sortBy:'amount'
});

export const setStartDate=(startDate)=>({
    type:'START_DATE',
    startDate
});

export const setEndDate=(endDate)=>({
    type:'END_DATE',
   endDate
});
