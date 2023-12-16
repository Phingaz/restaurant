"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";

export function DatePicker({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: SelectSingleEventHandler | undefined;
}) {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="input"
          className={cn(
            "w-full h-[62px] justify-start text-left font-normal hover:border-green transition-all duration-300",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-white/88">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          required
          mode="single"
          selected={date}
          onSelect={setDate}
          onDayClick={() => setIsCalendarOpen(false)}
          initialFocus
          fromDate={new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
