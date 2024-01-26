import { BooksManager, Books } from "../app/users/BooksManagerManager";

describe("basic Test Suite", () => {

  let BooksManager:BooksManager

  beforeEach(()=> {
    BooksManager = new BooksManager()
  });

  it("Test if an ID alredy exist", () => {
    // ARRANGE
    BooksManager.addBooks({
      id: 1, 
      name: "Jane Doe", 
      email: "janedoe@gmail.com"

    });
    
    // ACT
    const addBooksAction = () => BooksManager.addBooks({
      id: 1, 
      name: "Jane Doe", 
      email: "janedoe@gmail.com"
    });

    // ASSERT
    expect(addBooksAction).toThrow("User ID already exists");
  });

  it("Test if an emailcis already used", () => {
    // ARRANGE
    BooksManager.addBooks({
      id: 1, 
      name: "Jane Doe", 
      email: "janedoe@gmail.com"

    });
    
    // ACT
    const addBooksAction = () => BooksManager.addBooks({
      id: 2, 
      name: "John Doe", 
      email: "janedoe@gmail.com"
    });

    // ASSERT
    expect(addBooksAction).toThrow("User email already exists");
  });

  it("Test if a user is deleted", () => {
    // ARRANGE

    BooksManager.addBooks({
      id: 1, 
      name: "Jane Doe", 
      email: "janedoe@gmail.com"

    });

    BooksManager.removeBooks(1);
    
    // ACT
   const lenght = BooksManager.getAllBooks().length

    // ASSERT
    expect(lenght).toBe(0);
  });

  it("Test if a user is found", () => {
    // ARRANGE

    BooksManager.addBooks({
      id: 1, 
      name: "Jane Doe", 
      email: "janedoe@gmail.com"

    });

    BooksManager.findUserById(1)
    
    // ACT
   const Books = BooksManager.searchBooksByName('Jane Doe')

    // ASSERT
    expect(Books[0].id).toBe(1);
  });

  
});
