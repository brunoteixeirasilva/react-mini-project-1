import { ReportHandler } from "web-vitals";

const reportWebVitals = (
    onPerfEntry?: undefined | Function | ReportHandler
) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(
            ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                const onReport = onPerfEntry as ReportHandler;
                getCLS(onReport);
                getFID(onReport);
                getFCP(onReport);
                getLCP(onReport);
                getTTFB(onReport);
            }
        );
    }
};

export default reportWebVitals;
