export default function Faq({ faq, index }) {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-semibold">
        {index + 1}. {faq?.que}
      </h2>
      <p className="ms-4">{faq?.ans}</p>
    </div>
  );
}
