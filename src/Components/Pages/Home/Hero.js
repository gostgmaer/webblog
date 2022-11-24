import React from "react";
import { FaReact } from "react-icons/fa";

const Hero = () => {
  return (
    <div class="px-4 py-5 border text-center">
      <FaReact className="d-block mx-auto mb-4 h-10" height="100"></FaReact>
      <h1 class="display-5 fw-bold">Centered hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
           Sign up
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            View Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
