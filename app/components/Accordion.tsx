import ProcessFlow from "./ProcessFlow";

const Accordion = ({
  question,
  content,
  processFlow
}: {
  question: string;
  content: string;
  processFlow?: boolean;
}) => {
  return (
    <div>
      <div className="collapse collapse-arrow backdrop-blur-md bg-white/10 border border-white/20 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-white text-2xl">{question}</div>
        <div className="collapse-content text-xl text-white">{content} {processFlow && <ProcessFlow />}</div>
      </div>
    </div>
  );
};

export default Accordion;
