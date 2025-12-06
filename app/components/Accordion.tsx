const Accordion = ({
  question,
  content,
}: {
  question: string;
  content: string;
}) => {
  return (
    <div>
      <div className="collapse collapse-arrow backdrop-blur-md bg-white/10 border border-white/20 mb-4">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold text-white text-2xl">{question}</div>
        <div className="collapse-content text-xl text-white">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
