const annasApi = {
    generateLink: async (md5, key) => {
        try {
            let apiResponse = await fetch(`https://annas-archive.li/dyn/api/fast_download.json?md5=${md5}&key=${key}`)
            console.log(await apiResponse)

            let jsonApiResponse = await apiResponse.json()

            let responseLink = await jsonApiResponse.download_url
            let responseInfo = await jsonApiResponse.account_fast_download_info
    
            const result = {
                link: await responseLink,
                info: await responseInfo
            }
    
            return result
        } catch (error) {
            console.log('Annas Archive API error:', error)
        }
    }
};