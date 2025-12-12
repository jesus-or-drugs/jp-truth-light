import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSubstanceIds, getSubstanceById } from "@/lib/substances";
import { Substance } from "@/types/substance";

import { jsx as _jsx } from "react/jsx-runtime";
const element = _jsx("h1", { children: "Hello, world!" });

type Props = {
  substance: Substance;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getAllSubstanceIds();

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false, // 事前ビルドのみ
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string;
  const substance = getSubstanceById(id);

  if (!substance) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      substance,
    },
  };
};

export default function SubstancePage({ substance }: Props) {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>{substance.name}</h1>
      {substance.aliases && (
        <p>別名: {substance.aliases.join(" / ")}</p>
      )}

      {substance.summary && <p>{substance.summary}</p>}

      {substance.routes && (
        <>
          <h2>用量・時間</h2>
          {substance.routes.map((route) => (
            <div key={route.route} style={{ marginBottom: "1rem" }}>
              <h3>{route.route}</h3>
              {route.dose && (
                <ul>
                  {route.dose.threshold_mg && (
                    <li>閾値: {route.dose.threshold_mg} mg</li>
                  )}
                  {route.dose.light_mg && (
                    <li>
                      少量: {route.dose.light_mg[0]}–{route.dose.light_mg[1]} mg
                    </li>
                  )}
                  {route.dose.common_mg && (
                    <li>
                      一般的: {route.dose.common_mg[0]}–
                      {route.dose.common_mg[1]} mg
                    </li>
                  )}
                  {route.dose.strong_mg && (
                    <li>
                      強い: {route.dose.strong_mg[0]}–
                      {route.dose.strong_mg[1]} mg
                    </li>
                  )}
                </ul>
              )}
            </div>
          ))}
        </>
      )}

      {substance.risks && (
        <>
          <h2>リスク</h2>
          {substance.risks.acute && (
            <>
              <h3>急性</h3>
              <ul>
                {substance.risks.acute.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}
          {substance.risks.chronic && (
            <>
              <h3>慢性</h3>
              <ul>
                {substance.risks.chronic.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </main>
  );
}
