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

export default async function GetSubstance() {
  const dir = path.join(process.cwd(), "data/substances");
  const files = fs.readdirSync(dir);

  const substances: Substance[] = files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(content) as Substance;

    return {
      id: data.id,
      name_ja: data.name_ja,
      name_en: data.name_en,
      jp_legal_status: data.jp_legal_status,
      psychoactive_class: data.psychoactive_class,
    };
  });
};

const ViewSubstanceSearchPage =  (substance: Substance) => {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Fact Sheet of Substances Regulated in Japan</h1>
      <p>
        日本で規制されている、あるいは精神作用を持つ物質の
        法的ステータスと基本的なプロパティをまとめたデータベースです。
      </p>
    </main>
    );
};