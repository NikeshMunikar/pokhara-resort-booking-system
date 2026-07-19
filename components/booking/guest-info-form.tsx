"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { guestInfoSchema, type GuestInfo } from "@/lib/booking-schema";
import { arrivalTimes } from "@/lib/data/arrival-times";

const nationalities = [
  "Nepal",
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Japan",
  "China",
  "Germany",
  "France",
  "United Arab Emirates",
  "Other",
];

interface GuestInfoFormProps {
  defaultValues: GuestInfo;
  onBack: () => void;
  onContinue: (data: GuestInfo) => void;
}

export function GuestInfoForm({ defaultValues, onBack, onContinue }: GuestInfoFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GuestInfo>({
    resolver: zodResolver(guestInfoSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onContinue)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" className="mt-1.5" {...register("fullName")} />
          {errors.fullName && (
            <p className="mt-1 text-xs text-danger">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" className="mt-1.5" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" className="mt-1.5" {...register("phone")} />
          {errors.phone && (
            <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="nationality">Nationality</Label>
          <Controller
            name="nationality"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="nationality" className="mt-1.5">
                  <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent>
                  {nationalities.map((n) => (
                    <SelectItem key={n} value={n}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.nationality && (
            <p className="mt-1 text-xs text-danger">{errors.nationality.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="arrivalTime">Estimated Arrival</Label>
          <Controller
            name="arrivalTime"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="arrivalTime" className="mt-1.5">
                  <SelectValue placeholder="Select arrival window" />
                </SelectTrigger>
                <SelectContent>
                  {arrivalTimes.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.arrivalTime && (
            <p className="mt-1 text-xs text-danger">{errors.arrivalTime.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="specialRequests">Special Requests (optional)</Label>
        <Textarea
          id="specialRequests"
          className="mt-1.5"
          rows={4}
          {...register("specialRequests")}
        />
        {errors.specialRequests && (
          <p className="mt-1 text-xs text-danger">{errors.specialRequests.message}</p>
        )}
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}
