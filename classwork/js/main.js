//#1 Найдите в массиве задачи, которые выполенены 'done: true'
// const tasks = [
//     {
//         id: 1,
//         title: 'Task 1',
//         content: 'Hello I\'m Task 1\'s content',
//         done: false,
//         priority: 'medium',
//         time: 2
//     },
//     {
//         id: 2,
//         title: 'Task 2',
//         content: 'Hi I\'m all the content from Task 2',
//         done: true,
//         priority: 'high',
//         time: 1
//     },
//     {
//         id: 3,
//         title: 'Task 3',
//         content: 'Dastrovia, welcome to Task 3',
//         done: true,
//         priority: 'low',
//         time: 3
//     }
// ]

// let tasksFilter = tasks.filter((task) => {
//     return task.priority === 'low' 
// })
// console.log(tasksFilter);



// Напишите функцию, которая принимает массив и 
// возвращает новый массив из длин элементов исходного массива.
// Пример вывода: [4,5,2,5]
// 
// let arr = ["Есть", "жизнь", "на", "Марсе"];

// let newArray = arr.map((item) => {
//     return item.length
// })
// console.log(newArray);



// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ]

// let records = studentRecords.filter((idr) => {
//     return idr.marks > 50
// })
// console.log(records);


//#3 В массиве есть градусы по цельсию. Нужно вернуть массив с градусами по 
// фаренгейту
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// let newF = celsius.map((a,b) => {
//     return a * 9/5 +32
// })
// console.log(newF);
// // ℉ =℃ * 1.8000



// / Задание № 1
// Написать функцию, которая получает в
// качестве параметра массив, затем перебирает
// все его элементы и выводит на экран сам
// элемент, а также тип данных элемента - числовой, не числовой
// Пример: [‘Молоко’, 77, 11, ‘Мед’, -88];
// Ответ: 	Молоко-не число
// 77-число и т.д.

let array =  ['Milk', 77, 11, 'Honey', -88];
array.forEach((item) => {
    
})
console.log(array);





// Задание № 2
// Напишите функцию, определяющую,
// присутствует ли заданный элемент в массиве.
// В качестве результата работы функции можно
// выдавать логическое значение true и индекс
// этого элемента, если элемент найден,
// и false — в противном случае.
// Пример: [‘Молоко’, 20, 40, “дом”, 30]
// Ввод: 40
// Вывод: true 2

// Задание № 3
// Найдите сумму чисел в массиве
// методом forEach(), методом reduce() и map().
// Пример: [5, 6, 7, 8, 9]
// Ответ: 35

// Задание № 4
// Оставьте в массиве только те строки,
// длина которых равна или больше 5-ти символов.
// Используйте filter().
// Пример: [‘aaa’, ‘aaaqqq', ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]
// Ответ:  [‘aaaqqq', ‘zzzqq’]

// Задание № 5
// Дан массив, в нем могут быть обычные
// элементы и подмассивы.
// Оставьте в нем только подмассивы.
// Используйте filter().
// Пример: [1, 2, [3, 4], 5,[6, 7]]
// Ответ:  [[3, 4],[6, 7]]

// Задание № 6
// Напишите функцию которая принимает в аргументы массив и элемент массива, и удаляет переданный элемент
// из массива.
// Например: remove_array_element([2, 5, 9, 6], 5);
// Вывод: [2, 9, 6]

// Задание № 7
// Дан массив с числами. Найдите сумму
// первых N элементов до первого нуля.
// Например здесь суммируем первые 3 элемента, так как
// дальше стоит элемент с числом 0.
// Пример: [1, 2, 3, 0, 4, 5, 6]
// Ответ: 6
// Используйте slice() и reduce().

// Задание № 8
// Дан массив с числами. Напишите функцию, которая
// вычисляет сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось 10?
// Пример:  [3, 1, 4, 2, 4, 5, 6]
// Ответ: 4

// Задание № 9
// Напишите функцию, которая принимает массив и состоящий из строк
// и возвращает новый массив состояший только из первых и последних
// букв каждой строки
// Например: ['hi', 'goodbye', 'smile']
// Вывод: ['hi', 'ge', 'se']

// Задание № 10
// Дан массив с числами. Вывести количество
// отрицательных чисел в этом массиве.
// Пример: [7, -1, -9, 0, 4, 5, -6]
// Ответ: 3

// Задание №11
// Напишите функцию shuffle(array), которая перемешивает
// (переупорядочивает случайным образом) элементы массива.
// Каждый вызов данной функции должен возвращать массив с
// разным порядком элементов массива.
// Пример: дан массив [4, 8, 12, 16]
// Вывод: [8, 16, 4, 12], следующий запуск выдаст также
// другой порядок элементов - [12, 4, 16, 8]

// Задание №12
// Напишите функцию которая возвращает массив,
// содержащий только уникальные элементы.
// Пример: ['apple', 'orange', 'apple', 'pear']
// Вывод: ['apple', 'orange', 'pear']

// Задание №13
// Напишите функцию которая принимает строку и возвращает объект с ключами в виде
// гласных, и значениями ключей в виде чисел, обозначающих сколько раз данная
// гласная встречается в заданной строке. Функция не должна учитывать регистр, т.е
// должна учитывать и заглавные и строчные буквы.
// Использовать forEach
// Например: 'I Am awesome and so are you'
// Вывод: {i: 1, a: 4, e: 3, o: 3, u: 1};

// Задание №14
// Напишите функцию которая принимает в качестве аргумента массив состоящий из объектов
// (с элементами в виде ключей и значений), а также две новые строки.
// И добавляет новую пару ключ и значение, состоящих из указанных строк,
// к каждому из объектов массива
// Например: myFunc([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
// Вывод:[{name: 'Elie', title:'instructor'},
// {name: 'Tim', title:'instructor'},
// {name: 'Matt', title:'instructor'},
// {name: 'Colt', title:'instructor'}]

// Задание №15
// Вам даны два массива состоящих из чисел, длина массивов >= 1,
// напишите функцию которая возвращает true если сумма квадратов
// каждого элемента в первом массиве больше чем сумма кубов каждого
// элемента второго массива.
// Использовать метод reduce()

// Например: [4, 5, 6], [1, 2, 3]
// Вывод: true, т.к (4 ** 2 + 5 ** 2 + 6 ** 2) > (1 ** 3 + 2 ** 3 + 3 ** 3)


