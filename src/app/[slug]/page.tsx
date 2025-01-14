import { notFound } from "next/navigation";

export const revalidate = 20;
export const dynamic = "error";
export const dynamicParams = true;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function SlugTest(props: Props) {
  console.log(
    "If you run 'npm run build && npm run start' and visit http://localhost:3000/missingpage, you'll see a Cache-Control value of 's-maxage=31536000,'"
  );

  const params = await props.params;
  if (params.slug === "missingpage") {
    notFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Slug: {params.slug}</p>
    </div>
  );
}
