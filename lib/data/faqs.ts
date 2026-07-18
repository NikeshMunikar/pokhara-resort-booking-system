export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "checkin",
    question: "What are check-in and check-out times?",
    answer:
      "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be requested and are subject to availability.",
  },
  {
    id: "cancellation",
    question: "What is your cancellation policy?",
    answer:
      "Free cancellation up to 48 hours before arrival. Cancellations within 48 hours are charged the first night's rate.",
  },
  {
    id: "airport",
    question: "Do you offer airport pickup?",
    answer:
      "Yes — complimentary pickup from Pokhara Airport is available on request when you share your flight details in advance.",
  },
  {
    id: "children",
    question: "Is the resort suitable for families with children?",
    answer:
      "Yes. Family and connecting rooms are available, along with extra beds and a children's menu at the restaurant.",
  },
  {
    id: "pets",
    question: "Are pets allowed?",
    answer:
      "Well-behaved pets are welcome in select ground-floor rooms. Please let us know in advance so we can prepare the right room.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, bank transfer, and popular local wallets including Khalti and eSewa, alongside cash at the property.",
  },
];
