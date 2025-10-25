// src/i18n/index.js
import es from "./es.json";
import en from "./en.json";
import zh from "./zh.json";

const translations = { es, en, zh };

export function t(lang, keyPath) {
    const keys = keyPath.split(".");
    let value = translations[lang];
    for (const key of keys) {
        value = value?.[key];
        if (!value) {
            console.warn(`Translation key not found: ${keyPath} for language: ${lang}`);
            return keyPath;
        }
    }
    return value;
}

// Helper para obtener el idioma actual
export function getCurrentLanguage() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('preferredLang') || 'es';
    }
    return 'es';
}

// Helper para cambiar idioma
export function setLanguage(lang) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLang', lang);
        document.documentElement.lang = lang;
    }
}
