import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react";

const DUMMY_POSTS = [
  {
    slug: "getting-ok1",
    title: "getting ok with nextjs",
    image: "next.png",
    excerpt: "nextjs is a react framwork",
    date: "2022-02-12",
  },
  {
    slug: "getting-ok2",
    title: "getting ok with nextjs",
    image: "next.png",
    excerpt: "nextjs is a react framwork",
    date: "2022-02-12",
  },
  {
    slug: "getting-ok3",
    title: "getting ok with nextjs",
    image: "next.png",
    excerpt: "nextjs is a react framwork",
    date: "2022-02-12",
  },
  {
    slug: "getting-ok4",
    title: "getting ok with nextjs",
    image: "next.png",
    excerpt: "nextjs is a react framwork",
    date: "2022-02-12",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
