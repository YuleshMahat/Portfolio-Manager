// hooks/useForm.ts
import { useState, ChangeEvent } from "react";

type FormControlElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

const useForm = <T extends Record<string, any>>(initial: T) => {
  const [form, setForm] = useState<T>(initial);

  const handleChange = (
    e: ChangeEvent<FormControlElement> // ← THIS LINE FIXED IT
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateField = (name: keyof T, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => setForm(initial);

  return { form, setForm, handleChange, updateField, reset };
};

export default useForm;
