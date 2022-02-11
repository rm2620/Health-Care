import React from "react";
import { useHistory } from "react-router-dom";

function Carousel() {
  const history = useHistory();

  return (
    <div>
      <div className="home__mobile">
        <img
          className="mobile__image"
          src="https://www.fortinet.com/blog/industry-trends/recent-healthcare-regulations-and-guidelines-providers-should-be/_jcr_content/root/responsivegrid/text_image.img.jpeg/1522185186931/recent-healthcare-regulations-and-guidelines-providers-should-be-aware-of.jpeg"
          alt=""
        />
      </div>

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="home__image"
              src="https://www.business.rutgers.edu/sites/default/files/styles/hero_detail_1200x500_/public/images/hero/master-healthcare-intelligence-analytics.jpg?h=f97871b5&itok=mKkcWO5g"
              height={"600px"}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <figure class="text-center">
                <blockquote class="blockquote">
                  <p style={{ color: "black" }}>
                    The art of medicine consists of amusing the patient while
                    nature cures the disease.
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  {" "}
                  <cite title="Source Title">Voltaire</cite>
                </figcaption>
              </figure>
              <button type="button" class="btn btn-outline-secondary">
                Save Lives From COVID-19
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              }}
              className="home__image"
              src="http://res.cloudinary.com/imap2/image/upload/c_fill,g_auto,h_630,q_auto:eco,w_1200/v1508233134/industries/industry-healthcare.jpg"
              height={"600px"}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <figure class="text-center">
                <blockquote class="blockquote">
                  <p style={{ color: "black" }}>
                    Time and health are two precious assets that we don’t
                    recognize and appreciate until they have been depleted
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  {" "}
                  <cite title="Source Title">Denis Waitley </cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="carousel-item">
            <img
              className="home__image"
              src="https://www.paho.org/sites/default/files/styles/max_650x650/public/card/2021-02/covid-19-vaccine-789x367.jpg?itok=ZKq-BWeV"
              height={"600px"}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <p style={{ color: "black" }}>“Be safe, be smart, be kind”</p>
              <button
                type="button"
                class="btn btn-outline-secondary"
                onClick={(e) => {
                  history.push("/vaccination");
                }}
              >
                Vaccination
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
