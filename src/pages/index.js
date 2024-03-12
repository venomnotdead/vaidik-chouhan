import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const projects = [
  {
    name: "KaroManage",
    technology: ["Next.js", "react-redux", "Node js"],
    description: "abc",
    duration: "1.3 yrs",
    images: ["abc"],
    link: "https://karomanage.com/"
  },
  {
    name: "KaroCode",
    technology: ["Next.js", "react-redux"],
    description: "abc",
    duration: "1.3 yrs",
    images: ["abc"],
    link: "https://karocode.com/"
  },
  {
    name: "Expense Calculator",
    technology: ["Next.js", "react-redux", "Node js"],
    description: "abc",
    duration: "1.3 yrs",
    images: ["abc"],
    link: "https://calculator-e.vercel.app/"

  },
  {
    name: "Zero-Miles",
    technology: ["Next.js", "react-redux", "firebase", "node js"],
    description: "abc",
    duration: "1.3 yrs",
    images: ["abc"],
    link: "https://zeromiles-front.vercel.app/"
  }
]

export default function Home() {

  const [selectedProject, setSelectedProject] = useState(false)

  return (
    <>
      <section style={{ height: '100vh' }}>
        <div className="home-div">
          <div className="centered-div">
            Hi there,I&apos;m <span className="main-font"> Vaidik </span>
            <hr style={{ color: 'pink', backgroundColor: 'blue' }} />
            <div className="description-div typewriter">
              <div>
                I&apos;m a Central India based developer practicing Full-stack developement.
                <br />
                Created, collaborated, and build products and many projects.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="project-div">
          <div>
            <h1>Project</h1>
            <br />
            <div>
              {projects.map((p, index) => {
                return (
                  <div key={index}>
                    <div className="project-card" onClick={() => setSelectedProject(p.name)}>
                      <div className="main-font">
                        {p.name}
                      </div>
                      <div className="secondary-font">
                        {p.technology.join(", ")}
                      </div>
                    </div>
                    {
                      selectedProject == p.name &&
                      <div className="project-description">
                        <div>
                          {p.description}
                        </div>
                        <div>
                          <Link target="_blank" href={p.link}>{p.name}</Link>
                        </div>
                      </div>
                    }
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
