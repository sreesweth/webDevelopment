import { Book, BookTypeEnum, BookCatergory } from './books';
import { Phone } from './books';

    
    let myPhone = new Phone(568956, 'cord Less' );
    myPhone.isDailTone = true;
    myPhone.makeACall(457895);
    console.log(myPhone.number);
    let myresult: number = myPhone.addTwoNumber(86, 1547);
   

    let myMomsPhone = new Phone(568956);
    myMomsPhone.isDailTone = false;




    let listOfBooks: Array<Book> = [
        {
            itemId: 1,
            title: 'Daniel Plan',
            discription: 'The Tried and Tested Dietary Plan to Change Your Life.',
            price: 2.99,
            imageLink: './images/health/HealthPlan.jpg',
            isAvailable: true,
            bookLink: './daniel-plan.html'
        },
        {
            itemId: 2,
            title: 'Soul Healing',
            discription: 'A Guide to a Happy and Healthy Life by Basic Lifestyle Changes.',
            price: 1.99,
            imageLink: './images/health/Soul.jpg',
            isAvailable: true,
            bookLink: 'soul-healing.html'
        },
        {
            itemId: 3,
            title: 'Wheat Belly',
            discription: 'Wheat – The Real Wonder Food for the 21st Century.',
            price: 0.99,
            imageLink: './images/health/WheatBelly.jpg',
            isAvailable: true,
            bookLink: './wheatBelly.html'
        },
        {
            itemId: 4,
            title: 'Exercise Cure',
            discription: "A Doctor's All natural Solution to Better Health and a Longer Life",
            price: 0.99,
            imageLink: './images/health/Noexercise.jpg',
            isAvailable: true,
            bookLink: './the-exercise-cure.html'
        }
    ];
    

   function createBooksTable() {
        let booksTable = ``;
        
        listOfBooks.forEach(function(book, i){

            if(i === 0 || ( i % 2) === 0 ) { //= and == and === /strict
                booksTable = booksTable + '<tr>'
            }
           
            booksTable = `${booksTable} 
                            <td class="image"> <img src="${book.imageLink}"> </td> 
                            <td><a href="${book.bookLink}">${book.title}</a> <td>`;

            if(( i % 2) !== 0 || i+1 === listOfBooks.length) {
                booksTable = booksTable + '</tr>';
            }
        });
        let element = document.getElementById('healthTable')
        element.innerHTML = booksTable;
    }
    
    createBooksTable();

