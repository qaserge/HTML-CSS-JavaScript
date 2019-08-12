var students = ["Marina","Yohannes","Sergei","Yasmeen","Adam",
"Amin","Aaron","Wu","Shaghayegh","Gabriel","Jonathan","Levar",
"Rinalben","Hang","Vladislav","Matthew","Aleksander","Antony"];
console.log("List of students: " +students);

var currentFunction = 7; // choose number of Function
var studentsName = "Jonathan"; // for 1. Search a student
var newStudentName = "New"; // for 2. new student
var removeStudent = "Gabriel"; // for 3. Remove a student

switch (currentFunction) {
  // 1. Search a student by name and know his index location in an array
  case 1:
  for (var i = 0; i<students.length; i++)
  {
    if (studentsName == students[i])
    console.log("1. For " + students[i] + " student id is [" + i + "]");
  }
    break;
  // 2. Add a new student
    case 2:
      students.unshift(newStudentName);
      console.log("2. Add a new student " + students);
      break;
  // 3. Remove a student
      case 3:
      for (var i = 0; i<students.length; i++)
      {
        if (removeStudent == students[i])
        students.splice(i, i-7); // delete element by id (i-element for delete, i-7 elements after i whats need to save)
      }
      console.log("3. list of students after removing " +students);
        break;
  //4. Display all the students
        case 4:
        console.log("4. Display all the students " +students);
          break;
  // 5. Display all students sorted alphabetically by name
          case 5:
          students.sort();
          console.log("5. Sorted students " + students);
            break;
  // 6. Display a random student’s name
            case 6:
          var rend = Math.floor((Math.random() * students.length) + 0);
          console.log("6. Random student is " + students[rend]);
              break;
  // 7. Take the before last letter of every student's name,
  //    append it to the beginning of their name and
  //    display the alphabetically sorted list of students
              case 7:
              var sortWord = new Array(); // new array for new names
              for (var i = 0; i<students.length; i++)
              {
                var word = students[i]; // give var word the names of students
                var penult = word[word.length-2]; // give var penult the before last letter
                word = penult + word; // concotinate penult and word
                sortWord.unshift(word); //put concotinated name in the new array sortWord
              }
              sortWord.sort(); // sort sortWord
              console.log("7. New names list: " +sortWord);
                break;
}
