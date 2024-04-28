import { useRouter } from "next/router";

import globalMeta from "../constants/globalMeta";

const Schema = () => {
    const router = useRouter;
    const structuredLd = JSON.stringify({
        "@context": `${globalMeta.siteUrl}${router.asPath}`,
        "description": `${globalMeta.description}`,
    });
}

export default Schema;