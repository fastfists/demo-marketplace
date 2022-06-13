import Head from "next/head"
import { ReactNode } from "react"
import NavBar from "./NavBar"

export type TemplateProps = {
    title?: string,
    head?: ReactNode,
    children?: ReactNode,
}

export const Template = ({title, head, children}: TemplateProps) =>
    <div>
      <Head>
        <title>{title == undefined ? "NFT Marketplace": title}</title>
        <link rel="icon" href="/favicon.ico" />
        {head}
      </Head>
      <NavBar />
      <main className="m-auto w-11/12 flex flex-row flex-wrap justify-between space-y-3">
        {children}
      </main>
    </div>
