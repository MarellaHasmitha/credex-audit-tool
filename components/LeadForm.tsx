"use client";

import { useState } from "react";

type Lead = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
};

export default function LeadForm() {
  const [lead, setLead] = useState<Lead>({
    name: "",
    email: "",
    company: "",
    teamSize: "",
  });

  const [leadMessage, setLeadMessage] = useState("");

  function handleLeadChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLeadSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    const data = await response.json();

    if (!response.ok) {
      setLeadMessage(data.error);
      return;
    }

    setLeadMessage("Report request saved successfully!");

    setLead({
      name: "",
      email: "",
      company: "",
      teamSize: "",
    });
  }

  return (
    <form
      onSubmit={handleLeadSubmit}
     className="mt-6 mx-auto w-fit rounded-lg p-4 bg-white shadow"
    >
      <h2 className="text-xl font-bold mb-3">
        Get Your Full Report
      </h2>

     <div>
          <div className="flex items-center gap-3 mb-3">
                <p className="font-bold min-w-24">
                    Name :
                </p>

                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={lead.name}
                    onChange={handleLeadChange}
                    className="bg-white rounded shadow-lg px-2 py-2 w-lg"
                />
            </div>


            <div className="flex items-center gap-3 mb-3">
                <p className="font-bold min-w-24">
                    Email :
                </p>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={lead.email}
                    className="bg-white rounded shadow-lg p-2 w-lg"
                    onChange={handleLeadChange} 
                />
            </div>

            <div className="flex items-center gap-3 mb-3">
                <p className="font-bold min-w-24">
                    Company :
                </p>
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={lead.company}
                            onChange={handleLeadChange}
                            className="bg-white p-2 rounded w-lg shadow-lg mb-3"
                        />
            </div>

           <div className="flex items-center gap-3 mb-3">
                <p className="font-bold min-w-24">
                   Team Size :
                </p>

                <input
                    type="number"
                    name="teamSize"
                    placeholder="Team size"
                    value={lead.teamSize}
                    onChange={handleLeadChange}
                    className="bg-white shadow-lg p-2 rounded w-lg mb-3"
                />
            </div>

      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Lead
      </button>

      {leadMessage && (
        <p className="mt-3 text-sm">
          {leadMessage}
        </p>
      )}
    </form>
  );
}