import { z } from "zod";

export const guestInfoSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  nationality: z.string().min(1, "Please select your nationality"),
  arrivalTime: z.string().min(1, "Please select an estimated arrival time"),
  specialRequests: z
    .string()
    .max(500, "Special requests must be under 500 characters")
    .optional()
    .or(z.literal("")),
});

export type GuestInfo = z.infer<typeof guestInfoSchema>;

export const defaultGuestInfo: GuestInfo = {
  fullName: "",
  email: "",
  phone: "",
  nationality: "",
  arrivalTime: "",
  specialRequests: "",
};
