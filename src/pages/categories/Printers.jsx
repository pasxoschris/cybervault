import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import ToggleYesNo from "../../components/ToggleYesNo";
import PrinterIcon from "../../components/icons/PrinterIcon";

export default function Printers() {
  const [form, setForm] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("id");

      if (error) console.error("Error fetching categories:", error);
      else setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // Filter ΜΟΝΟ την Κατηγορία "Εκτυπωτές"
  // -----------------------------
  const printersCategory = categories.find(
    (cat) => cat.label === "Εκτυπωτές"
  );

  const subCategories = categories.filter(
    (sub) => sub.parent_id === (printersCategory?.id || -1)
  );

  return (
    <div className="min-h-screen bg-[#0c111a] flex items-start justify-center p-8">
      <div className="bg-[#0f1522] border border-white/5 shadow-xl rounded-2xl p-8 w-full max-w-3xl text-slate-200">
      <h1 className="text-3xl font-bold text-center mb-8">
        <div className="flex justify-center mb-4">
        <PrinterIcon size={80} color="#22d3ee" />
      </div>
      Εκτυπωτές
    </h1>

        {/* ----------------------------- */}
        {/* Λίστα Ερωτήσεων */}
        {/* ----------------------------- */}
        <div className="space-y-6">
       
          {/* ----------------------------- */}
          {/* Subcategory List */}
          {/* ----------------------------- */}
          {subCategories.map((sub) => (
            <div
              key={sub.id}
              className="border border-slate-600 rounded-xl p-4 bg-[#1a2333]"
            >
              {/* Row */}
              <div className="flex items-center">
                <span className="font-medium text-slate-200 w-72">
                  {sub.label}
                </span>

                {/* ToggleYesNo Component */}
                <div className="ml-auto">
                  <ToggleYesNo
                    value={form[sub.name] || "no"}
                    onChange={(v) => handleChange(sub.name, v)}
                  />
                </div>
              </div>

              {/* Comments Only When NO */}
              {form[sub.name] === "no" && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Σχόλια..."
                    value={form[`${sub.name}_comments`] || ""}
                    onChange={(e) =>
                      handleChange(`${sub.name}_comments`, e.target.value)
                    }
                    className="w-full bg-[#0f1522] border border-slate-600 rounded-lg p-2 text-slate-200 focus:ring-2 focus:ring-cyan-400 outline-none"
                  />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
