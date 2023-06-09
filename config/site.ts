export type SiteConfig = typeof siteConfig

export const siteConfig = {
  author: {
    name: "Wiktor Popiołek",
  },
  name: "Wyniki.zip",
  description:
    "wyniki.zip - Twoje rozwiązanie do profesjonalnej analizy danych i generowania raportów biznesowych. Odkryj potencjał swojego biznesu dzięki precyzyjnym wynikom i rekomendacjom.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Sign in",
      href: "/signin",
    }
  ],
  links: {
    instagram: "https://www.instagram.com/wiktor_popiolek/",
    signIn: "/signin",
    github: "https://github.com/wikipop/wyniki-zip-proj",
  },
}
