import React from 'react'
import './AboutUs.css'
import vidio from '../../assets/img/Video Section.png'
import block1 from '../../assets/img/block1.png'
import block2 from '../../assets/img/block2.png'
import block3 from '../../assets/img/block3.png'
import one1 from '../../assets/img/1.png'
import one2 from '../../assets/img/2.png'
import one3 from '../../assets/img/3.png'
import one4 from '../../assets/img/4.png'
import Slider from '../../assets/img/Slider.png'
import Navbar from 'compoment/Navbar/Navbar'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="container_in">
            <Navbar />
          </div>
          <div className="center">
            <h1>it проект это</h1>

            <div className="center_text">
              <h5>
                ИТ-проект – это
                <br />
                краткосрочное усилие по созданию уникального продукта,
                <br />
                сервиса или среды
              </h5>
            </div>
            <Link to="/login">
              <button className="center_button">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="second_container">
        <div className="container">
          <div className="container_in">
            <div className="second">
              <div className="second_left">
                <h2>Наша команда</h2>
                <span>
                  это опытные специалисты, хорошо разбирающиеся во всех задачах,
                  которые ложатся на их плечи, и умеющие находить выход из
                  любых, даже самых сложных ситуаций. Высокий уровень
                  профессионализма позволяет нам не просто качественно выполнять
                  свою работу, но добиваться именно того, чего ждут от нас
                  клиенты.
                </span>
                <a href="https://www.grizzlyb2b.ru/our_team/">Читать дальше</a>
              </div>
              <div className="second_right">
                <img src={vidio} alt="Video Section" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third_container">
        <div className="container">
          <div className="container_in">
            <div className="third">
              <h2>У нас есть что тебе нужно</h2>
              <div className="third_block">
                <div className="third_block__item">
                  <div className="third_block__img">
                    <img src={block1} alt="block1" />

                    <div className="third_text">
                      <div className="third_text__box">
                        <h4>денег нет тогда к нам</h4>
                        <p>тогда к нам</p>
                        <a href="Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgoIIRAWEB4QDxAdOgoIABBHENYEELADOggILhCABBDLAToICAAQgAQQywE6FgguEIAEEMsBEJcFENwEEN4EEOAEGAE6BggAEBYQHjoICCEQFhAeEB06BwghEKABEAo6BAghEBVKBAhBGABQoAFYiqACYJ2lAmgEcAF4AoABpgWIAcpCkgEMMC44LjE2LjQuMC4zmAEAoAEByAEIwAEB2gEGCAEQARgU">
                          Читать дальше
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="third_block__item">
                  <div className="third_block__img">
                    <img src={block2} alt="block2" />

                    <div className="third_text">
                      <div className="third_text__box">
                        <h4>нету знакомых</h4>
                        <p>тогда к нам</p>
                        <a href="Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgoIIRAWEB4QDxAdOgoIABBHENYEELADOggILhCABBDLAToICAAQgAQQywE6FgguEIAEEMsBEJcFENwEEN4EEOAEGAE6BggAEBYQHjoICCEQFhAeEB06BwghEKABEAo6BAghEBVKBAhBGABQoAFYiqACYJ2lAmgEcAF4AoABpgWIAcpCkgEMMC44LjE2LjQuMC4zmAEAoAEByAEIwAEB2gEGCAEQARgU">
                          Читать дальше
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="third_block__item">
                  <div className="third_block__img">
                    <img src={block3} alt="block3" />

                    <div className="third_text">
                      <div className="third_text__box">
                        <h4>нет места работы</h4>

                        <p>тогда к нам</p>
                        <a href="Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgoIIRAWEB4QDxAdOgoIABBHENYEELADOggILhCABBDLAToICAAQgAQQywE6FgguEIAEEMsBEJcFENwEEN4EEOAEGAE6BggAEBYQHjoICCEQFhAeEB06BwghEKABEAo6BAghEBVKBAhBGABQoAFYiqACYJ2lAmgEcAF4AoABpgWIAcpCkgEMMC44LjE2LjQuMC4zmAEAoAEByAEIwAEB2gEGCAEQARgU">
                          Читать дальше
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="four_container">
        <div className="container_bottom">
          <div className="container_in">
            <h2 id="Technology">Technology</h2>
            <div className="four">
              <div className="four_img">
                <div className="four_img__item">
                  <img className="four_img_one" src={one1} alt="" />
                  <h3>Cloud Storage</h3>
                  <p>
                    Access your account from anywhere in the world on any device
                  </p>
                </div>

                <div className="four_img__item">
                  <img className="four_img_one" src={one2} alt="" />
                  <h3>Secure</h3>
                  <p>All your information is stored on secure cloud servers</p>
                </div>

                <div className="four_img__item">
                  <img className="four_img_one" src={one3} alt="" />
                  <h3>PDF Download</h3>
                  <p>Download any of your reports in PDF format</p>
                </div>
                <div className="four_img__item">
                  <img className="four_img_one" src={one4} alt="" />
                  <h3>CSV Download</h3>
                  <p>All your information is stored on secure cloud servers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="second__container">
          <div className="container_in">
            <div className="second_two">
              <div className="second">
                <div className="second_left">
                  <h2>Наш офис</h2>
                  <span>
                    В офисе есть две переговорные комнаты: маленькая и большая.
                    По пятницам в большой переговорной коллеги часто проводят
                    время вместе за настольными играми или приставкой. В нашем
                    офисе есть удобная кухня с кофемашиной, посудомойкой,
                    холодильником и микроволновками. Можно брать с собой
                    домашнюю еду и спокойно обедать, не выходя из офиса!
                  </span>
                  <div className="second_left__img">
                    <a href="">
                      <img src="./img/playstore.png" alt="" />
                    </a>
                    <a href="">
                      <img src="./img/appstore.png" alt="" />
                    </a>
                    <a href="">
                      <img src="./img/windows.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="second_right">
                  <div className="image.png">
                    <img src={Slider} alt="Slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container_in"></div>

        <div className="fifth">
          <div className="fifth_left">
            <h3>Contact</h3>
            <p>
              Questions or concerns? Just fill out the form below and our
              support team will get back to you within 24 hours
            </p>
          </div>
          <div className="fifth_right">
            <div className="fifth_right__input">
              <input placeholder="First Name" type="First Name" />
              <input placeholder="Last Name" type="Last Name" />
            </div>
            <input placeholder="Phone Number" type="Phone Number" />
            <input placeholder="Select Service" type="Select Service" />
            <button>Submit Now</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container_in">
          <footer>
            <div className="footer_item">
              <div className="footer_item__text">
                <h3>Address</h3>
                <a href=""> Pipang Ltd, Griva Digeni, </a>
                <a href=""> 81-83 Jacovides Tower, 1st </a>
                <a href=""> Floor 1090Picosia USA </a>
                <p>Copyright 2018 CloudBudget</p>
              </div>
              <div className="footer_item__text">
                <h3>Services</h3>
                <a href=""> Overview </a>
                <a href=""> Features </a>
                <a href=""> Technology </a>
                <a href=""> Terms & Conditions</a>
                <a href=""> Privecy </a>
              </div>
              <div className="footer_item__text">
                <h3>Get in Touch</h3>
                <a href=""> info@cloudbudget.com </a>
                <a href=""> +1 844-721-7120 </a>
                <div className="footer_item__img">
                  <img src="./img/facebook.png" alt="" />
                  <img src="./img/in.png" alt="" />
                  <img src="./img/twitter.png" alt="" />
                </div>
              </div>
              <div className="footer_item__text">
                <h3>We Support</h3>
                <img src="./img/secure-p-1 1.png" alt="" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default AboutUs
