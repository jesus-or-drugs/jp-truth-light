export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>ファクトシート(layout.tsx)</h1>
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