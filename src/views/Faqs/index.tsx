import FaqsStore from "@/components/FaqsStore";
import PageHeader from "@/components/PageHeader";

function FaqsPage() {
  return (
    <>
      <PageHeader title="คำถามที่พบบ่อย" />
      <FaqsStore />
    </>
  );
}

export default FaqsPage;
