import {getSha256} from "./getSha256";

export const generateFingerprint = async (): Promise<string> => {
    const userAgent = navigator.userAgent;
    const screenResolution = `${screen.width}x${screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language;

    // Собираем все данные в одну строку
    const data = `${userAgent}-${screenResolution}-${timezone}-${language}`;

    // Возвращаем хеш данных
    return await getSha256(data);
}