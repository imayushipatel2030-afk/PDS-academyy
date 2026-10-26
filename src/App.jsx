
import { Routes, Route } from "react-router";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WhyChoosePDS from "./Components/Whychoosepds";
import Courses from "./Components/Courses";
import StudentWork from "./Components/Studentwork";
import About from "./Components/About";
import Enquiry from "./Components/Enquiry";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import CoursesPage from "./Components/CoursesPage";
import Vediolibrary from "./Components/VedioLibrary";
import Student from "./Components/Student";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              <WhyChoosePDS />

              <Courses />

              <StudentWork />

              <About />

              {/* ENQUIRY SECTION */}
              <section id="enquiry" className="scroll-mt-24">
                <Enquiry />
              </section>

              {/* REVIEWS SECTION */}
              <section id="reviews" className="scroll-mt-24">
                <Reviews />
              </section>

              <Footer />
            </>
          }
        />

        {/* COURSES PAGE */}
        <Route
          path="/courses"
          element={<CoursesPage />}
        />

        {/* ENQUIRY PAGE */}
        <Route
          path="/enquiry"
          element={<Enquiry />}
        />

        {/* VIDEO LIBRARY PAGE */}
        <Route
          path="/vediolibrary"
          element={<Vediolibrary />}
        />

        {/* STUDENT WORK PAGE */}
        <Route
          path="/student"
          element={<Student />}
        />
      </Routes>
    </div>
  );
}

export default App;
