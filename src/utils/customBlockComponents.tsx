import { slugify } from "./slugify";
import { ImageObject } from "@/components/modules/ImageObject";

export const customBlockComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      return <ImageObject {...value} alt="" />;
    },
  },
  block: {
    h1: ({ children }: { children: string }) => (
      <h1
        className="text-5xl text-pretty font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: { children: string }) => (
      <h2
        className="text-4xl text-pretty font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: { children: string }) => (
      <h3
        className="text-3xl text-pretty font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children}
      </h3>
    ),
    h4: ({ children }: { children: string }) => (
      <h4
        className="text-2xl text-pretty font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children}
      </h4>
    ),
    h5: ({ children }: { children: string }) => (
      <h5
        className="text-5xl text-pretty font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children}
      </h5>
    ),
    h6: ({ children }: { children: string }) => (
      <h6
        className="text-5xl text-pretty font-extrabold uppercase tracking-wider"
        id={slugify(children[0])}
      >
        {children}
      </h6>
    ),
    normal: ({ children }: { children: string }) => (
      <p className="text-pretty text-black">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: string }) => (
      <ul className="pl-4 list-disc list-inside">{children}</ul>
    ),
    number: ({ children }: { children: string }) => (
      <ol className="pl-4 list-decimal list-inside">{children}</ol>
    ),
  },
} as any;
