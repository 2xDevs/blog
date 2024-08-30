export type BlogProps = {
  id: number;
  title: string;
  content: BlogContent;
  image: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
};

interface BlogTextMark {
  type: "bold" | "link" | "code";
  attrs?: {
    href?: string;
    target?: string;
    rel?: string;
    class?: string;
  };
}

interface BlogText {
  type: "text";
  text: string;
  marks?: BlogTextMark[];
}

interface BlogParagraph {
  type: "paragraph";
  content: BlogText[];
}

interface BlogListItem {
  type: "listItem";
  content: BlogParagraph[];
}

interface BlogBulletList {
  type: "bulletList";
  content: BlogListItem[];
}

interface BlogImage {
  type: "image";
  attrs: {
    src: string;
    alt: string;
    title: string | null;
    width: number | null;
    height: number | null;
  };
}

interface BlogHeading {
  type: "heading";
  attrs: {
    level: number;
  };
  content: BlogText[];
}

interface BlogCodeBlock {
  type: "codeBlock";
  attrs: {
    language: string;
  };
  content: BlogText[];
}

type BlogContentItem =
  | BlogParagraph
  | BlogBulletList
  | BlogImage
  | BlogHeading
  | BlogCodeBlock;

interface BlogContent {
  type: "doc";
  content: BlogContentItem[];
}
