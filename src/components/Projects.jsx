import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* ✅ Section Heading */}
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* ✅ Projects Grid */}
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* 🔹 Project 1 — Real-Time Chat App */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/realtime.webp')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          ></motion.div>

          <div className="project-content">
            <h3>Real-Time Chat Application</h3>
            <p>
              A fast and secure real-time chat app built with modern web
              technologies, enabling seamless one-on-one and group
              conversations with live message updates, typing indicators, and
              user presence tracking.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Socket.IO</span>
            </div>
          </div>
        </motion.div>

        {/* 🔹 Project 2 — Movie Discovery App */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/hero-bg.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          ></motion.div>

          <div className="project-content">
            <h3>Movie Discovery App</h3>
            <p>
              A dynamic movie discovery platform that allows users to explore
              trending, popular, and upcoming films using TMDB API integration —
              complete with detailed info, search, and responsive UI.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>TMDB API</span>
              <span>TailwindCSS</span>
            </div>
          </div>
        </motion.div>

        {/* 🔹 Project 3 — Regression Analytics */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/analytics.webp')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          ></motion.div>

          <div className="project-content">
            <h3>Intelligent Regression Analytics</h3>
            <p>
              A predictive analytics dashboard powered by regression models that
              visualize data trends and forecast key metrics with AI-driven
              accuracy, featuring dynamic charts and insights.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>React.js</span>
              <span>Scikit-learn</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
