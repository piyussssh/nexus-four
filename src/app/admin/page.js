import Faq from "@/components/Faq";
import FaqInput from "@/components/FaqInput";

export default function Admin() {


const faqJson=[]
  return (
    <>
      <div className="container cont">
        <div className="max-w-[800px] w-full cont mx-auto gap-12">
          <div>
            <span className="text-gray-600">Topic:</span>
            <h1 className="text-4xl">Artificial Intelligence</h1>
          </div>
          <div>
            <span className="text-gray-600">FAQs:</span>
            <FaqInput/>
            {faqJson.map((faq, index) => {
              return <Faq key={index} index={index} faq={faq} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
