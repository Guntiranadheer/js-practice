// global scope
let courseName="JavaScript"
function PracticeScope(){
    let topic ="variables"
    console.log(courseName+" "+topic)
    if(true){
        //block scope
        let detail="Exploring scopes";
        console.log(detail)
    }
    console.log(detail)// it gives error because let contains block so outside of block it willnot work
}
PracticeScope()

// OUTPUT: JavaScript Variables
//         Exploring scopes