// const number = (function (a, b) {
//     return a ** b;
// })(3, 3);

// console.log(number) // Output: ?

// // console.log(y(s()));

//--closure--//

// function createLogger(namespace) {
//     function logger(message) {
//         console.log(`[${namespace}] ${message}`)
//     }
//     return logger
// }

// const loggerInfor = createLogger('Infor')

// loggerInfor('Loc dep trai')
// loggerInfor('Loc xinh trai')


// const loggerError = createLogger('Erorr')

// loggerError('Loc mat tiu roi')
// loggerError('Loc di dau roi')


// const json = `{

//         {
//             "id": 1,
//             "name": "Lộ trình học Front-end",
//             "description": "Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé."
//         },
//         {
//             "name": "Lập Trình JavaScript Nâng Cao.",
//             "description": "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
//             "id": 2
//         },
//         {
//             "name": "Node & ExpressJS",
//             "description": "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
//             "id": 3
//         },
//         {
//             "name": "App \"Đừng Chạm Tay Lên Mặt\"",
//             "description": "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
//             "id": 4
//         }

// }`
// const loc = JSON.parse(json)
// console.log(loc)

// --'use strict'--
// const student = {}
// Object.defineProperty(student, 'fullname', {
//     value: 'vo xuan loc',
// })

// student.fullname = 'loc'


// function createCar(obj) {
//     obj = JSON.parse(JSON.stringify(obj))
//     obj.name = "Lamborghini"
//     return obj
// }

// const car = {
//     name: 'Vinfast'
// }

// const newCar = createCar(car)

// console.log(car)
// console.log(newCar)

//-------------bind-------------//
// this.firstName = 'Minh'
// this.lastName = 'Thu'

// const teacher = {
//     firstName: 'Minh',
//     lastName: 'Thảo',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(teacher.getFullName())

// const getTeacherName = teacher.getFullName.bind(teacher)
// console.log(getTeacherName())

//------------bind---------//

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const app = (() => {

//     const cars = ['BMW']
//     const root = $('#root')
//     const submit = $('#submit')
//     const input = $('#input')


//     return {
//         add(car) {
//             cars.push(car)
//         },
//         delete(index) {
//             cars.splice(index, 1)
//         },
//         render() {
//             const html = cars.map((car, index) => `
//                 <li>
//                 ${car}
//                 <span class="delete" data-index ="${index}">&times</span>
//                 </li>
//             `).join('')
//             root.innerHTML = html
//         },

//         handleDelete(e) {
//             const deleteBtn = e.target.closest('.delete')
//             if (deleteBtn) {
//                 const index = deleteBtn.dataset.index
//                 this.delete(index)
//                 this.render()
//             }
//         },
//         init() {
//             submit.onclick = () => {
//                 const car = input.value
//                 this.add(car)
//                 this.render()
//             }
//             root.onclick = this.handleDelete.bind(this)
//             this.render()
//         }
//     }
// })()

// app.init()


//-------------------------//

// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span> ${curr}</span>`, strings.shift()]
//         , [first]
//     )
// }

// const brand = 'F8'
// const course = 'Javascript'

// const html = highlight`Học lập trình ${course} tại ${brand} !`
// console.log(html)

//-------------------------//

// import html from './core.js'
// const cars = ['BMW', 'Porsche', 'Mercedes']
// const isSuccess = false
// const output = html`
//     <h1> ${false}</h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`)}
//     </ul>
// `
// console.log(output)
// return function component() {
//     return function (props, ...args) {
//         return component
//     }
// }

