import Image from "next/image";
import { slugify } from "./slugify";

export const customBlockComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      return <Image {...value} alt="" />;
    },
  },
  block: {
    h1: ({ children }: { children: string }) => (
      <h1
        className="text-5xl font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children[0]}
      </h1>
    ),
    h2: ({ children }: { children: string }) => (
      <h2
        className="text-5xl font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children[0]}
      </h2>
    ),
    h3: ({ children }: { children: string }) => (
      <h3
        className="text-5xl font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children[0]}
      </h3>
    ),
    h4: ({ children }: { children: string }) => (
      <h4
        className="text-5xl font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children[0]}
      </h4>
    ),
    h5: ({ children }: { children: string }) => (
      <h5
        className="text-5xl font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children[0]}
      </h5>
    ),
    h6: ({ children }: { children: string }) => (
      <h6
        className="text-5xl font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children[0]}
      </h6>
    ),
  },
  list: {
    bullet: ({ children }: { children: string }) => (
      <ul className="list-disc list-inside">{children[0]}</ul>
    ),
    number: ({ children }: { children: string }) => (
      <ol className="list-decimal list-inside">{children[0]}</ol>
    ),
  },
} as any;
