import DetailComponent from "@/app/components/DetailComponent";

export default function DetailPage({ params }: { params: { jenis: string; id: string } }) {
  return <DetailComponent jenis={params.jenis} id={params.id} />;
}
