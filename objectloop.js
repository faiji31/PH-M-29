const num =[1,2,3,4,5];
for(const i of num){
    // console.log(i);
}

employee ={
    name:'liam',
    Designation:'QA',
    salary:20000,
    age:25,
    location:'barishal'
}
for (const j in employee){
    const value = employee[j];
    console.log(j,value);
}