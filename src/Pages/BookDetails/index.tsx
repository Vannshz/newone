import BookDetail from "../../components/templates/BookDetail/index";
import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import BookDescription from "../../components/organisms/BookDescription/BookDescription";

const BookDetailPage = () => {
  return (
    <BookDetail
      header={<Header />}
      bookView={<BookDescription />}
      footer={<Footer />}
    />
  );
};

export default BookDetailPage;
