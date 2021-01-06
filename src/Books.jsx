import marktwain from './images/author/marktwain.jpeg'
import josephconrad from "./images/author/josephconrad.jpg";
import jkrowling from "./images/author/jkrowling.jpg"
import stephenking from "./images/author/stephenking.jpg";
import charlesdickens from  "./images/author/charlesdickens.jpeg";
import williamshakespeare from "./images/author/williamshakespeare.jpeg";

const authors = [
    {
        name: "Mark Twain",
        imageUrl: marktwain,
        imageSource: "Wikimedia Commons",
        books: [
            "The Adventures of Huckleberry Finn",
            "Life of Mississippi",
            "Roughing It"    
        ]
    },
    {
        name: "Joseph Conrad",
        imageUrl: josephconrad,
        imageSource: "Wikimedia Commons",
        books: ["Heart of Darkness"]
    },
    {
        name: "J.K Rowling",
        imageUrl: jkrowling,
        imageSource: "Wikimedia Commons",
        books: ["Harry Potter and the Sorcerers Stone"]
    },
    {
        name: "Stephen King",
        imageUrl: stephenking,
        imageSource: "Wikimedia Commons",
        books: ["The Shining", "IT"]
    },
    {
        name: "Charles Dickens",
        imageUrl: charlesdickens,
        imageSource: "Wikimedia Commons",
        books: ["David Copperfield", "A Tale of Two Ci"]
    },
    {
        name: "William Shakespeare",
        imageUrl: williamshakespeare ,
        imageSource: "Wikimedia Commons",
        books: ["Hamlet", "Macbeth", "Romeo and Juliet"]
    }
];
export default authors;
