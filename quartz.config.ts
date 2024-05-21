import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration for Isidre Mas Magre's Database for Cybersecurity Course
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🔒 Database Security Course",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "databasesecurity.isidremasmagre.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto",
        body: "Open Sans",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#f4f4f4",
          lightgray: "#e0e0e0",
          gray: "#9e9e9e",
          darkgray: "#424242",
          dark: "#212121",
          secondary: "#d32f2f",
          tertiary: "#1976d2",
          highlight: "rgba(100, 181, 246, 0.15)",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#2c2c2c",
          gray: "#757575",
          darkgray: "#bdbdbd",
          dark: "#eeeeee",
          secondary: "#ef5350",
          tertiary: "#42a5f5",
          highlight: "rgba(100, 181, 246, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "atom-one-light",
          dark: "atom-one-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
