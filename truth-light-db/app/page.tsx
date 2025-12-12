import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ファクトシート",
  description: "向精神薬の規制情報から薬理学的知見まで",
};

export default function Home({children}: {children: React.ReactNode}) {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>向精神薬データベース v1.0</h1>
      <p>
        日本の法規制のもとにある物質、あるいは精神に作用する物質について、
        中立的な情報とハームリダクションの観点からまとめていくプロジェクトです。
      </p>

      <p style={{ marginTop: "1.5rem" }}>
        <a href="/substances">▶ 物質一覧を見る</a>
      </p>
    </main>
  );
}