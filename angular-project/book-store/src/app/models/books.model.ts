
export class Book {
    itemId: number;
    title: string;
    description?: string;
    price: number;
    isAvailable: boolean;
    imageLink: string;
    bookLink: string;
    catagory: CategoryEnum;
    noOfBooks?: number;
}

export enum CategoryEnum {
    Health = 'health',
    Programming = 'programming',
    Parenting = 'parenting',
    Finance = 'finance'
}

export const listOfBooks: Array<Book> = [
    {
        itemId: 1,
        title: 'Daniel Plan',
        description: 'The Tried and Tested Dietary Plan to Change Your Life.',
        price: 2.99,
        imageLink: './assets/images/health/healthPlan.jpg',
        isAvailable: true,
        bookLink: './daniel-plan.html',
        catagory: CategoryEnum.Health
    },
    {
        itemId: 2,
        title: 'Soul Healing',
        description: 'A Guide to a Happy and Healthy Life by Basic Lifestyle Changes.',
        price: 1.99,
        imageLink: './assets/images/health/Soul.jpg',
        isAvailable: true,
        bookLink: 'soul-healing.html',
        catagory: CategoryEnum.Health
    },
    {
        itemId: 3,
        title: 'Wheat Belly',
        description: 'Wheat – The Real Wonder Food for the 21st Century.',
        price: 0.99,
        imageLink: './assets/images/health/WheatBelly.jpg',
        isAvailable: true,
        bookLink: './wheatBelly.html',
        catagory: CategoryEnum.Health
    },
    {
        itemId: 4,
        title: 'Exercise Cure',
        description: "A Doctor's All natural Solution to Better Health and a Longer Life",
        price: 0.99,
        imageLink: './assets/images/health/Noexercise.jpg',
        isAvailable: true,
        bookLink: './the-exercise-cure.html',
        catagory: CategoryEnum.Health
    },
    {
        itemId: 5,
        title: 'What To Expect',
        description: "A Health and Exercise Guide for Expecting Mothers ",
        price: 3.99,
        imageLink: './assets/images/parenting/expect.jpg',
        isAvailable: true,
        bookLink: './the-exercise-cure.html',
        catagory: CategoryEnum.Parenting
    },
    {
        itemId: 6,
        title: 'The First Year',
        description: "Become a Multi-Tasking Mama with Less Stress",
        price: 1.99,
        imageLink: './assets/images/parenting/expect1.jpg',
        isAvailable: true,
        bookLink: './the-exercise-cure.html',
        catagory: CategoryEnum.Parenting
    },
    {
        itemId: 7,
        title: 'Hands Free Mama',
        description: "Become a Multi-Tasking Mama with Less Stress ",
        price: 0.99,
        imageLink: './assets/images/parenting/Mama.jpg',
        isAvailable: false,
        bookLink: './the-exercise-cure.html',
        catagory: CategoryEnum.Parenting
    },
    {
        itemId: 8,
        title: 'Talk to Kids',
        description: "A Guide to Communicating with Your Children",
        price: 2.99,
        imageLink: './assets/images/parenting/talk.jpg',
        isAvailable: true,
        bookLink: '../../../../../assets/the-exercise-cure.html',
        catagory: CategoryEnum.Parenting
    }
];
// Modules, Components, Services, Pipes, Routing
