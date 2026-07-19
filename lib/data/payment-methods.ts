export interface PaymentMethodOption {
  value: string;
  label: string;
}

export const paymentMethods: PaymentMethodOption[] = [
  { value: "pay-at-hotel", label: "Pay at Hotel" },
  { value: "card", label: "Credit / Debit Card" },
  { value: "khalti", label: "Khalti" },
  { value: "esewa", label: "eSewa" },
];

/** Derived lookup map — stays in sync with `paymentMethods` automatically. */
export const paymentMethodLabels: Record<string, string> = paymentMethods.reduce(
  (acc, method) => {
    acc[method.value] = method.label;
    return acc;
  },
  {} as Record<string, string>
);
