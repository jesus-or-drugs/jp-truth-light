// pages/substances/index.tsx みたいなイメージ

import fs from "fs";
import path from "path";
import type { GetStaticProps, NextPage } from "next";

type Substance = {
  id: string;
  name_ja: string;
  name_en: string;
  jp_legal_status: string;
  psychoactive_class: string;
};

type SubstanceListPageProps = {
  substances: Substance[];
};

export const getStaticProps: GetStaticProps<SubstanceListPageProps> = async () => {
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

  return { props: { substances } };
};

const SubstanceListPage: NextPage<SubstanceListPageProps> = ({ substances }) => {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Fact Sheet of Substances Regulated in Japan</h1>
      <p>
        日本で規制されている、あるいは精神作用を持つ物質の
        法的ステータスと基本的なプロパティをまとめたデータベースです。
      </p>

      <ul style={{ marginTop: "2rem", listStyle: "none", padding: 0 }}>
        {substances.map((s) => (
          <li
            key={s.id}
            style={{
              padding: "0.8rem 0",
              borderBottom: "1px solid　#eee"
            }}
          >
            <a
              href={`/substances/${s.id}`}
              style={{ fontSize: "1.1rem", fontWeight: "bold" }}
            >
              {s.name_ja} / {s.name_en}
            </a>
            <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {s.psychoactive_class} / {s.jp_legal_status}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SubstanceListPage;
