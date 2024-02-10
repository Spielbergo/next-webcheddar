import { useRouter } from "next/router";

import globalMeta from "../constants/globalMeta";

const Schema = () => {
    const router = useRouter;
    const structuredLd = JSON.stringify({
        "@context": `${globalMeta.siteUrl}${router.asPath}`,
        "description": "NextJs Head, a reliable guide for how to use it and what it's really for.",
    });
}

export default Schema;