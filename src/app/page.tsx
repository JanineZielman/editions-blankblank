import { type Metadata } from "next";
import { asText } from "@prismicio/client";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ImageClickShow from "@/components/ImageClickShow"; // <-- import the client component

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return (
    <div className="home">
      <ImageClickShow images={home.data.images} />

      <SliceZone slices={home.data.slices} components={components} />

      <div className="footer">
        <PrismicRichText field={home.data.footer} />
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
