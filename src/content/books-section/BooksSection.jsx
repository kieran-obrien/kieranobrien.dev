import Books from "./Books";

const BooksSection = () => {
  return (
    <div className="">
      <section id="books" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-[IBM_Plex_Mono] text-center mb-5">
          Books
        </h2>
        <h2 className="text-xl font-bold font-[IBM_Plex_Mono] text-center mb-12">
          What I've read this year - Fetched from Google Books API
        </h2>
        <Books />
      </section>
    </div>
  );
};

export default BooksSection;
