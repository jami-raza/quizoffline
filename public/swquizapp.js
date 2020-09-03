console.log('registered')
let cacheData = 'website'
const assets=[
    [
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/static/js/main.chunk.js",
        "/main.7a2c4778ec00e927b1a4.hot-update.js",
        "index.html",
        "/favicon.icon",
        "/Home",
        "/easy",
        "/medium",
        "/hard",
        "/",
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple",
        "/static/media/Easy.76bdb44b.png",
        "static/media/Medium.00cedb00.png",
        "/static/media/Hard.f91cc65c.png",
        "/static/media/Homebanner.4ed883d2.jpg",
        "/static/media/quizbanner.10f0ef19.jpg",
        
    ]
]
self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then(cache=>{
            cache.addAll(assets)
        }).catch((err)=>{
            console.log("err",err);
        })
    )
})



  self.addEventListener('fetch', event => {
    
        event.respondWith(
            caches.match(event.request)
                .then(cacheresponse => {
                    
                        console.log(cacheresponse)
                        return cacheresponse || fetch(event.request)
                     
            })
        )
    }
)