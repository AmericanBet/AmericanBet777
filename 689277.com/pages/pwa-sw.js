// SW 接收的类型
const CACHE_MANIFEST_JSON = 'CACHE_MANIFEST_JSON'

// SW 发送的类型
const CACHE_MANIFEST_SUCCESS = 'CACHE_MANIFEST_SUCCESS'

// 缓存(表/数据库)名称
const cacheName = 'pwa-manifest'
// manifest 头格式
const manifestHeader = {
    'Content-Type': 'application/manifest+json'
}
// manifest 路径
const manifestURLType = 'manifest.webmanifest'

/** 通信 */
self.addEventListener('message', async (event) => {
    // 1 接收数据
    const {
        type,
        payload
    } = event.data
    if (type === CACHE_MANIFEST_JSON) {
        // 2 将数据存入缓存
        await cacheManifest(payload)
        // 3 通知大厅 缓存已经就绪
        sendMessageToAllClients({
            type: CACHE_MANIFEST_SUCCESS
        })
    }
})

/** 创建 manifest 并存储到 cache */
async function cacheManifest(payload) {
    console.log('🤸🏻 ~ cacheManifest ~ payload:', payload)
    try {
        const pwaCache = await caches.open(cacheName) // 打开 缓存表
        // 生成符合规范的响应 特殊的响应头
        const response = new Response(payload.jsonString, {
            headers: manifestHeader,
        })
        await pwaCache.put(payload.manifestURL, response) // 路径为key 响应为value 存入缓存表
    } catch (error) {
        console.log('🤸🏻 ~ cacheManifest ~ error:', error)
    }
}

/** 将消息发送给 所有客户端 */
function sendMessageToAllClients(data) {
    self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
            client.postMessage(data)
        })
    })
}

// 缓存策略 cache only, 可理解为 前端创造数据，并模拟出接口服务
self.addEventListener('fetch', (event) => {
    if (event.request.url.includes(manifestURLType)) {
        console.log('🤸🏻 ~ self.addEventListener ~ event.request.url:', event.request.url)
        event.respondWith(caches.open(cacheName).then((cache) => cache.match(event.request.url)))
    }
})