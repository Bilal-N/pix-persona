import Header from "./components/layout/Header";
import HeroSection from "./components/HeroSection";
import MobileAppPrototype from "./components/MobileAppPrototype";
import Footer from "./components/layout/Footer";

export default function Home() {
  let content1 = [
    {
      type: "p",
      fontSize: "large",
      alignment: "left",
      children: [
        {
          type: "normal", // underlineOnHover | normal
          text: "We deliver ",
        },
        {
          type: "underlineOnHover",
          text: "clickable ",
        },
        {
          type: "underlineOnHover",
          text: "design prototypes",
        },
        {
          type: "normal",
          text: " early on, build awesome ",
        },
        {
          type: "underlineOnHover",
          text: "MVPs",
        },
        {
          type: "normal",
          text: " and transform ",
        },
        {
          type: "underlineOnHover",
          text: "web & app experiences.",
        },
      ],
    },
    {
      type: "p",
      fontSize: "large",
      alignment: "left",
      children: [
        {
          type: "normal", // underlineOnHover | normal
          text: "From designers to developers, we have got you covered. Companies ",
        },
        {
          type: "underlineOnHover",
          text: "rent our talented experts",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: " on monthly basis.",
        },
      ],
    },
    {
      type: "spacer",
      size: "xLarge",
    },
    {
      type: "p",
      fontSize: "largeX10",
      alignment: "center",
      children: [
        {
          type: "normal", // underlineOnHover | normal
          text: "Outcomes, ",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "not outputs.",
          newline: true,
        },
      ],
    },
  ];
  let content2 = [
    {
      type: "p",
      fontSize: "largeX100",
      alignment: "center",
      children: [
        {
          type: "normal", // underlineOnHover | normal
          text: "Yeah. It’s ",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "a hell of ",
          newline: true,
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "an Art.",
          newline: true,
        },
      ],
    },
    {
      type: "ul",
      fontSize: "smallX100",
      alignment: "center",
      children: [
        {
          type: "normal", // underlineOnHover | normal
          text: "Strategy",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "Experience Design",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "Visual Design",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "Motion Design & Animation",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "Branding",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "Rapid Prototyping",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "Web & App Development",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "Usability Testing",
        },
      ],
    },
    {
      type: "p",
      fontSize: "largeX100",
      alignment: "left",
      children: [
        {
          type: "normal", // underlineOnHover | normal
          text: "But, the ",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "results are ",
          newline: true,
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "radically ",
          newline: true,
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "better...",
          newline: true,
        },
      ],
    },
  ];
  let content3 = [
    {
      type: "p",
      fontSize: "largeX100",
      alignment: "right",
      children: [
        {
          type: "normal", // underlineOnHover | normal
          text: "... and our ",
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "clients are",
          newline: true,
        },
        {
          type: "normal", // underlineOnHover | normal
          text: "delighted.",
          newline: true,
        },
      ],
    },
  ];
  return (
    <>
      <Header />
      <HeroSection />
      <MobileAppPrototype />
      <Footer />
    </>
  );
}
