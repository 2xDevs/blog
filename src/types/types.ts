export type UserProps = {
  id: string;
  name: string;
  username: string;
  about?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  role: string;
  avatar: string;
  email: string;
  blogs: BlogBase[];
  blogCount: number;
};

export interface BlogBase {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export type BlogProps = {
  id: number;
  title: string;
  content: BlogContent;
  image: string;
  author: Author;
  authorId: string;
  createdAt: Date;
  updatedAt?: Date;
};

interface Author {
  username: string;
  name: string;
  avatar: string;
}

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

export interface BlogContent {
  type: "doc";
  content: BlogContentItem[];
}
