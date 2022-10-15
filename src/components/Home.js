import React from "react";
import "./Home.css";
import competition from "../im1.jpg";
import logo from "../logo.png";
import kalori from "../kalory.png";
import brisk from "../Brisk.png";
import union from "../bank.png";
import talent from "../talent.jpg";

export default function Home() {
  // const arr = [
  //   "Trivia Quiz",
  //   "Parliamentary Debate",
  //   "Online Photography",
  //   "English Creative",
  //   "Music - Band",
  //   "Music - Solo",
  //   "72 Hour Movie Making",
  //   "Dance - Group",
  //   "Dance - Solo",
  //   "Street Play",
  //   "Valorant",
  //   "Fashion Show Competition",
  // ];

  return (
    <div className="outer">
      <nav class="n">
        <ul className="left">
          <li>
            <img src={logo} alt="" className="logo" />
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="scroller">
        <section className="scroller-item">
          <div className="container c1" id="home">
            <div className="heading home_text ">
              <img src={logo} alt="" className="home" />
              <br />
              October 16, 2022
              <br />
              <div className="text1">Venue: IIT Indore</div>
              <div className="d-flex justify-content-center">
                <div className="flex-item button">
                  <button class="button">Explore More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="scroller-item">
          <div className="container c1" id="about">
            <div className="row cards">
              <div className="heading col-12">About Us</div>
              <div className="text col-md-7 col-sm-12">
                Indore was the first city in India to house both IIT and IIM,
                the two premier colleges of India. TvsM, an event binding IIT,
                Indore and IIM, Indore, celebrates this individuality of Indore
                through the collaboration of these institutions for a few days
                of a cultural clash. For the first time in the past years, IIT
                Indore will host the cultural events of TvsM on the 15th and
                16th of October, 2022. The Cultural clash will include
                competitions like a Parliamentary Debate, Online Short Film, an
                Online Photography event, A Trivia Quiz, a Case Study, Group and
                Solo Dances, Street Play, etc.
              </div>
              <div className="text col-md-3 col-sm-12">
                <img src={competition} alt="" className="competition" />
              </div>
            </div>
          </div>
        </section>

        <section className="scroller-item">
          <div className="container c1" id="sponsors">
            <div className="row cards">
              <div className="heading col-12">
                Sponsors
                <div className=" texts text-center">Associate Sponsors</div>
                <div className="sponsor">
                  <div className="associate flexbox d-flex justify-content-center">
                    <img src={kalori} alt="" className="kalori" />
                    <img src={brisk} alt="" className="brisk" />
                  </div>
                </div>
                <div className="other container">
                  <div className="row">
                    <div className="col-6" style={{ width: "50%" }}>
                      <div className=" texts text-center">Banking Partner</div>
                      <div className="associate">
                        <img src={union} alt="" className="union" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className=" texts text-center">Olympiad Partner</div>
                      <div className="associate">
                        <img src={talent} alt="" className="talent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroller-item">
          <div className="container c1" id="events">
            <div className="row cards">
              <div className="heading col-12">Events</div>
              <div className="col-12 text4">
                <div className="list2">
                  {/* {arr.map((e) => {
                    return (
                      <>
                        <li className="event-items"> {e} </li>
                      </>
                    );
                  })} */}
                  <table className="schedule">
                    <th>Schedule</th>
                    <th>Events</th>
                    <tr>
                      <td>11:00 - 18:00 PM</td>
                      <td>Debate</td>
                    </tr>
                    <tr>
                      <td>11:00 - 12:30 PM</td>
                      <td> Quiz</td>
                    </tr>
                    <tr>
                      <td>12:30 - 1:30 PM</td>
                      <td>Case Study</td>
                    </tr>
                    <tr>
                      <td>2:00 - 3:00 PM</td>
                      <td>Street Play</td>
                    </tr>
                    <tr>
                      <td>4:30 - 6:00 PM</td>
                      <td>Music</td>
                    </tr>
                    <tr>
                      <td>6:00 - 7:00 PM</td>
                      <td>Dance</td>
                    </tr>
                    <tr>
                      <td>7:00 - 7:30 PM</td>
                      <td>Fashion Show</td>
                    </tr>
                    <tr>
                      <td>7:30 - 8:00 PM</td>
                      <td>Prize Distribution</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="scroller-item">
          <div className="container c1" id="contact">
            <div className="row cards">
              <div className="heading col-12">
                Contact Us
                <div className="organisers">Organisers</div>
              </div>

              <br />
              <ul className="contact d-flex justify-content-around">
                <div className="photo">
                  <img src={logo} alt="" className="org" />
                  Rashi Motwani <br />
                  <table>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined call">call</span>
                      </td>
                      <td>+91 85030 22012</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined">mail</span>
                      </td>
                      <td>
                        <a
                          href="mailto:ee200002063@iiti.ac.in"
                          className="link"
                        >
                          ee200002063@iiti.ac.in
                        </a>
                      </td>
                    </tr>
                  </table>
                  <br />
                </div>
                <div className="photo">
                  <img src={logo} alt="" className="org" />
                  Amardeep Padalwar
                  <br />
                  <table>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined call">call</span>
                      </td>
                      <td>+91 93266 97729</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined">mail</span>
                      </td>
                      <td>
                        <a
                          href="mailto:me200003009@iiti.ac.in"
                          className="link"
                        >
                          me200003009@iiti.ac.in
                        </a>
                      </td>
                    </tr>
                  </table>
                  <br />
                </div>
                <div className="photo">
                  <img src={logo} alt="" className="org" />
                  Paras Vyas <br />
                  <table>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined call">call</span>
                      </td>
                      <td>+91 96386 71317</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined">mail</span>
                      </td>
                      <td>
                        <a
                          href="mailto:ce200004035@iiti.ac.in"
                          className="link"
                        >
                          ce200004035@iiti.ac.in
                        </a>
                      </td>
                    </tr>
                  </table>
                  <br />
                </div>
                <div className="photo">
                  <img src={logo} alt="" className="org" />
                  Prakhar Gautam <br />
                  <table>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined call">call</span>
                      </td>
                      <td>+91 94588 81227</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="material-symbols-outlined">mail</span>
                      </td>
                      <td>
                        <a
                          href="mailto:mems200005030@iiti.ac.in"
                          className="link"
                        >
                          mems200005030@iiti.ac.in
                        </a>
                      </td>
                    </tr>
                  </table>
                  <br />
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
