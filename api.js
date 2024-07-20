const annasApi = {
    generateLink: async (md5, key) => {
        try {
            const apiResponse = await fetch(`https://annas-archive.li/dyn/api/fast_download.json?md5=${md5}&key=${key}`);
            const jsonApiResponse = await apiResponse.json();

            if (jsonApiResponse.error) {
                console.log('Annas Archive API error:', jsonApiResponse.error);
                return null;
            }

            const responseLink = jsonApiResponse.download_url;
            const responseInfo = jsonApiResponse.account_fast_download_info;

            const result = {
                link: responseLink,
                info: responseInfo
            };

            return result;
        } catch (error) {
            console.log('Annas Archive API error:', error);
            return null;
        }
    }
};
