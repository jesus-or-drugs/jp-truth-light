// pages/substances/index.tsx みたいなイメージ

import fs from "fs";
import path from "path";

type Substance = {
  id: string;
  name_ja: string;
  name_en: string;
  jp_legal_status: string;
  psychoactive_class: string;
};

export default function SubstanceSearchPage({children}: {children: React.ReactNode}) {
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