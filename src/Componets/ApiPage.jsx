import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import Accordion from "./Accordion";

const ApiPage = () => {
    return (
        <motion.main className="main__container"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 1.3,ease: [0.6, -0.05, 0.01, 0.99]}}>
        <section className="project">
        <div className="project-header">
        <h1>Express API</h1>
        <h2>Fully developed back-end service</h2>
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
              title={"API Features"}
              content={
                <ul>
                  <li>
                    Endpoints with data for articles, comments, and users.
                  </li>
                  <li>
                    Accepts Get, Post, Patch, and Delete HTTPS methods on almost all endpoints. 
                  </li>
                  <li>
                    Accepts queries to filter articles and comments by criteria such as author, topic, and date created.
                  </li>
                  <li>
                    Pagination functionality on articles and comments tables.
                  </li>
                </ul>
              }
            />
            <Accordion
              title={"Development"}
              content={
                <ul>
                  <li>
                    A Test Driven Development approach was used to build the API, using the Jest and Supertest libraries to test endpoints and methods during development.
                  </li>
                  <li>
                    The API was built using Express with the Model, View, Controller design methodology used to seperate functions which would communicate with the database, and those which process requests and responses.
                  </li>
                </ul>
              }
            />
          </div>
          <div className="hyperlink">
            <a
              href="https://github.com/Thomas-Smith0176/news-api"
              target="_blank"
            >
              Check out the repo here
            </a>
          </div>
          <div className="hyperlink">
            <a
              href="https://toms-news-server.onrender.com/api"
              target="_blank"
            >
              Try The API
            </a>
          </div>

          <Carousel
            className="carousel"
            showThumbs={false}
            showStatus={false}
            width={"100%"}
          >
          </Carousel>
        </div>
        </section>
        </motion.main>
    )
};

export default ApiPage; 