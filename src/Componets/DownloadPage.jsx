import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Accordion from "./Accordion";
import downloadImg1 from "../assets/download-demo-content/demo-1.jpg";
import downloadImg2 from "../assets/download-demo-content/demo-2.jpg";
import downloadImg3 from "../assets/download-demo-content/demo-6.jpg";
import downloadImg4 from "../assets/download-demo-content/demo-7.jpg";
import downloadImg5 from "../assets/download-demo-content/demo-mobile.png";
import Sidebar from "./Sidebar";

const DownloadPage = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.0, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <section className="project">
        <div className="project-body">
          <div className="header-top">
          <h1>Download</h1>
      <Sidebar/>
          </div>
          <h2>User driven news</h2>
          <div className="project-text">
          <text>
            The goal of this project was to create a social media/news site with
            functionality similar to apps such as Reddit, allowing users to vote
            and comment on articles, as well as sorting the content they consume
            based on their interests.
          </text>
          </div>

          <div className="hyperlink">
            <a
              href="https://github.com/Thomas-Smith0176/download-news"
              target="_blank"
              className="repo-link"
            >
              Check out the repo
            </a>
            <a
              href="https://download-news.netlify.app"
              target="_blank"
              className="app-link"
            >
              Try Download
            </a>
          </div>

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
                    Download's front-end was developed with React with its
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
              <img src={downloadImg3} className="carousel-img-horiz" />
            </div>
            <div>
              <img src={downloadImg4} className="carousel-img-horiz" />
            </div>
            <div>
              <img src={downloadImg5} className="carousel-img-horiz" />
            </div>
          </Carousel>
        </div>
      </section>
    </motion.main>
  );
};

export default DownloadPage;
