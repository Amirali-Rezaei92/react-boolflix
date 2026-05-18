function getFlag(lang) {
    const flags = {
        en: "🇬🇧",
        it: "🇮🇹",
        fr: "🇫🇷",
        ja: "🇯🇵",
        es: "🇪🇸",
        de: "🇩🇪",
        ko: "🇰🇷",
        zh: "🇨🇳",
    };

    return flags[lang] || "🏳️";
}
export default getFlag;