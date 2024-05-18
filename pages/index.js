import Image from "next/image";
import Homestyle from "@/styles/home.module.scss";

export default function Home() {
  return (
    <>
    <section className="BannerSection">
        <div className="containerBanner">
          <div className="wrapperBanner d-flex">
              <div className="leftBanner">
                  <div className="nameBanner">Hello! I'm <br/> <span>Chamini Wickramasuriya</span></div>
                  <div className="introBanner">A seasoned front-end web developer with over 5 years of experience in crafting dynamic digital solutions. My expertise spans across diverse sectors including corporate, e-commerce, government, hospitality, tours, and NGO projects, where I've excelled in delivering impactful online experiences. Currently pursuing a BIT Degree at Colombo University, I've also enriched my skill set through numerous diplomas and higher diplomas from prestigious institutions like OUSL, IJSE, and Infotec International. With a passion for innovation and a commitment to excellence, I thrive on bringing visions to life through code and creativity.</div>
                  <button className="button-resume">Get Resume</button>
              </div>
              <div className="rightBanner">
                  <div className="Imagewrap">
                    <Image src="/me.jpeg" width={400} height={500} alt="BannerMainImage"/>
                    <div class="image-half-round-shape"></div>
                    <div class="social-link">
                          <a href="https://www.example.com" target="_blank"><i class="icofont-facebook"></i></a>
                          <a href="https://www.example.com" target="_blank"><i class="icofont-dribbble"></i></a>
                          <a href="https://www.example.com" target="_blank"><i class="icofont-behance"></i></a>
                          <a href="https://www.example.com" target="_blank"><i class="icofont-linkedin"></i></a>
                      </div>
                  </div>
                  
              </div>
          </div>
        </div>
    </section>
    </>
  );
}
