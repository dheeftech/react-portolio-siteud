import React from "react";
import "./Services.css";

function Services() {
  return (
    <div>
      <div className="services-container">
        <div className="services-list-container">
          <div className="services-desc-container">
            <h1>
              My Awesome <span>Services</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              illo facilis, odit molestias maxime corporis eum adipisci ullam
              maiores iste omnis repudiandae saepe at pariatur rem eligendi
              voluptatum, quasi iusto exercitationem iure, corrupti nostrum amet
              dignissimos? Nostrum praesentium nisi eaque fugiat doloribus quia
              aliquid voluptatum quas, nobis reprehenderit animi sequi itaque
              expedita! Cum error amet rerum sequi earum velit nesciunt!
            </p>
            <button>Hire Me</button>
          </div>
          <div className="services-item-container">
            <div className="services-item">
              <i className="fa-solid fa-code"></i>
              <div className="item-desc">
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque quam magnam dolorum ex enim a? Aperiam, quia.
                  Dignissimos fugiat praesentium accusantium quae tempora fugit
                  ipsam et quos quaerat vero quis in neque, repudiandae
                  blanditiis. Laudantium neque corrupti sed consequuntur nulla?
                </p>
              </div>
            </div>
            <div className="services-item">
              <i className="fa-solid fa-desktop"></i>
              <div className="item-desc">
                <h3>Desktop Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque quam magnam dolorum ex enim a? Aperiam, quia.
                  Dignissimos fugiat praesentium accusantium quae tempora fugit
                  ipsam et quos quaerat vero quis in neque, repudiandae
                  blanditiis. Laudantium neque corrupti sed consequuntur nulla?
                </p>
              </div>
            </div>
            <div className="services-item">
              <i className="fa-solid fa-mobile"></i>
              <div className="item-desc">
                <h3>Mobile Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque quam magnam dolorum ex enim a? Aperiam, quia.
                  Dignissimos fugiat praesentium accusantium quae tempora fugit
                  ipsam et quos quaerat vero quis in neque, repudiandae
                  blanditiis. Laudantium neque corrupti sed consequuntur nulla?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
