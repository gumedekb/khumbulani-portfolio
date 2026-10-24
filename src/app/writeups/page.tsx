import type { Metadata } from "next";
import { WriteupGrid } from "@/components/writeup-card";
import { WriteupsComingSoon } from "@/components/writeups-coming-soon";
import { RssIcon } from "@/components/icons";
import { Container, PageHeader } from "@/components/ui";
import { getWriteups } from "@/lib/writeups";

export const metadata: Metadata = {
  title: "Writeups",
  description: "Writeups on full-stack development and web application security.",
  alternates: { types: { "application/rss+xml": "/writeups/feed.xml" } },
};

export default async function WriteupsPage() {
  const writeups = await getWriteups();

  return (
    <Container>
      <PageHeader
        eyebrow="Writeups"
        title={
          <>
            Notes from <span className="text-gradient">building &amp; breaking</span>
          </>
        }
      >
        Writeups on full-stack development and web application security: how I build things, how
        I break them, and what I learn fixing them.{" "}
        <a
          href="/writeups/feed.xml"
          className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-accent hover:underline"
        >
          <RssIcon size={16} /> RSS
        </a>
      </PageHeader>
      {writeups.length > 0 ? <WriteupGrid writeups={writeups} /> : <WriteupsComingSoon />}
    </Container>
  );
}
