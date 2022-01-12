import React from "react";
import { Helmet } from "react-helmet";

function MetaData({ con, title }) {
  return (
    <Helmet>
      <link rel="canonical" href={con} />

      <meta property="og:title" content="MongoDB Project" />
      <meta
        property="og:image"
        content="https://ah-jim.web.app/static/media/Akhlak%20Hossain%20Jim%20480.5431faf5.webp"
      />
      <meta property="og:url" content="https://ah-jim.web.app/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content="MongoDB Project" />
      <meta
        name="twitter:image"
        content="https://ah-jim.web.app/static/media/Akhlak%20Hossain%20Jim%20480.5431faf5.webp"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ahossainjim" />
      <meta name="twitter:site" content="@ahossainjim" />
      <title>{title} MongoDB Project</title>
    </Helmet>
  );
}

export default MetaData;
