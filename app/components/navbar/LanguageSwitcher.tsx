'use client';
import React, { useEffect, useRef, useState } from 'react';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n: i18nextInstance } = useTranslation(); // ensures components re-render on change
  const current = i18nextInstance.language || 'pl';
  const ref = useRef<HTMLDetailsElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // sync open state with native details element
    if (ref.current) {
      ref.current.open = open;
    }
  }, [open]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const details = ref.current;
      if (!details) return;
      if (!details.contains(e.target as Node)) {
        setOpen(false); // close when clicking outside
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setOpen(false); // optionally close dropdown immediately
  };

  return (
    <li>
      <details ref={ref} onToggle={() => setOpen(ref.current?.open ?? false)}>
        <summary style={{ cursor: 'pointer' }}>
          Language: <strong>{current.toUpperCase()}</strong>
        </summary>

        <ul className="bg-base-100 rounded-t-none p-2">
          {['en', 'pl', 'ru'].map((lng) => (
            <li key={lng}>
              <button
                onClick={() => changeLanguage(lng)}
                className={`block w-full text-left px-2 py-1 ${current === lng ? 'font-bold' : ''}`}
              >
                {lng.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};
