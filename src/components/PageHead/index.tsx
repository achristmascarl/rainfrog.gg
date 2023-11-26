import Head from "next/head";

interface Props {
  title: string;
  description: string;
  previewImageUrl?: string;
  faviconUrl?: string;
  faviconEmoji?: string;
}

export default function PageHead({
  title,
  description,
  previewImageUrl,
  faviconUrl,
  faviconEmoji,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      {previewImageUrl && (
        <meta property="og:image" content={previewImageUrl} />
      )}
      {faviconUrl ? (
        <link rel="icon" href={faviconUrl} />
      ) : faviconEmoji ? (
        <link
          rel="icon"
          href={
            "data:image/svg+xml," +
            "<svg xmlns=%22http://www.w3.org/2000/svg%22 " +
            "viewBox=%220 0 100 100%22>" +
            `<text y=%22.9em%22 font-size=%2290%22>${faviconEmoji}</text>` +
            "</svg>"
          }
        />
      ) : null}
    </Head>
  );
}
