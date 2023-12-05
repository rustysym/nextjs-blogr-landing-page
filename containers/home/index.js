import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col font-ubuntu overflow-y-hidden overflow-x-hidden">
      <div className="relative bg-gradient-to-l from-blogr-light-red from-5% to-blogr-very-light-red to-90%  h-[30rem] w-full rounded-bl-[3rem] items-center justify-center overflow-hidden -z-20">
        <Image
          src={"/bg-pattern-intro-desktop.svg"}
          width={1000}
          height={50}
          alt=""
          className={
            "relative -top-full h-[85rem] left-1/4 object-contain scale-[2.2] -z-10"
          }
        />
      </div>
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full text-center ">
        <h1 className="text-4xl text-white font-overpass">
          A modern publishing platform
        </h1>
        <h4 className="text-sm text-white font-thin mt-2">
          Grow your audience and build your online brand
        </h4>
        <div className="flex flex-row justify-center mt-12 space-x-6 text-white">
          <button className="bg-white w-28 h-10 rounded-full text-blogr-cta-text font-bold text-sm hover:bg-blogr-cta-hover hover:text-white duration-200">
            Start for Free
          </button>
          <button className="border-white border rounded-full w-28 h-10 text-xs font-semibold tracking-widest  text-center hover:bg-white hover:text-blogr-cta-text duration-200">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col h-min-screen mt-24 font-overpass">
        <h1 className="text-2xl lg:text-4xl text-center font-medium  text-blogr-very-dark-blue">
          Designed for the future
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 h-1/2 mt-14">
          <div className="px-24 order-2 md:order-1">
            <h2 className="text-lg text-blogr-very-dark-blue font-medium lg:text-2xl">
              Introducing an extensible editor
            </h2>
            <p className="text-sm text-blogr-very-dark-grayish-blue mt-4 ">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h2 className="text-lg text-blogr-very-dark-blue font-medium mt-12 lg:text-2xl">
              Robust content management
            </h2>
            <p className="text-sm text-blogr-very-dark-grayish-blue mt-4">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-12 lg:mb-0">
              <picture>
                <source
                  media="(min-width: 900px)"
                  srcSet="/illustration-editor-desktop.svg"
                />
                <source
                  media="(min-width: 320px)"
                  srcSet="/illustration-editor-mobile.svg"
                />
                <img
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  src="/illustration-laptop-desktop.svg"
                  className="relative -right-1/2 -translate-x-1/2 -translate-y-0 md:-translate-y-0 lg:-translate-y-1/4  scale-[1] md:-translate-x-1/4 md:scale-[1.2] lg:scale-[0.8] md:-right-1/2 "
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="relative bg-gradient-to-l from-blogr-grd-light-blue from-5% to-blogr-grd-dark-blue  to-90% h-[30rem] md:h-52 w-full rounded-bl-[3rem] rounded-tr-[3rem] items-center justify-center  -z-20 mt-44 lg:-mt-32 ">
          <div className="grid grid-cols-2">
            <div className="flex flex-col w-screen md:w-auto">
              <div className="overflow-hidden">
                <Image
                  src={"/bg-pattern-circles.svg"}
                  width={300}
                  height={50}
                  alt=""
                  className="relative md:h-60 object-cover -top-2/4 -left-8 w-full md:w-1/2 scale-[0.9] md:scale-[1.7] -z-10"
                />
              </div>
              <Image
                src={"/illustration-phones.svg"}
                width={300}
                height={50}
                alt=""
                className="absolute left-1/2 -translate-x-1/2  -top-1/4  md:-top-9 md:left-12 md:-translate-x-0 "
              />
            </div>
            <div className="absolute bottom-0 p-20 text-center -ml-0 md:pr-16 md:mt-12 md:-ml-8 md:flex flex-col md:p-0 md:text-left md:relative">
              <h1 className="text-2xl text-white font-medium">
                State of the Art Infrastructure
              </h1>
              <p className="mt-4 text-white text-xs font-thin leading-5 break-words">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-48 font-overpass h-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mt-44 lg:mt-72">
              <picture>
                <source
                  media="(min-width: 900px)"
                  srcSet="/illustration-laptop-desktop.svg"
                />
                <source
                  media="(min-width: 320px)"
                  srcSet="/illustration-laptop-mobile.svg"
                />
                <img
                 decoding="async"
                 data-nimg="1"
                 loading="lazy"
                  src="/illustration-laptop-desktop.svg"
                  className="relative left-1/2 md:left-1/3 -top-1/3 -translate-x-1/2 lg:-translate-x-2/4 scale-[1] md:scale-[1.2] lg:scale-[0.9] "
                />
              </picture>
            </div>

            <div className="columns-1 px-14 -mt-12 lg:mt-72 -ml-0 md:-ml-12 text-center md:text-left">
              <h2 className="text-lg text-blogr-very-dark-blue font-medium">
                Free, open, simple
              </h2>
              <p className="text-sm text-blogr-very-dark-grayish-blue mt-4">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
              <h2 className="text-lg text-blogr-very-dark-blue font-medium mt-12">
                Powerful tooling
              </h2>
              <p className="text-sm text-blogr-very-dark-grayish-blue mt-4">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
