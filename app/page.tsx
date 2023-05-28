import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-6xl">
          Twój partner w analizie danych i generowaniu wartościowych raportów!
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Rozwiązanie do profesjonalnej analizy danych i generowania raportów biznesowych.
          Wszystko w jednym miejscu, w przeglądarce internetowej.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.signIn}
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Logowanie
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      <br/>
      <div className="justify-between md:flex">
        <div className="hidden w-1/3 md:block">
            <Image
              width={450}
              height={253}
              src="/photo-1582736317407-371893d9e146.avif"
              alt="Software on screen"
              className="rounded-md object-cover"
            />
        </div>
        <div className="md:w-2/3">
          <div className="flex-col md:ml-12">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-6xl">
              Potrzebujesz pogłębionej wiedzy na temat swojego biznesu?
            </h1> <br/>
            <p className="text-lg sm:text-xl">
              Chciałbyś odkryć kluczowe trendy rynkowe lub zrozumieć preferencje swoich klientów? To właśnie tutaj znajdziesz odpowiedzi. Jesteśmy firmą specjalizującą się w usługach analitycznych, dostarczającą kompleksowe i precyzyjne wyniki, które pomogą Ci podejmować mądre decyzje biznesowe.
              <br/><br/>
              Nasz zespół doświadczonych analityków posiada szeroką wiedzę w dziedzinie przetwarzania danych, badania rynku i tworzenia raportów. Wykorzystujemy zaawansowane narzędzia i techniki, aby dostarczyć Ci wyniki oparte na solidnych podstawach, które pozwolą Ci osiągnąć sukces. Niezależnie od tego, czy prowadzisz małą firmę, czy jesteś częścią korporacji, zapewniamy spersonalizowane rozwiązania, dopasowane do Twoich unikalnych potrzeb.
            </p>
          </div>
        </div>
      </div>
      <br/>
      <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-3xl lg:text-5xl">
        Funkcje naszej platformy
      </h1>
      <br/>
      <div className="flex w-full place-content-center content-center">
        <Accordion type="single" collapsible className="w-[400px] md:w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Analiza danych biznesowych</AccordionTrigger>
            <AccordionContent>
              Pomagamy Ci zgłębić swoje dane, odkryć ukryte wzorce i wykorzystać potencjał swojego biznesu. Dzięki naszym zaawansowanym narzędziom i technikom analizy danych, dostarczymy Ci cenne spostrzeżenia i rekomendacje, które umożliwią Ci podejmowanie lepszych decyzji strategicznych.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Badania rynkowe</AccordionTrigger>
            <AccordionContent>
              Chcesz poznać swoich konkurentów, zrozumieć preferencje klientów lub zbadać nowe segmenty rynku? Nasz zespół przeprowadzi dla Ciebie wszechstronne badania, dostarczając precyzyjne dane, które pozwolą Ci tworzyć skuteczne strategie marketingowe i rozwijać swoją działalność.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Generowanie raportów</AccordionTrigger>
            <AccordionContent>
              Prezentacja wyników jest kluczowa dla skutecznego wykorzystania danych. Tworzymy klarowne i atrakcyjne raporty, które ułatwiają zrozumienie i interpretację zgromadzonych informacji. Dostarczamy je w formacie .zip, abyś mógł łatwo udostępnić i przechowywać swoje wyniki.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <br/>
    </section>
  )
}
