// function loc() {
//     var myString = ''
//     for ( var param of arguments){
//         myString += `${param} -`

//     }
// }
// loc('vo', 'loc')

// var name = 'voxuanloc';
// console.log(name.toUpperCase())
// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {

// }

// // Expected results
// console.log(strToArray(coursesStr))

// function strToArray(str) {
//     return str.split(', ')

// }

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
// console.log(strToArray(coursesStr))

// function isNumber(value) {
//     return typeof value == 'number'
// }

// var games = [
//     'lmht',
//     'csgo',
//     'pubg'
// ]

// console.log(games.unshift('vo xuan loc'))
// console.log(games)

// console.log(isNumber(999)); // true
// console.log(isNumber(123)); // false
// console.log(isNumber('100')); // false

// function isNumber(value) {
//     return typeof value == 'number' && !isNaN(value)
//  }

// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / 'abc')); // false

// function getLastElement(array) {
//     return array.slice(0,1)
// }

// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant', 'loc', 'vo', 'xuan'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// var myInfor = {
//     name: 'loc',
//     age: 22,
//     address: 'hcm',
//     getName: function(){
//         return this.age
//     }
// }

// console.log(myInfor.getName())

// var animal = function(name, leg, speed){
//     this.name = name
//     this.leg = leg
//     this.speed = speed
// }

// var parrot = new animal('Vẹt', '2 chân', '30km/h')
// console.log(parrot)

// function Student(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName

// }

// Student.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'

// function getNextYear() {
//     var date = new Date()
//     var nextYear = date.getFullYear() + 1
//     return nextYear
// }

// console.log(getNextYear())

// function getRandomItem(array) {
//     var ranDom = Math.floor(Math.random() * array.length)
//     return array[ranDom]
// }

// var cars = [
//     'mer',
//     'toy',
//     'maz',
//     'ferr'
// ]
// console.log(getRandomItem(cars))

// function run(fruits) {
//     var result;

//     switch (fruits) {
//         case"Banana":
//             result = "This is a Banana";
//             break;
//         case "Apple":
//             result = "This is an Apple";
//             break;
//     }

//     return result;
// }
// console.log(run("Banana"))

// function random(min, max, length) {
//     var arr = []
//     for(var i=1; i<=length; i++){
//         arr.push(Math.floor(Math.random() * (max - min) + min ))
//     }
//     return arr
// }
// console.log(random(1, 100, 10))

// function getTotal(arr) {
//     var sum = 0
//     for(var i=0; i<arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(getTotal([2,2,4]))

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     },
// ]

// function getTotal(order) {
//     var sum = 0
//     for(var i=0; i<order.length; i++) {
//         sum += order[i].price
//     }
//     return sum
// }

// // Expected results:
// console.log(getTotal(orders)) // Output: 8700000

// function run(object) {
//     var arr = []
//     for (var key in object) {
//        arr.push(`Thuộc tính có giá trị ${key} có giá trị ${object[key]}`)
//     }
//     return arr
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]

// var i = 0
// var isSuccess = false

// do{
//     i++
//     console.log('Lần thứ'+i)
//     if(false) {
//         isSuccess = true
//     }
// }while(!isSuccess && i<4)

// function giaiThua(number) {
//    if(number >0){
//     return number * giaiThua(number - 1)
//    }
//    return 1
// }

// console.log(giaiThua(3))

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 10
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(array) {
//     var sport = array.filter(function(sport) {
//        return sport.like=100
//     })
//      return sport
// }
// console.log(getMostFavoriteSport(sports))

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(arr) {
//     var result= arr.reduce(function(a,b){
//         return a+=b.gold
//     },0)
//     return result
// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];

//   function calculateRating(arr) {
//     var director = arr.filter(function(fimls) {
//         return fimls.Director== 'Christopher Nolan'
//     })

//     var sumIMDB = director.reduce(function(IMDB, index ) {
//         return IMDB+=Number(index.imdbRating)
//     },0)
//     var aver = sumIMDB/ director.length
//     return aver
//   }

//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675

// Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];

// function arrToObj(array) {
//     var result= array.reduce(function(object, index) {
//         object[index[0]] = index[1]
//         return object
//     },{})
//     return  result
// }

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// function sumCb(a, b) {
//     return a+b
// }

// function subCb(a, b) {
//     return a-b
// }

// function multiCb(a, b) {
//     return a*b
// }

// function divCb(a, b) {
//     return a/b
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// console.log(caculate(1,2,sumCb))

// Array.prototype.filter2 = function(callback) {
//     var arr = []
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index)
//             if(result){
//                 arr.push(this[index])
//             }
//         }

//     }
//     return arr

// }

// var courses = [
//         {
//             name: 'JavaScript',
//             coin: 680
//         },
//         {
//             name: 'PHP',
//             coin: 680
//         },
//         {
//             name: 'Ruby',
//             coin: 980
//         },
//         {
//             name: 'Python',
//             coin: 680
//         }
//     ]

// var results = courses.filter2(function(course, index) {
//    return course.coin==680
// },0)

// console.log(results)

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var newCourses = courses.map(function(course, index) {
//         return `<li> ${course} </li>`
//     })
//     console.log(newCourses.join(''))
// }

// var box1 = document.querySelector('.loc')
// console.log(box1.style)

// var boxs = document.getElementsByTagName('div')
// console.log(boxs)
// for(var box of boxs) {
//     box.classList.add('box')
// }

// function notHell(value) {
//     return new Promise(function (resolve, reject) {
//         resolve(value)
//     })
// }

// notHell(21)
//     .then(function (value) {
//         return new Promise(function (resolve) {
//             setTimeout(function() {
//                 resolve(value)
//             },1000)
//         })
//     })
//     .then(function (value) {
//         console.log(value+1)
//     })
//     .catch(function (loc) {
//         console.log(loc)
//     })

// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(500)
//     .then(function () {
//         console.log(1);
//         return sleep(500);
//     })
//     .then(function () {
//         console.log(2);
//         return sleep(500);
//     })
//     .then(function () {
//         console.log(3);
//         return sleep(500);
//     })
//     .then(function () {
//         console.log(4);
//         return sleep(500);
//     })
//     .then(function () {
//         console.log(5);
//         return sleep(500);
//     });


// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam',
//     },
//     {
//         id: 2,
//         name: 'Son Dang',
//     },
//     {
//         id: 3,
//         name: 'Son Dam',
//     },
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'alo123 Kien Dam',
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'alo Son Dang',
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'alo 123 Son Dam',
//     },
// ];

// function getComments() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(comments);
//         }, 1000);
//     });
// }

// function getUsersByIds(userIds) {
//     return new Promise(function (resolve) {
//         var result = users.filter(function (user) {
//             return userIds.includes(user.id);
//         });
//         setTimeout(function () {
//             resolve(result);
//         }, 1000);
//     });
// }

// getComments()
//     .then(function () {
//         var userIds = comments.map(function (comment) {
//             return comment.user_id;
//         });

//         return getUsersByIds(userIds)
//             .then(function (users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             });
//     })
//     .then(function (data) {
//         var commentBlock = document.getElementById('comment-block')
//         var html = ''

//         data.comments.forEach(function (comment) {
//             var user = data.users.find(function (user) {
//                 return user.id === comment.user_id
//             })
//             html += `<li> ${user.name}: ${comment.content}</li>`
//         })
//         commentBlock.innerHTML = html
//     })


//thêm sửa xóa data lên server
// coursesApi = 'http://localhost:3000/courses'
// function start() {
//     getCourses(renderCourses)
//     handleCreateform()
// }
// start()

// function renderCourses(courses) {
//     var listCoursesBlock = document.querySelector('#courses-block')
//     var htmls = courses.map(function (course) {
//         return `
//             <li class="item-${course.id}">
//                 <h4> ${course.name} </h4>
//                 <p> ${course.description} </p>
//                 <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
//                 <button onclick="handleEditCourse(${course.id})">Sửa</button>
//             </li>
//         `
//     })
//     listCoursesBlock.innerHTML = htmls.join('')
// }

// function getCourses(callback) {
//     fetch(coursesApi)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(callback)
// }

// function createCourses(data, callback) {
//     options = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         }
//     }
//     fetch(coursesApi, options)
//         .then(function (response) {
//             response.json()
//         })
//         .then(callback)
// }

// function handleDeleteCourse(id) {
//     options = {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     }
//     fetch(coursesApi + '/' + id, options)
//         .then(function (response) {
//             response.json()
//         })
//         .then(function () {
//             var courseItem = document.querySelector('.item-' + id)
//             if (courseItem) {
//                 courseItem.remove()
//             }
//         })
// }

// // function editCourse(data, callback) {
// //     var create = document.querySelector('#create')
// // }

// function handleCreateform() {
//     var create = document.querySelector('#create')

//     create.onclick = function () {
//         var name = document.querySelector('input[name="name"]').value
//         var description = document.querySelector('input[name="description"]').value

//         var dataForm = {
//             name: name,
//             description: description
//         }
//         createCourses(dataForm, function () {
//             getCourses(renderCourses)
//         })
//     }
// }

// function handleEditCourse(id) {
//     document.querySelector('input[name="name"]').focus()
//     document.querySelector('#create').textContent = 'Save'
//     var create = document.querySelector('#create')

//     create.onclick = function () {
//         document.querySelector('#create').textContent = 'Create'
//         var name = document.querySelector('input[name="name"]').value
//         var description = document.querySelector('input[name="description"]').value
//         var dataForm = {
//             name,
//             description
//         }

//         options = {
//             method: "PUT",
//             body: JSON.stringify(dataForm),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         }
//         fetch(coursesApi + '/' + id, options)
//             .then(function (response) {
//                 response.json()
//             })
//             .then(function () {
//                 getCourses(renderCourses)
//             })
//     }
// }

// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span> ${curr} </span>`, strings.shift()]
//         , [first]
//     ).join('')
// }

// var brand = 'f8'
// var course = 'javascript'

// console.log(highlight`Học lập trình ${course} tại ${brand}!`)

// function toast({
//     name = '',
//     age = 0,
//     nickName = '',
// }) {
// }

// console.log(toast({
//     name: "loc",
//     age: 21,
//     nickName: "ut quy",

// }))



var myInfor = {
    name: 'loc',
    age: 22,
    address: 'hcm',
    getName: function () {
        return this.age
    }
}

console.log(myInfor.name)