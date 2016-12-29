
var students=[
    {first_name: "Michael", last_name: "Jordan"},
    {first_name: "John", last_name: "Rosales"},
    {first_name: "Mark", last_name: "Guillen"},
    {first_name: "KB", last_name: "Tonel"}
];

function printObject(objStudents){

        for (var i=0; i<objStudents.length; i++){
            var personName=" ";
            for(var person in objStudents[i]){
            personName +=objStudents[i][person] + " ";
            }
        console.log(personName);
        }
}

printObject(students);
