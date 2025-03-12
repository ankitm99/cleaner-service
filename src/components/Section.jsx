import ViewDetails from "./ViewDetails";

export default function Section({ label, content, sectionIcon, onViewDetail }) {
  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow">
        {sectionIcon}
        <h2 className="mt-3 text-2xl font-bold text-green-600">{label}</h2>
        <p className="my-4 text-gray-700">{content}</p>
        <ViewDetails onViewDetail={onViewDetail} />
      </div>
    </>
  );
}
