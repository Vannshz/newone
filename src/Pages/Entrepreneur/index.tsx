import Entreprenuer from "../../components/templates/Entrepreneurs/index";
import Header from "../../components/organisms/Header/Header";
import Banner from "../../components/molecules/Banner/Banner";
import { useState } from "react";
import Sizes from "../../components/organisms/SearchBarFunction"
import DisplayCard from "../../components/organisms/DisplayCards/index";
import Footer from "../../components/organisms/Footer/Footer";
import BookData from "../../data/Library";
import Constants from "../../data/Constants";



const EntrepreneurPage = () => {
  const[ftitle, setTitle] = useState('')
  return (
    <Entreprenuer
      header={<Header />}
      banner={<Banner />}
      sizes={<Sizes setTitle={setTitle} />}
      firstSection={
        <DisplayCard
          title={Constants.entrepreneur.heading1}
          data={BookData}
          state="trending"
          ftitle={ftitle}
        />
      }
      secondSection={
        <DisplayCard
           title={Constants.entrepreneur.heading2}
          data={BookData}
          state="just added"
          ftitle={ftitle}
        />
      }
      thirdSection={
        <DisplayCard
           title={Constants.entrepreneur.heading3}
          data={BookData}
          state="featured"
          ftitle={ftitle}
        />
      }
      footer={<Footer />}
    />
  );
};

export default EntrepreneurPage;
