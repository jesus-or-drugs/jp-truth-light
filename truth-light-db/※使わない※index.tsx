import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllSubstances } from "@/lib/substances";
import { Substance } from "@/types/substance";

type Props = {
  substances: Substance[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const substances = getAllSubstances();

  // 名前順にソートするなど
  substances.sort((a, b) => a.name.localeCompare(b.name));

  return {
    props: {
      substances,
    },
  };
};

export default function Home({ substances }: Props) {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>日本語版 Drug DB（仮）</h1>
      <p>静的JSONをソースにしたハームリダクション志向のデータベース。</p>

      <ul>
        {substances.map((s) => (
          <li key={s.id}>
            <Link href={`/${s.id}`}>
              {s.name}
              {s.aliases && s.aliases.length > 0 && (
                <span>（別名: {s.aliases.join(" / ")}）</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}