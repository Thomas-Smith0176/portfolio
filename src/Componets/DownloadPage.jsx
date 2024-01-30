import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Accordion from "./Accordion";
import downloadImg1 from "../assets/download-demo-content/demo-1.jpg";
import downloadImg2 from "../assets/download-demo-content/demo-2.jpg";
import downloadImg3 from "../assets/download-demo-content/demo-3.jpg";
import downloadImg4 from "../assets/download-demo-content/demo-4.jpg";
import downloadImg6 from "../assets/download-demo-content/demo-6.jpg";
import downloadImg7 from "../assets/download-demo-content/demo-7.jpg";

const DownloadPage = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.3, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <section className="project">
        <div className="project-header">
          <h1>Download</h1>
          <h2>User driven news</h2>
        </div>
        <div className="project-body">
          <text>
            The goal of this project was to create a social media/news site with
            functionality similar to apps such as Reddit, allowing users to vote
            and comment on articles, as well as sorting the content they consume
            based on their interests.
          </text>

          <div className="accordions">
            <Accordion
              title={"App Features"}
              content={
                <ul>
                  <li>
                    Home page displaying all articles, designed with variable
                    layouts for mobile and desktop.
                  </li>
                  <li>
                    Functionality for users to switch accounts, post and delete
                    comments, and vote on articles and comments.
                  </li>
                  <li>
                    Search options allowing uses to filter articles by
                    newest/oldest and most/least popular.
                  </li>
                  <li>Individual pages for articles based on their topic.</li>
                </ul>
              }
            />
            <Accordion
              title={"Tech Stack"}
              content={
                <ul>
                  <li>
                    Download's front-end was developed with React with it's
                    styling accomplished using a combination of pure CSS and the
                    React Bootstrap library.
                  </li>
                  <li>
                    The back-end is served by an Express API, which you can read
                    more about{" "}
                    <a className="apiPageLink" href={"/projects/api"}>
                      here.
                    </a>
                  </li>
                </ul>
              }
            />
          </div>
          <div className="hyperlink">
            <a
              href="https://github.com/Thomas-Smith0176/download-news"
              target="_blank"
            >
              Check out the repo
            </a>
          </div>
          <div className="hyperlink">
            <a
              href="https://download-news.netlify.app"
              target="_blank"
            >
              Try Download
            </a>
          </div>

          <Carousel
            className="carousel"
            showThumbs={false}
            showStatus={false}
            width={"100%"}
          >
            <div>
              <img src={downloadImg1} className="carousel-img-horiz" />
            </div>
            <div>
              <img src={downloadImg2} className="carousel-img-horiz" />
            </div>
            <div>
              <img src={downloadImg6} className="carousel-img-horiz" />
            </div>
            <div>
              <img src={downloadImg7} className="carousel-img-horiz" />
            </div>
            <div>
              <img src={downloadImg3} className="carousel-img" />
            </div>
            <div>
              <img src={downloadImg4} className="carousel-img" />
            </div>
          </Carousel>
        </div>
      </section>
    </motion.main>
  );
};

export default DownloadPage;
