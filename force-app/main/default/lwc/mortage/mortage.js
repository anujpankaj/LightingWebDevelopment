const getTermOptions = () =>{
 return [
     {label: '20 years', value:20},
     {label: '25 years', value:25},
     {label: '30 years', value:30},
     {label: '35 years', value:35},
     {label: '40 years', value:40}
];
};
const calculateMonthlyPayment = (principlal, years, rate) =>{   
    if(principlal && years && rate && rate >0){
        const monthlyrate=rate /100/12;
        const monthlypayment= 
          (principlal * monthlyrate)/
          (1- Math.pow(1/ (1+monthlyrate), years *12));          
          return monthlypayment;    
    }
    return 0;
};

export{getTermOptions, calculateMonthlyPayment};