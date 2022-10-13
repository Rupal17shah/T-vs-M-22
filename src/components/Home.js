import React from "react";
import "./Home.css";
import competition from "../im1.jpg";
import logo from "../logo.png";
export default function Home() {
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      {/* <div className="container c1">
        <div className="row cards">
          <div className="heading col-12">T vs M</div>
          <div className="text col-md-6 col-sm-12">
            Indore was the first city in India to house both IIT and IIM, the
            two premier colleges of India. TvsM, an event binding IIT, Indore
            and IIM, Indore, celebrates this individuality of Indore through the
            collaboration of these institutions for a few days of a cultural
            clash. For the first time in the past years, IIT Indore will host
            the cultural events of TvsM on the 15th and 16th of October, 2022.
            The Cultural clash will include competitions like a Parliamentary
            Debate, Online Short Film, an Online Photography event, A Trivia
            Quiz, a Case Study, Group and Solo Dances, Street Play, etc.
          </div>
          <div className="text col-md-6 col-sm-12">
            <img src={competition} alt="" className="competition" />
          </div>
        </div>
      </div> */}

      <div className="container c1">
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
                    <a href="mailto:ee200002063@iiti.ac.in" className="link">
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
                    <a href="mailto:me200003009@iiti.ac.in" className="link">
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
                    <a href="mailto:ce200004035@iiti.ac.in" className="link">
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
                    <a href="mailto:mems200005030@iiti.ac.in" className="link">
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
    </div>
  );
}
