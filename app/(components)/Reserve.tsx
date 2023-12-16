import { DatePicker } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import { SelectPicker } from "@/components/ui/select";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Reserve = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState<Date>();
  const [persons, setPersons] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section id="reserve" className="p-6 lg:px-0  lg:h-[800px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-reserve bg-no-repeat w-full h-full flex justify-end items-end"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-darkGreen bg-opacity-80 min-w-[80%] min-h-[50%] p-10 flex flex-col gap-5 w-full h-full lg:w-auto lg:h-auto"
        >
          <h3>Book A Table</h3>

          <div className="flex justify-between items-center gap-5 md:flex-row flex-col">
            <label htmlFor="firstName" className="w-full">
              First Name
              <Input
                name="firstName"
                autoComplete="given-name"
                className="mt-2"
                placeholder="John"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="lastName" className="w-full">
              Last Name
              <Input
                name="lastName"
                autoComplete="family-name"
                className="mt-2"
                placeholder="Doe"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>

          <label htmlFor="email" className="w-full mb-5">
            Email
            <Input
              name="email"
              autoComplete="email"
              type="email"
              className="mt-2"
              placeholder="johndoe@email.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <div className="flex justify-between items-center gap-5 md:flex-row flex-col">
            <DatePicker date={date} setDate={setDate} />
            <SelectPicker value={persons} setValue={setPersons} />
          </div>
          <div className="flex w-full justify-end">
            <Button variant="orange" className="w-[150px] h-[50px] ">
              Book now
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Reserve;
