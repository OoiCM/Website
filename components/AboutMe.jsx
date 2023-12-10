import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-1">
                <li>R</li>
                <li>C</li>
                <li>Java</li>
                <li>Pine Script</li>
                <li>SQL</li>
                <li>Python</li>
                <li>System Analysis & Design</li>
          </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
          <ul className="list-disc pl-2">
          </ul>
        ),
    },
    {
        title: "Languages",
        id: "languages",
        content: (
          <ul className="list-disc pl-3">
            <li>Chinese</li>
            <li>English</li>
            <li>Malay</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-4">
                <li>Asia Pacific University</li>
                <li>SMJK Chung Ling</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.jpg" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-100 text-transparent bg-clip-text">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">
                        I am Ooi Chong Ming, a current undergraduate student pursuing a degree in Computer Science with a specialization in Data Analytics at Asia Pacific University. 
                        Throughout my first two years of degree program and volunteer opportunities, I have developed a strong confidence in my analytic skill and problem-solving skill, so I believe I am a worthy asset to your company. My degree program had provided me with a robust foundation in data management, statistical analysis and related programming, directly correlating with the responsibilities and demand of a Product Analyst role. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            {" "}
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experience")}
                        active= {tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("languages")}
                        active= {tab === "languages"}
                        >
                            {" "}
                            Languages{" "}
                        </TabButton>
                        
                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;