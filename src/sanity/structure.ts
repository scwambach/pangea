import { AiOutlineGlobal } from "react-icons/ai";
import { IoHomeOutline, IoRestaurantOutline } from "react-icons/io5";
import type { StructureResolver } from "sanity/structure";
import { TfiPencilAlt } from "react-icons/tfi";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage"))
        .icon(IoHomeOutline),
      S.listItem()
        .title("Global Info")
        .child(
          S.document()
            .schemaType("globalSettings")
            .documentId("globalSettingss")
        )
        .icon(AiOutlineGlobal),
      S.listItem()
        .title("Restaurants")
        .child(S.documentTypeList("restaurant").title("Restaurants"))
        .icon(IoRestaurantOutline),
      S.listItem()
        .title("Posts")
        .child(
          S.documentTypeList("post")
            .title("Posts")
            .defaultOrdering([{ field: "publishedAt", direction: "asc" }])
        )
        .icon(TfiPencilAlt),
    ]);
