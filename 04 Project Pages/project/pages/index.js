import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

import Head from "next/head";

function HomePage({ events }) {
  return (
    <div>
      {/* this is the head we find in index.html usually */}
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events you'll want to attend to"
        />
      </Head>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
