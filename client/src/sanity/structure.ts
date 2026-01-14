import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // 1. Homepage Singleton (One for each lang)
      S.listItem()
        .title("Homepage")
        .child(S.documentTypeList("homepage").title("Homepage by Language")),

      S.divider(),

      // 2. Menu Items split by Language
      S.listItem()
        .title("Menu Items")
        .child(
          S.list()
            .title("Select Language")
            .items([
              S.listItem()
                .title("English Items")
                .child(
                  S.documentList()
                    .title("English Menu")
                    .filter('_type == "menuItem" && language == "en"')
                ),
              S.listItem()
                .title("Albanian Items")
                .child(
                  S.documentList()
                    .title("Albanian Menu")
                    .filter('_type == "menuItem" && language == "al"')
                ),
            ])
        ),

      // 3. Keep Translation Metadata hidden or at bottom
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["homepage", "menuItem"].includes(listItem.getId() as string)
      ),
    ]);
