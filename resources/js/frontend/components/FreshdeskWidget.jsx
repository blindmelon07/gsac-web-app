import { useEffect } from "react";

const FRESHDESK_HOST = "https://gsac.freshdesk.com";
const FRESHDESK_TOKEN = "01KQRBNXP4TGFS4A70CZCBBX76";
const FRESHDESK_WIDGET_ID = "01KQRBP01HBSC96BMWFZT5J28D";
const SCRIPT_ID = "Freshdesk-js-sdk";
const STYLE_ID = "freshdesk-launcher-hide-style";

const FreshdeskWidget = () => {
  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      // hides the floating launcher button while keeping the widget loaded
      style.innerHTML = `[class*="zd-launcher"] { display: none !important; }`;
      document.head.appendChild(style);
    }

    const initFreshdesk = () => {
      window.fdWidget?.init({
        token: FRESHDESK_TOKEN,
        host: FRESHDESK_HOST,
        widgetId: FRESHDESK_WIDGET_ID,
      });
    };

    if (document.getElementById(SCRIPT_ID)) {
      initFreshdesk();
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `${FRESHDESK_HOST}/webchat/js/widget.js`;
    script.onload = initFreshdesk;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      const existingStyle = document.getElementById(STYLE_ID);
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return null;
};

export default FreshdeskWidget;
