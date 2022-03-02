import "../../styles.css";

const Info5 = () => {

  interface Book {
    title: string,
    writer: string
  }

  const book1: Book = {
    title: "Kruistocht in spijkerbroek",
    writer: "Thea Beckman"
  }

  const book2: Book = {
    title: "Geef me de ruimte",
    writer: "Thea Beckman"
  }

  const bookList: Book[] = [
    book1,
    book2
  ]

  bookList.forEach((book) => {
    console.log(book.title)
  })

  const bookTitles: string[] = bookList.map((book) => book.title)
  console.log({ bookTitles })

  // Voor het tonen van een lijst in JSX kun je ook een map gebruiken. Hiermee kun je een lijst met HTML-elementen genereren.
  // Dit lijstje wordt onder aan deze component gebruikt in de JSX
  const bookTitleListHTML = <ul>
    {bookList.map((book) => <li>{book.title}</li>)}
  </ul>

  const kruistocht: Book | undefined = bookList.find((book) => book.title === "Kruistocht in spijkerbroek")
  console.log({ kruistocht })

  const TheasBooks: Book[] = bookList.filter((book) => book.writer === "Thea Beckman")
  console.log({ TheasBooks })

  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>Vaak werken we bij het ophalen en verwerken van data met lijsten.</div>
      <div>Neem bijvoorbeeld een lijst met boeken.</div>
      <br />
      <div>interface Book {'{'}</div>
      <div>&nbsp;&nbsp;title: string;</div>
      <div>&nbsp;&nbsp;writer: string;</div>
      <div>{'}'}</div>
      <br />
      <div>Een lijst geven we in javascript aan met [] wat staat voor een array</div>
      <div>Een lijst met boeken zou er uitzien als:</div>
      <br />
      <div>const bookList = [</div>
      <div>&nbsp;&nbsp;{'{'}</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;title: "Kruistocht in spijkerbroek",</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;writer: "Thea Beckman"</div>
      <div>&nbsp;&nbsp;{'}'},</div>
      <div>&nbsp;&nbsp;{'{'}</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;title: "Geef me de ruimte",</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;writer: "Thea Beckman"</div>
      <div>&nbsp;&nbsp;{'}'}</div>
      <div>]</div>
      <br />
      <div>Een element uit de lijst kan worden benaderd door de plaats binnen de lijst in te vullen tussen [] achter de naam van de lijst:</div>
      <br />
      <div>Het eerste boek is dus bookList[0]. De lijst begint dus bij 0 te tellen.</div>
      <br />
      <div>Met een lijst kunnen verschillende dingen worden gedaan.</div>
      <div>De hoeveelheid elementen in de lijst kan worden opgevraagd door bookList.length</div>
      <br />
      <div>Er kan door de lijst worden geloopt door booklist.forEach((book) {'=> { nu kun je hier met elk boek iets doen }'})</div>
      <br />
      <div>Er kan van de lijst een nieuwe lijst worden gemaakt met alternatieve elementen door booklist.map((book) {'=> <div>{book.name}</div>'})</div>
      <div>Dit kun je vaak gebruiken om een lijst weg te schrijven in JSX.</div>
      <br />
      <div>Je kunt een specifiek element zoeken door booklist.find((book) {'=> { book.name === "Kruistocht in spijkerbroek" }'})</div>
      <br />
      <div>Je kunt filteren op eigenschappen door booklist.filter((book) {'=> { book.writer === "Thea Beckman" }'})</div>
      <br />
      <div>Voorbeelden hiervan staan in de code van deze component (Info5). Resultaten worden in de console getoond.</div>
      <br />
      <div>Voorbeeld van een lijstje in JSX:</div>
      <div>{bookTitleListHTML}</div>
    </div>
  );
};

export default Info5;
