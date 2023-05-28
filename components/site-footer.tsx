import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import {Separator} from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="sticky top-0 z-40 w-full border-b bg-background">
      <Separator/>
      <div className="container h-16 items-center space-x-4 sm:justify-between sm:space-x-0 md:flex">
        <div className="items-center justify-end space-x-4">
          All rights reserved © 2023
        </div>
        <div className="items-center justify-end space-x-4">
          Made with next js 13, tailwind, shadcn ui and ❤️ by {siteConfig.author.name}
        </div>
      </div>
    </footer>
  )
}
