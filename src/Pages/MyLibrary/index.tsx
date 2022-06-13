import MyLibrary from "../../components/templates/MyLibrary/index";
import Typography from "../../components/atoms/typography/Typography";
import Header from "../../components/organisms/Header/Header";
import Tabs from "../../components/organisms/Tab/index";
import Footer from "../../components/organisms/Footer/Footer";
import Constants from "../../data/Constants";

const LibraryPage = () => {
  return (
    <>
      <MyLibrary
        header={<Header />}
        heading={
          <Typography variant="h1">{Constants.header.heading}</Typography>
        }
        tab={<Tabs />}
        // footer={<Footer />}
      />
      <Footer />
    </>
  );
};

export default LibraryPage;
