import Faq from "@/components/Faq";

export default function Admin() {
  const faqJson = [
    {
      que: "What is the purpose of this application?",
      ans: "This application helps users securely manage and store their passwords in one place.",
    },
    {
      que: "How do I reset my password?",
      ans: "Click on the 'Forgot Password' link on the login page and follow the instructions sent to your email.",
    },
    {
      que: "Is my data encrypted?",
      ans: "Yes, all user data is encrypted using industry-standard AES-256 encryption.",
    },
    {
      que: "Can I access my data from multiple devices?",
      ans: "Yes, you can log in from any device with your credentials and access your stored data securely.",
    },
    {
      que: "How do I report a bug or issue?",
      ans: "You can report bugs using the feedback form in the app or by emailing support@example.com.",
    },
    {
      que: "Is there a limit to how many passwords I can store?",
      ans: "No, there is no limit. You can store as many passwords as you need.",
    },
    {
      que: "Can I organize my saved credentials?",
      ans: "Yes, you can use folders and tags to organize your saved credentials efficiently.",
    },
    {
      que: "What happens if I uninstall the app?",
      ans: "Your data remains safe in the cloud and can be accessed again by reinstalling the app and logging in.",
    },
    {
      que: "Do you offer two-factor authentication (2FA)?",
      ans: "Yes, we support 2FA for enhanced security. You can enable it from your account settings.",
    },
    {
      que: "Is there a premium version of the app?",
      ans: "Yes, we offer a premium plan with additional features like cloud sync, advanced security, and priority support.",
    },
  ];

  return (
    <>
      <div className="container cont">
        <div className="max-w-[800px] cont mx-auto gap-12">
          <div>
            <span className="text-gray-600">Topic:</span>
            <h1 className="text-4xl">Artificial Intelligence</h1>
          </div>
          <div>
            <span className="text-gray-600">FAQs:</span>
            {faqJson.map((faq, index) => {
              return <Faq key={index} index={index} faq={faq} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
