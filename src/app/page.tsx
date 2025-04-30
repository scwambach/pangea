import { HOME } from "@/queries/homepage";
import { getLiveData } from "@/utils/pageData";
import { HomePageProps } from "@/utils/types";

export default async function Home() {
  const {
    data,
  }: {
    data: HomePageProps;
  } = await getLiveData({
    query: HOME,
    params: {
      slug: "/",
    },
    usePreview: false,
  });
  return (
    <div>
      <code>
        <pre
          style={{
            fontFamily: "monospace",
            display: "block",
            padding: "50px",
            color: "#88ffbf",
            backgroundColor: "black",
            textAlign: "left",
            whiteSpace: "pre-wrap",
          }}
        >
          {JSON.stringify(data.ctaBanner.copy[0].markDefs, null, "    ")}
        </pre>
      </code>
    </div>
  );
}
