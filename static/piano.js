let constantEng = {
    pianoRender: {
        sortDir: "low_to_high",
        priceMax: "200000",
        priceMin: "1000",
        currentBrand: "all",

    }
};

const pianosList = [

    // STEINWAY & SONS
    {
        "serial": 300183,
        "uri": "images/product/ste300183/0.jpg",
        "price": 125000,
        "modelName": "M170 Queen Anne",
        "brand": "STEINWAY & SONS",
        "origin": "New York, USA",
        "link": "ste300183.html",
        "imageCount": 40,
        "videoLink": "https://www.youtube.com/embed/6_PC8M2zIds",
        "description": "Before WWII, the Queen Anne was specifically customized for royalties and highly influential figures from all over the world. Model M went on sale in 1911 and the design was finalized in 1918 where its structure has remained untouched since its procreation. The materials chosen to construct this particular piano were all derived from top quality timber that no longer exist in the market ever since the end of WWII. 500 year old spruces from frigid region were specially picked to create the sound board and the other sound components of the piano, that was then left to mature naturally for 3 decades. <br><br> It was then reconstructed in 2020, where the action, hammer and other corresponding components such as the strings and consumables were all replaced with those produced by world class manufacturers such as Abel Germany. Durables such as the shell, sound board and iron plate were also completely refurbished, reviving its past glory and restoring its timbre from the golden age, effectively increasing its lifespan and durability."
    },
    {
        "serial": 93144,
        "uri": "images/product/ste93144/0.jpg",
        "price": 128000,
        "modelName": "A188 Louis XVI",
        "brand": "STEINWAY & SONS",
        "origin": "Hamburg, Germany",
        "link": "ste93144.html",
        "imageCount": 41,
        "videoLink": "https://www.youtube.com/embed/-ppviNhZpPs",
        "description": "Before WWII, the Louis XVI was specifically customized for royalties and highly influential figures from all over the world. The design of model A was finalized in 1896, where its structure has remained untouched since its procreation. The materials chosen to construct this particular piano were all derived from top quality timber that no longer exist in the market ever since the end of WWII. 500 year old spruces from frigid region were specially picked to create the sound board and the other sound components of the piano, that was then left to mature naturally for 3 decades.<br><br>It was then reconstructed in 2020, where the action, hammer and other corresponding components such as the strings and consumables were all replaced with those produced by world class manufacturers such as Abel Germany. Durables such as the shell, sound board and iron plate were also completely refurbished, reviving its past glory and restoring its timbre from the golden age, effectively increasing its lifespan and durability."
    },
    {
        "serial": 261296,
        "uri": "images/product/ste261296/0.jpg",
        "price": 78000,
        "modelName": "M170",
        "brand": "STEINWAY & SONS",
        "origin": "New York, USA",
        "link": "ste261296.html",
        "imageCount": 41,
        "videoLink": "https://www.youtube.com/embed/OCnhIDL8yWA",
        "description": "Model M went on sale in 1911 and the design was finalized in 1918, where its structure has remained untouched since its procreation. The materials chosen to construct this particular piano were all derived from top quality timber that no longer exist in the market ever since the end of WWII. 500 year old spruces from frigid region were specially picked to create the sound board and the other sound components of the piano, that was then left to mature naturally for 3 decades.<br><br> It was then reconstructed in USA in 2020, where the actions, hammers and other corresponding components such as the strings and consumables were all replaced with those produced by original STEINWAY factory USA. Durables such as the shell, sound board and iron plate were also completely refurbished, reviving its past glory and restoring its timbre from the golden age, effectively increasing its lifespan and durability."
    },
    {
        "serial": 369476,
        "uri": "images/product/ste369476/0.jpg",
        "price": 83000,
        "modelName": "L180",
        "brand": "STEINWAY & SONS",
        "origin": "New York, USA",
        "link": "ste369476.html",
        "imageCount": 41,
        "videoLink": "https://www.youtube.com/embed/sYndBolCN4I",
        "description": "Model L and O are essentially identical in terms of design. The design of Model O was completed in 1899 and the structure of the design has remained unchanged throughout. Since 1923 in New York, the producers of Steinway's Grand Piano has renamed Model O to Model L, it wasn't until 2006 when they decided to revert its name to Model O, hence, the sole difference between these 2 models is simply their names. The reason behind the change between 1923 to 2005 was to cater to the American way of calling the 6 Foot Grand Piano.<br><br> The sound board of this piano is perfect and there is almonst no wear and tear inside the action. No need for renovation, only the appearance was fixed."
    },
    {
        "serial": 193751,
        "uri": "images/product/ste193751/0.jpg",
        "price": 78000,
        "modelName": "M170",
        "brand": "STEINWAY & SONS",
        "origin": "New York, USA",
        "link": "ste193751.html",
        "imageCount": 41,
        "videoLink": "https://www.youtube.com/embed/0MvhRPi8n1w",
        "description": "Model M went on sale in 1911 and the design was finalized in 1918, where its structure has remained untouched since its procreation. The materials chosen to construct this particular piano were all derived from top quality timber that no longer exist in the market ever since the end of WWII. 500 year old spruces from frigid region were specially picked to create the sound board and the other sound components of the piano, that was then left to mature naturally for 3 decades. <br><br> It was then reconstructed in USA in 2020, where the actions, hammers and other corresponding components such as the strings and consumables were all replaced with those produced by original STEINWAY factory USA. Durables such as the shell, sound board and iron plate were also completely refurbished, reviving its past glory and restoring its timbre from the golden age, effectively increasing its lifespan and durability."
    },
    {
        "serial": 285121,
        "uri": "images/product/ste285121/0.jpg",
        "price": 78000,
        "modelName": "M170",
        "brand": "STEINWAY & SONS",
        "origin": "New York, USA",
        "link": "ste285121.html",
        "imageCount": 41,
        "videoLink": "https://www.youtube.com/embed/KEmhqDE842g",
        "description": "Model M went on sale in 1911 and the design was finalized in 1918, where its structure has remained untouched since its procreation. The materials chosen to construct this particular piano were all derived from top quality timber that no longer exist in the market ever since the end of WWII. 500 year old spruces from frigid region were specially picked to create the sound board and the other sound components of the piano, that was then left to mature naturally for 3 decades. <br><br> It was then reconstructed in USA in 2020, where the actions, hammers and other corresponding components such as the strings and consumables were all replaced with those produced by original STEINWAY factory USA. Durables such as the shell, sound board and iron plate were also completely refurbished, reviving its past glory and restoring its timbre from the golden age, effectively increasing its lifespan and durability."
    },

    // Blüthner


    {
        "serial": 111378,
        "uri": "images/product/blu111378/0.jpg",
        "price": 88800,
        "modelName": "Mod.10",
        "brand": "Blüthner",
        "origin": "Leipzig, Germany",
        "link": "blu111378.html",
        "imageCount": 41,
        "videoLink": "https://www.youtube.com/embed/ICski0aGeqg",
        "description": "Blüthner, a prestigious name established in 1853 in Leipzig, Germany, it is one of the 6 biggest names in the grand piano manufacturing industry. Together with Bösendorfer and C. Bechstein, they were known collectively and affectionately as the 3Bs of Europe. Before the WWII, Blüthner was effectively the most influential brand in the global market, gaining the reputation of being the national jewel of Germany. This particular piece was manufactured during the golden age of Blüthner, with the particular design (Mod.10) being finalized in 1924. The materials chosen to construct this particular piano were all derived from top quality timber that no longer exist in the market ever since the end of WWII. 500 year old spruces from frigid region were specially picked to create the sound board and the other sound components of the piano, that was then left to mature naturally for 3 decades. <br><br> It was then reconstructed in Japan in 2019, where the action, hammer and other corresponding components such as the strings and consumables were all replaced with those produced by world class manufacturers such as Abel and Renner. Durables such as the shell, sound board and iron plate were also completely refurbished, reviving its past glory and restoring its timbre from the golden age, effectively increasing its lifespan and durability."
    },

    // Other Euro Brand

    {
        "serial": 93956,
        "uri": "images/product/gro93956/0.jpg",
        "price": 115000,
        "modelName": "Concerto G-275",
        "brand": "Grotrian—Steinweg",
        "origin": "Brunswick, Germany",
        "link": "gro93956.html",
        "imageCount": 41,
        "videoLink": "https://www.youtube.com/embed/cbveNWvrUkc",
        "description": "Established back in 1835 in Brunswick, Germany, Grotrian-Steinweg was co-founded by Heinrich Engelhard Steinweg (founded Steinway in 1853, New York after moving to the USA) and Friedrich Grotrian. The G275, being the flagship model of the company, is a grand piano that was mainly used in concerts. <br><br> This particular piece was originally used as a decorative piece in an English mansion. As it was rarely used, thus it is in an almost pristine condition, with very minimal wear and tear."
    },

    // YAMAHA

    {
        "serial": 5418344,
        "uri": "images/product/yam5418344/0.jpg",
        "price": 6000,
        "modelName": "U3 (HQ300B)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam5418344.html",
        "imageCount": 15,
        "videoLink": "https://www.youtube.com/embed/OCnhIDL8yWA",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period. <br><br>The HQ Series, which includes the U100 and U300 models, features an original factory-installed automatic playing system, comparable to the currently available DU1ENST. We exclusively offer over 2,000 high-quality automatic playing pieces for our MX/SX and HQ customers free of charge. The SX/SXG suffix indicates Yamaha's original high-precision silent system, allowing for late-night practice without disturbing others. It is the most cost-effective choice for beginner pianos in all of Singapore."
    },
    {
        "serial": 5209341,
        "uri": "images/product/yam5209341/0.jpg",
        "price": 5500,
        "modelName": "U1 (HQ100)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam5209341.html",
        "imageCount": 15,
        "videoLink": "https://www.youtube.com/embed/OCnhIDL8yWA",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period. <br><br>The HQ Series, which includes the U100 and U300 models, features an original factory-installed automatic playing system, comparable to the currently available DU1ENST. We exclusively offer over 2,000 high-quality automatic playing pieces for our MX/SX and HQ customers free of charge. The SX/SXG suffix indicates Yamaha's original high-precision silent system, allowing for late-night practice without disturbing others. It is the most cost-effective choice for beginner pianos in all of Singapore."
    },
    {
        "serial": 5249006,
        "uri": "images/product/yam5249006/0.jpg",
        "price": 6000,
        "modelName": "U3 (HQ300)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam5249006.html",
        "imageCount": 15,
        "videoLink": "https://www.youtube.com/embed/OCnhIDL8yWA",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period. <br><br>The HQ Series, which includes the U100 and U300 models, features an original factory-installed automatic playing system, comparable to the currently available DU1ENST. We exclusively offer over 2,000 high-quality automatic playing pieces for our MX/SX and HQ customers free of charge. The SX/SXG suffix indicates Yamaha's original high-precision silent system, allowing for late-night practice without disturbing others. It is the most cost-effective choice for beginner pianos in all of Singapore."
    },
    {
        "serial": 5013211,
        "uri": "images/product/yam5013211/0.jpg",
        "price": 4800,
        "modelName": "U1 (MX101R)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam5013211.html",
        "imageCount": 16,
        "videoLink": "https://www.youtube.com/embed/oh-ZvDu9zOk?si=-872WQ49RK3K6uQt",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period.<br><br>The MX/SX models, which include the U10BL and U10A, feature an original factory-installed automatic playing system, comparable to the currently available DU1ENST. We exclusively offer over 2,000 high-quality automatic playing pieces free of charge to our MX/SX customers. It is the most cost-effective choice for beginner pianos in all of Singapore."
    },
    {
        "serial": 4895521,
        "uri": "images/product/yam4895521/0.jpg",
        "price": 6000,
        "modelName": "U1-Ultra (MX300MR)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam4895521.html",
        "imageCount": 17,
        "videoLink": "https://www.youtube.com/embed/_snCD_dc_Ac?si=cXV3Q5XJ46x4lWtd",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period.<br><br>The MX3 series, introduced at the same time, featured exclusive models equipped with automatic playing systems, akin to the current DU1ENST with the option of YUS5-grade hammers and wooden finishes (the new piano's price rivals that of the SU7). Yamaha offered over 2,000 high-quality automatic playing tracks exclusively for its SX/MX customers, making it the most cost-effective choice for beginner pianists in Singapore, without comparison."
    },
    {
        "serial": 5312251,
        "uri": "images/product/yam5312251/0.jpg",
        "price": 4800,
        "modelName": "U1 (SX101RBl)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam5312251.html",
        "imageCount": 21,
        "videoLink": "https://www.youtube.com/embed/_LxXuoKngdo?si=nehm5kjrfJIVH24g",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period.<br><br>The MX/SX models, which include the U10BL and U10A, feature an original factory-installed automatic playing system, comparable to the currently available DU1ENST. We exclusively offer over 2,000 high-quality automatic playing pieces free of charge to our MX/SX customers. It is the most cost-effective choice for beginner pianos in all of Singapore."
    },
    {
        "serial": 4889393,
        "uri": "images/product/yam4889393/0.jpg",
        "price": 6800,
        "modelName": "UX30A",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam4889393.html",
        "imageCount": 19,
        "videoLink": "https://www.youtube.com/embed/UZNeG0Zt6WM?si=M7jbDXQUFta-Yov_",
        "description": "The fifth generation UX series from Japan's YAMAHA, featuring true 米 backs, was only available between 1990 and 1997. Due to high manufacturing costs and dwindling stocks of old wood after 1997, along with Japan's economic downturn, 米 back production ceased. Although the UX series was first released in 1975, the first four generations before 1990 featured a three-pillar crossing and were not 米, with significant differences in manufacturing processes, design, and material configuration compared to the later two generations. The playing experience of the true 米 back is much better than the current YUS series on sale. It's an essential collectible for YAMAHA piano enthusiasts."
    },
    {
        "serial": 5066967,
        "uri": "images/product/yam5066967/0.jpg",
        "price": 5500,
        "modelName": "U1 (MX202R)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam5066967.html",
        "imageCount": 20,
        "videoLink": "https://www.youtube.com/embed/hLqHSBuKzfg?si=3giIC1sFwUTh7Kxx",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period.<br><br>The MX/SX models, which include the U10BL and U10A, feature an original factory-installed automatic playing system, comparable to the currently available DU1ENST, coupled with cat paw curved legs, making it highly aesthetic and valuable.We exclusively offer over 2,000 high-quality automatic playing pieces free of charge to our MX/SX customers. It is the most cost-effective choice for beginner pianos in all of Singapore."
    },
    {
        "serial": 5009982,
        "uri": "images/product/yam5009982/0.jpg",
        "price": 5800,
        "modelName": "U1 (SX101RWnC)",
        "brand": "YAMAHA",
        "origin": "Japan",
        "link": "yam5009982.html",
        "imageCount": 21,
        "videoLink": "https://www.youtube.com/embed/B8Ag-p7WIYo?si=PDCScJqdNO6NtHkM",
        "description": "Yamaha was founded in Hamamatsu, Japan, in 1887 and began producing grand pianos in 1901. It is the global leader in assembly line piano manufacturing. Yamaha reached its true peak from 1987 to 1997, achieving unprecedented levels in product design, craftsmanship, and materials. The U Series was fully standardized during this period.<br><br>The SX series with WnC special appearance is a model exclusively equipped with automatic playing system at the same time as the original U10BL and U10A. It is equivalent to the current DU1ENST model, which is newly available for sale, with an optional solid American walnut composite shell, coupled with cat paw curved legs, making it highly aesthetic and valuable.We exclusively offer over 2,000 high-quality automatic playing pieces free of charge to our MX/SX customers. It is the most cost-effective choice for beginner pianos in all of Singapore."
    },

    // OHHASHI
    {
        "serial": 3054,
        "uri": "images/product/ohh3054/0.jpg",
        "price": 12000,
        "modelName": "No.132",
        "brand": "OHHASHI",
        "origin": "Japan",
        "link": "ohh3054.html",
        "imageCount": 17,
        "videoLink": "https://www.youtube.com/embed/6II0ZMmTIE0",
        "description": "This particular piece was made by hand back in 1974 by the artisan, Ohhashi Hataiwa, the incomparable piano maker from the Land of The Rising Sun and the national pride of Japan. It was kept in a perfect condition and has never been retouched. Starting from 1958 to 1995, within the span of 37 years, Ohhashi and his son made a total of 4639 pianos by hand, which was an effective display of the top notch Japanese craftsmanship in Piano making, making it the only Japanese piano that could be placed in the same league as the European luxury brands.<br><br> The first piece of Piano from Ohhashi was born in 1958, and was affixed with a serial number of 1961. Throughout Ohhashi's life, that number never exceeded 4000, making the number of pianos that were personally made by him to be in slight excess of a 2000, and unfortunately, only a handful was properly preserved to be able to make it into the 2nd hand piano market, making his pianos a priceless and precious collectible for hardcore piano fans."
    },
    {
        "serial": 2301,
        "uri": "images/product/ohh2301/0.jpg",
        "price": 12000,
        "modelName": "No.132",
        "brand": "OHHASHI",
        "origin": "Japan",
        "link": "ohh2301.html",
        "imageCount": 17,
        "videoLink": "https://www.youtube.com/embed/mS-k0gPBpAs",
        "description": "This particular piece was made by hand back in 1966 by the artisan, Ohhashi Hataiwa, the incomparable piano maker from the Land of The Rising Sun and the national pride of Japan. It was kept in a perfect condition and has never been retouched. Starting from 1958 to 1995, within the span of 37 years, Ohhashi and his son made a total of 4639 pianos by hand, which was an effective display of the top notch Japanese craftsmanship in Piano making, making it the only Japanese piano that could be placed in the same league as the European luxury brands.<br><br> The first piece of Piano from Ohhashi was born in 1958, and was affixed with a serial number of 1961. Throughout Ohhashi's life, that number never exceeded 4000, making the number of pianos that were personally made by him to be in slight excess of a 2000, and unfortunately, only a handful was properly preserved to be able to make it into the 2nd hand piano market, making his pianos a priceless and precious collectible for hardcore piano fans."
    }
];