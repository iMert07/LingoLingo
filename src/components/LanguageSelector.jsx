import React from "react";

export default function LanguageSelector({ currentLang, onChange }) {
  return (
    <select value={currentLang} onChange={(e) => onChange(e.target.value)}>
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
    </select>
  );
}
