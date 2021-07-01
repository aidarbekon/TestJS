
// let arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
// for(let i = 0; i < arr.length; i++){
    //     console.log(arr[i]);
    // }
    
    
// // forEach()
// arr.forEach((item , index, array) => {
    // console.log(item);
    // console.log(index);
//     console.log(array);
    // console.log(item * 2);
// })
// newArr = arr.map((item) => {
//     return item + 10
// } )
// console.log(newArr);

// // map 
// arr.map((item, index, array) => {
    // console.log(item);
    // console.log(index);
    // console.log(array);
// })

// Отличие мэпа от форича в том что мэп может создать новый массив!!!!




// // FILTER 
// let newArr = arr.filter((item, index, array) => {
//     return item > 4
// })
// console.log(newArr);

// let newArr = arr.filter(item => {
//     return 4 % 2 === 0
// })
// console.log(newArr);

 

// let arr = ['Js8', 'JS9', 'JS10', 'Js11'];

// let sum = 0
// arr.forEach((item, index, array) => {
//     // let sum = 0
//     console.log(item);
//     sum++ 
//     console.log(sum );
// })


// arr.forEach((item, index) => {
//     console.log(item, index);
// })


// let newArr = arr.map((item) => {
//     return item +'+'
// })

// let newArr = arr.map(item => item +'+')
// console.log(newArr);

// let newArr = [];
// arr.forEach((item) => {
//         newArr.push(item +'+')})
    
//     console.log(newArr);



// let students = ['Sanjar', 'Beksultan', 'Aelita'];
// let newStudents = students.filter(item => {
//     return item !== 'Sanjar'
// })
// console.log(newStudents);












// Задание №5
//   Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:


// let task5 = [4, 5, 4, 5, 5, 5, 2, 3, 1, 3, 3];
// let cnt = [];

// for (let i = 0; i < task5.length; i++) {
//   cnt[i] = 0;
//   for (let c = 0; c < task5.length; c++) {
//     if (task5[i] == task5[c]) {
//       cnt[i] += 1;
//     }
//   }
// }
// console.log(Math.max.apply(null, cnt));


// let task5 = [4, 5, 4, 5, 5, 5, 2, 3, 1, 3, 3];
// let obj = {};
// let maxRepeat = task5.forEach((item) => {
//     if(obj[item]){
//         obj[item]++
//     }else{
//         obj[item] = 1
//     }
// })
// console.log(obj);



// Задание №13


// Дан массив состоящий из чисел, а также больших чисел(bigInt)
// Сумма всех цифр внутри числа, будет равна ASCII номеру определенной буквы.
// Пример:
// Ввод: let arr = [584131398786538461382741, 444521974525439455955, 71415168525426614834414214, 353238892594759181769, 48955328774167683152, 77672648114592331981342373, 5136831421236, 83269359618185726749, 2554892676446686256, 959958531366848121621517, 4275965243664397923577, 616142753591841179359, 121266483532393851149467, 17949678591875681]
//Вывод: в данном массиве зашифрована фраза - secret-message


// Раскодируйте фразу из массива ниже, используя map(), reduce()


// let arr = [
//     436450905757958151n,
//     11258783099996076460563n,
//     4271648547630677847351n,
//     618958267230480336590096n,
//     8758497946868448n,
//     522605576771949556944035n,
//     85066202249185099169760853n,
//     3086832757126n,
//     996521n,
//     927960635227601913n,
//     70078548120507149395588131n,
//     860837n,
//     358019731380917077399530102n,
//     62039800138267504261751603735n,
//     9750891479584997n,
//     918662n,
//     65327012964727042243717157n,
//     232087621279086322105118092n,
//     5211980170217154619622689642n,
//     6124973n,
//     86411816655484980296n,
//     91315560975533164408650219064n,
//     622020778302918273675482n,
//     810589171448852275032504861n,
//     444121583n,
//     33430239609682594751236n,
//     185623925354270032483460275221n,
//     7868767990756882313n,
//     4657463770033462099583n,
//     242033234081n,
//     522740644841373392917114n,
//     406008262691140304161593616100211362n,
//     568510122451787635388154655n,
//     5578397767326623013150481034n,
//     555640745510125078573784n,
//     406901355248415157672497n,
//     88558845201718547978n,
//     68574135720461824293161323n,
//     3676244n,
//     5042122205391979386680691n,
//     73395510612321053412266453664n,
//     24406073369262079776782n,
//     7422295137177317668814n,
//     158882n,
//     372566226366055183434756092n,
//     217801045092586396416854n,
//     387064459629162985218n,
//     27921983810840242015693511824n,
//     1644125056804n,
//     5379171082171129383n,
//     6750612981549243200995103n,
//     32412900856868128268020217613n,
//     479858287n,
//     6096272n,
//     454320294201191419460256n,
//     293398766039677586n,
//     30652983692459763541n,
//     82882672765594704813185n,
//     92583381n,
//     43343754351489585033783532n,
//     1299335n,
//     254078966874894178015532n,
//     129278851477373713752221n,
//     1324382354724457193161741158451n,
//     341401685n,
//     5457110999302082592077217n,
//     95066071456345657725316571n,
//     743409212n,
//     988517320507018868694n,
//     190928581430131876371881026012n,
//     8690621n,
//     9915740590818375796n,
//     13374845638424941804172067n,
//     4729159847810460863472n,
//     4416521647100742520187956283n,
//     29941458499424421700564n,
//     7523244131n,
//     224344126317666108716556700814n,
//     529253721025532996042429751n,
//     867344n,
//     11654415332705915327940693482n,
//     48018003472901929981390383n,
//     2866645196951814499551n,
//     20726910437738542761337334n,
// ];

// let res = arr.map(elem => {
//     elem = elem.toString().split('')
//     return elem.reduce((total, num) => {
//         return total + Number(num)
//     }, 0)
// })
// console.log(res);

// res = res.map(elem => {
//     return String.fromCharCode(elem)
// })
// console.log(res);
// console.log(res.join(''));


// / Задание №14
// Напишите функцию, которая может превратить текст в нумеронимы
// Пример:
// Ввод:
// const input =
// 'Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!';


// Вывод:
// С5й п2ь у п11, Т4о г2е - не б3, Е2и в4л п2ь т7й - То т3а т2е - с3!
// т.е. каждое слово, если оно длинее 4х букв, превращается в нумероним, внутри которого, между крайними буквами - будет число, обозначающее количество букв между крайними буквами


// const createNumeronym = word => word[0] + (word.length - 2) + word [word.length - 1];

// const some = input.split(' ').map(function(word) {
//     if(word.length >= 4){
//         return createNumeronym(word)
//     }
//     return word
// }).join(' ')
// console.log(some);

// Задание №6
// Напишите функцию которая возвращает массив из 4 функций;
//   •  первая увеличивает счетчик( переменная i )  на 1
//   •  вторая уменьшает на 1
//   •  третья умножает на 2
//   •  четвёртая делит на 2

//  **сделать задание при помощи замыкания!!


// let ar = (a) =>{
//     let arr = [b(), c(), d(),f()]
//     function b (){
//         return a + 1;
//     }
//     function c (){
//         return a - 1;
//     }
//     function d (){
//         return a * 2;
//     }
//     function f (){
//         return a / 2;
//     }
//     console.log(arr);
// }
// ar(4)

// function wordReverse(word, revWord){
//     if(word === '') return revWord;
//     return wordReverse(
//         word.substr(0, word.length - 1),
//         revWord + word.charAt(word.length - 1)
//     )
// }
// console.log(wordReverse('Hell oWorld', '' ));


// Функция (назовём её nick), возвращаемая из внешней функции makePassword, представляет собой замыкание с окружением, содержащим свободную переменную password.
// Мы передаем функции makePassword значение rightly, которое сохраняется в окружении замыкания: var tryNick = makePassword("rightly")
// При вызове tryNick переданное слово ("wrong" или "rightly") сравнивается со значением password в окружении tryNick.

// function makePassword(password){
//     return function nick(passwordGuest){
//        return password = passwordGuest
//     }
// }

// let tryNick = makePassword('rightly')
// console.log(tryNick('rightly'));
// console.log(tryNick('wrong'));


// let str = 'Ivan, Misha, Andrei, Oleg, Aktan';
// // let newArr = str.split(', ')
// let filteredArr = str.split(', ').filter(item =>{
//     // return item.length > 4
//     return /a/gi.test(item)
// })
// console.log(filteredArr);
// // console.log(newArr);


// indexOf

// let arr = ['Ivan', 'Misha', 'Andrei', 'Oleg', 'Aktan'];
// let index = arr.indexOf('Misha', 4)
// console.log(index);

// FindIndex

// let index = arr.findIndex((item,index,array) => {
//     return item.length === 5
// })
// console.log(index);

// let arr = [
//     {
//         name:'John'
//     },
//     {
//         name:'Aiowa'
//     },
//     {
//         name:'Oleg'
//     },
//     {
//         name:'Aktan'
//     },
//     {
//         name:'Emilie'
//     }
// ]

// find()
// console.log(arr.find(item => item.name ==='Oleg'));
// console.log(arr.findIndex(item => item.name ==='Oleg'));


// every
// let ar = [1, 2, 3, 4, 5, '23', 53];
// let result = arr.every((item, index, array) =>{
//     return typeof item ==='number'
// })
// console.log(result);

// some

// let ar = [1, 2, 3, 4, 5, '23', 53];
// let result = ar.some((item) => {
//     return typeof item ==='string'
// })
// console.log(result);


// includes(elem, fromIndex)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// let result = arr.includes(4, 5);
// console.log(result);

// reduce()
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, currVal, currIndex, array ) => {
    // console.log(currIndex);
    // console.log(currVal);
    // console.log(prevVal);
//     console.log(array);
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((a, b) =>{
    // console.log(a);
    // return a + b
//     return [...a, b]
// }, [])
// console.log(result);













