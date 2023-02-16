export const injectLibrary = async (
    callback: (loaded?: boolean) => void,
    idName: string,
    src: string
) => {
    if (!window || !window.document || !window.document.getElementById) return;
    const existingScript = document.getElementById(idName);
    if (!existingScript) {
        // Circles SDK
        const script = document.createElement('script');
        script.src = src;
        script.id = idName;
        script.onload = async () => {
            if (callback) callback(true);
        };
        document.body.appendChild(script);
    }
    if (existingScript && callback) callback();
};
