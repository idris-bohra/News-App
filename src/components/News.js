import React, { Component } from "react";
import Newsview from "./Newsview";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  //    articles =  [
  //       {
  //       "source": {
  //       "id": "al-jazeera-english",
  //       "name": "Al Jazeera English"
  //       },
  //       "author": "Al Jazeera",
  //       "title": "US airport chaos continues as more than 2,600 flights cancelled - Al Jazeera English",
  //       "description": "FlightAware says more than 2,600 flights were cancelled in the US, nearly 4,600 worldwide.",
  //       "url": "https:www.aljazeera.com/news/2022/1/2/us-airport-chaos-continue-as-more-than-2600-flights-cancelled",
  //       "urlToImage": "https:www.aljazeera.com/wp-content/uploads/2022/01/AP21363006140300.jpg?resize=1200%2C630",
  //       "publishedAt": "2022-01-02T06:33:45Z",
  //       "content": "Air travel continues to be severely disrupted in the United States, with bad weather in parts of the country adding to the impact of a surge in COVID-19 infections fuelled by the Omicron variant.\r\nTh… [+2033 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Daily Mail"
  //       },
  //       "author": "Stephen M. Lepore",
  //       "title": "Chair of the FDIC, a Trump appointee, resigns after warning of 'hostile takeover' by Democrats - Daily Mail",
  //       "description": "McWilliams wrote an open letter slamming Dems over going around her to suit their own agenda. Her resignation appears to stem from clashes between her and Dems over bank merger rules.",
  //       "url": "https:www.dailymail.co.uk/news/article-10361787/Chair-FDIC-Trump-appointee-resigns-warning-hostile-takeover-Democrats.html",
  //       "urlToImage": "https:i.dailymail.co.uk/1s/2022/01/02/03/52455185-0-image-a-2_1641094783545.jpg",
  //       "publishedAt": "2022-01-02T03:48:00Z",
  //       "content": "The chairperson of the FDIC resigned Friday just weeks after she attempted to warn of a 'hostile takeover' of the commission by Democrats.  \r\nJelena McWilliams, 48, wrote an open letter Friday slammi… [+2679 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "BBC News"
  //       },
  //       "author": "https:www.facebook.com/bbcnews",
  //       "title": "Denmark to make domestic flights fossil fuel free by 2030 - BBC News",
  //       "description": "The PM wants domestic flights to go green, as part of ambitious national plans to cut emissions.",
  //       "url": "https:www.bbc.com/news/world-europe-59849898",
  //       "urlToImage": "https:ichef.bbci.co.uk/news/1024/branded_news/BA64/production/_122561774_gettyimages-1139408000.jpg",
  //       "publishedAt": "2022-01-02T03:03:04Z",
  //       "content": "Image caption, Denmark's Prime Minister says she wants to make flying green\r\nDenmark's government has announced a goal to make domestic flights fossil fuel free by 2030. \r\nIn her New Year's address, … [+1457 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": "fox-news",
  //       "name": "Fox News"
  //       },
  //       "author": "Peter Aitken",
  //       "title": "New York, Florida shatter single-day records for COVID-19 cases - Fox News",
  //       "description": "New York and Florida have both recorded their highest-ever single-day total of new COVID-19 cases in recent days as new cases surge all over the United States.",
  //       "url": "https:www.foxnews.com/health/new-york-florida-single-day-records-coronavirus-cases",
  //       "urlToImage": "https:static.foxnews.com/foxnews.com/content/uploads/2021/12/Florida-Test-Swab.jpg",
  //       "publishedAt": "2022-01-02T01:14:49Z",
  //       "content": "New York and Florida have both recorded their highest-ever single-day total of new COVID-19 cases in recent days as new cases surge all over the United States. \r\nNew York set a record of 85,476 cases… [+1895 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "WRAL.com"
  //       },
  //       "author": "Faye Prosser",
  //       "title": "List of grocery and retail stores closed or shutting down early on New Year's Day 2022 - WRAL News",
  //       "description": "Many grocery stores, drug stores, malls and major retail chains have special holiday hours for New Year's Eve and New Year's Day. Here is a list of hours for our local stores including some that are closed all day on January 1st.",
  //       "url": "https:www.wral.com/list-of-grocery-and-retail-stores-closed-or-shutting-down-early-on-new-year-s-day-2022/20048829/",
  //       "urlToImage": "https:wwwcache.wral.com/asset/5oys/smartshopper/2021/12/28/20053081/Open_for_Business_against_brick_wall-DMID1-5tdc0fy33-640x480.jpg",
  //       "publishedAt": "2022-01-02T00:41:43Z",
  //       "content": "Many grocery stores, drug stores, malls and major retail chains have special holiday hours for New Year's Eve and New Year's Day. Here is a list of hours for our local stores including some that are … [+4849 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Gizmodo.com"
  //       },
  //       "author": "Jody Serrano",
  //       "title": "Thousands Learn That Extra Money in Their Account Is No Christmas Gift, It’s a $176 Million Bank Error - Gizmodo",
  //       "description": "Due to a \"technical issue,\" Santander sent out millions from its own reserves to about 75,000 people in the UK on Christmas Day.",
  //       "url": "https:gizmodo.com/thousands-learn-that-extra-money-in-their-account-is-no-1848293955",
  //       "urlToImage": "https:i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/138f6b3d075bc11a96fe54fcc7e593a6.jpg",
  //       "publishedAt": "2022-01-02T00:36:00Z",
  //       "content": "Tens of thousands of people in the United Kingdom probably thought they had been especially good this past year when they saw their bank accounts on Christmas Day, all of which had more money than th… [+2831 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "CNET"
  //       },
  //       "author": "Steven Musil",
  //       "title": "Buttigieg, FAA ask AT&T, Verizon to delay their 5G launches - CNET",
  //       "description": "Request comes amid concern the new services' wireless signals could disrupt cockpit instruments.",
  //       "url": "https:www.cnet.com/tech/services-and-software/buttigieg-faa-ask-at-t-verizon-to-delay-their-5g-launches/",
  //       "urlToImage": "https:www.cnet.com/a/img/Oc5EXAuTf_ZHv7tyRMv_hIcHyFA=/1200x630/2022/01/01/8058ae3d-2230-4865-86d4-212f602af60d/gettyimages-1176353198.jpg",
  //       "publishedAt": "2022-01-01T23:55:00Z",
  //       "content": "Getty Images\r\nTransportation Secretary Pete Buttigieg and the Federal Aviation Administration have asked AT&amp;T and Verizon to delay the planned launch next week of their 5G wireless services, citi… [+2771 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "STLtoday.com"
  //       },
  //       "author": "CARLA K. JOHNSON AP Medical Writer",
  //       "title": "Do at-home tests detect omicron? And more of your COVID-19 questions answered - STLtoday.com",
  //       "description": "Find out how effective home tests detect coronavirus variants, and get answers to five more common and current questions about virus vaccines, travel and more.",
  //       "url": "https:www.stltoday.com/news/national/do-at-home-tests-detect-omicron-and-more-of-your-covid-19-questions-answered/article_28eb7e20-dc3f-523a-b7d1-490d82295bc1.html",
  //       "urlToImage": "https:bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/2/8e/28eb7e20-dc3f-523a-b7d1-490d82295bc1/61cf7fcc023d5.preview.jpg?crop=600%2C315%2C0%2C42&resize=600%2C315&order=crop%2Cresize",
  //       "publishedAt": "2022-01-01T23:15:00Z",
  //       "content": "As the holidays approach, is it safe to travel during the pandemic? (AP Illustration/Peter Hamlin)\r\nPeter Hamlin\r\nIt depends. It can be safe if you're fully vaccinated against COVID-19, but officials… [+1414 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "autoevolution"
  //       },
  //       "author": "Bogdan Popa",
  //       "title": "Here We Go Again: Chipmakers Reduce Production Due to New Lockdowns - autoevolution",
  //       "description": "The global chip shortage wouldn’t come to an end too soon, and unfortunately, this is no longer just a forecast but an actual fact.",
  //       "url": "https:www.autoevolution.com/news/here-we-go-again-chipmakers-reduce-production-due-to-new-lockdowns-178054.html",
  //       "urlToImage": "https:s1.cdn.autoevolution.com/images/news/here-we-go-again-chipmakers-reduce-production-due-to-new-lockdowns-178054_1.jpg",
  //       "publishedAt": "2022-01-01T23:05:00Z",
  //       "content": "Global chipmakers are once again struggling with government restrictions caused by the new wave of the health crisis, with Samsung and Micron two of the biggest names to announce reduced production.M… [+1634 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Bitcoinist"
  //       },
  //       "author": null,
  //       "title": "NFTs In A Nutshell: A Weekly Review | Bitcoinist.com - bitcoinist.com",
  //       "description": "There was a lot of chatter around NFTs from big-time investors this week. However, some think that regulation is on the horizon as we jump into 2022.",
  //       "url": "https:bitcoinist.com/nfts-in-a-nutshell-a-weekly-review-36/",
  //       "urlToImage": "https:bitcoinist.com/wp-content/uploads/2021/07/marble-3117478_1920.jpeg",
  //       "publishedAt": "2022-01-01T22:18:25Z",
  //       "content": "There was a lot of chatter around NFTs from big-time investors this week. However, some think that regulation is on the horizon as we jump into 2022. Meanwhile, a massive NFT art collector has over $… [+4591 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "WJXT News4JAX"
  //       },
  //       "author": "Brie Isom, Aaron Farrar",
  //       "title": "Gas tax hike takes effect Saturday in Duval County - WJXT News4JAX ",
  //       "description": "Starting Saturday in Duval County, you're going to be paying more at the pump because of a local gas tax that is now in effect.",
  //       "url": "https:www.news4jax.com/news/local/2022/01/01/gas-tax-hike-takes-effect-saturday-in-duval-county/",
  //       "urlToImage": "https:res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/01-01-2022/t_fb4b050d987b42be8d9bdbbc14256fcd_name_image.jpg?_a=ATABlcW0",
  //       "publishedAt": "2022-01-01T21:08:59Z",
  //       "content": "JACKSONVILLE, Fla. Starting Saturday in Duval County, youre going to be paying more at the pump because of a local gas tax that is now in effect.\r\nIts a 6-cent per gallon increase at the pumps. That … [+1881 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": "google-news",
  //       "name": "Google News"
  //       },
  //       "author": null,
  //       "title": "Texas Gov. Asks For Federal Help With COVID Testing, Treatments As Cases Climb - Yahoo! Voices",
  //       "description": null,
  //       "url": "https:news.google.com/__i/rss/rd/articles/CBMiRWh0dHBzOi8vd3d3LnlhaG9vLmNvbS9uZXdzL3RleGFzLWdvdi1hc2tzLWZlZGVyYWwtaGVscC0yMDU0MjU4OTkuaHRtbNIBTmh0dHBzOi8vbmV3cy55YWhvby5jb20vYW1waHRtbC9uZXdzL3RleGFzLWdvdi1hc2tzLWZlZGVyYWwtaGVscC0yMDU0MjU4OTkuaHRtbA?oc=5",
  //       "urlToImage": null,
  //       "publishedAt": "2022-01-01T20:54:25Z",
  //       "content": null
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Barron's"
  //       },
  //       "author": "Lawrence C. Strauss",
  //       "title": "Cruise Operators Are Sailing On Despite Omicron - Barron's",
  //       "description": "The stocks of cruise operators slid in the last few days of 2021 but held up relatively well in the second half of December.",
  //       "url": "https:www.barrons.com/articles/cruise-operators-are-sailing-despite-omicron-the-stocks-are-holding-up-51641067397",
  //       "urlToImage": "https:images.barrons.com/im-455334/social",
  //       "publishedAt": "2022-01-01T20:03:00Z",
  //       "content": "Despite a blunt recommendation from Centers for Disease Control and Prevention to avoid cruise travel, the industry is sailing on for now as it tries to recover from the pandemic.The same holds true … [+4029 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Cointelegraph"
  //       },
  //       "author": "Gareth Jenkinson",
  //       "title": "Touchdown! Goal! Knockout! Crypto and sports collide in 2021 - Cointelegraph",
  //       "description": "",
  //       "url": "https:cointelegraph.com/news/touchdown-goal-knockout-crypto-and-sports-collide-in-2021",
  //       "urlToImage": "https:images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTIvNzNjNjY1OTItNGE4OS00MTc1LTljZDYtNTc5YzQxNGU3ZTk5LmpwZw==.jpg",
  //       "publishedAt": "2022-01-01T19:50:16Z",
  //       "content": "Cryptocurrencies and sport have continued to collide in 2021 with synergies between the two proving to be fruitful on a number of fronts.\r\nThe relationship between the sports world and the various ap… [+10711 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "WSVN 7News | Miami News, Weather, Sports | Fort Lauderdale"
  //       },
  //       "author": "",
  //       "title": "Northwest Miami-Dade Walmart temporarily closed for cleaning - WSVN 7News | Miami News, Weather, Sports | Fort Lauderdale",
  //       "description": "NORTHWEST MIAMI-DADE, FLA. (WSVN) - A Walmart location in Northwest Miami-Dade has temporarily closed for cleaning.The Walmart store near the area of Northwest 32nd Avenue...",
  //       "url": "https:wsvn.com/news/local/miami-dade/northwest-miami-dade-walmart-temporarily-closed-for-cleaning/",
  //       "urlToImage": "https:wsvn.com/wp-content/uploads/sites/2/2022/01/220101_NWMD_Walmart.jpg?quality=60&strip=color&w=640",
  //       "publishedAt": "2022-01-01T19:49:19Z",
  //       "content": "NORTHWEST MIAMI-DADE, FLA. (WSVN) - A Walmart location in Northwest Miami-Dade has temporarily closed for cleaning.\r\nThe Walmart store near the area of Northwest 32nd Avenue and 79th Street, closed i… [+828 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "MarketWatch"
  //       },
  //       "author": "Mark DeCambre",
  //       "title": "The S&P 500 beat both Dow, and Nasdaq in 2021 by the widest margin in 24 years. Here's what history says happens in 2022. - MarketWatch",
  //       "description": "It is only the 6th time S&P 500 beat the Dow and the Nasdaq in a year: 1984, 1989, 1997, 2004 and 2005",
  //       "url": "https:www.marketwatch.com/story/the-s-p-500-beat-both-dow-and-nasdaq-in-2021-by-the-widest-margin-in-24-years-heres-what-history-says-happens-next-year-11641064618",
  //       "urlToImage": "https:images.mktw.net/im-460586/social",
  //       "publishedAt": "2022-01-01T19:16:00Z",
  //       "content": "While the music played, investors kept dancing, paraphrasing a line from former Citigroup \r\n C,\r\n -0.07%\r\nCEO Chuck Prince. Purchasers of U.S. stocks have danced to the tune of a record rise for the … [+3124 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "WIVB.com - News 4"
  //       },
  //       "author": "Adam Duke",
  //       "title": "Western New York schools to distribute free COVID test kits for students, several announce distribution plans - WIVB.com - News 4",
  //       "description": "(WIVB) — Erie 1 BOCES is scheduled to receive COVID-19 test kits Saturday evening. Several schools in the area have announced distribution plans for the kits. Maryvale announced its plan via Twitter Saturday morning. Since, others have followed suit, announci…",
  //       "url": "https:www.wivb.com/community/education/western-new-york-schools-to-distribute-free-covid-test-kits-lancaster-announces-distribution-plan/",
  //       "urlToImage": "https:www.wivb.com/wp-content/uploads/sites/97/2020/09/Lancaster-High-School.jpg?w=1280",
  //       "publishedAt": "2022-01-01T18:41:44Z",
  //       "content": "(WIVB) — Erie 1 BOCES is scheduled to receive COVID-19 test kits Saturday evening. Several schools in the area have announced distribution plans for the kits.\r\nMaryvale announced its plan via Twitter… [+2415 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Benzinga"
  //       },
  //       "author": null,
  //       "title": "Apple Vs. Facebook: How The Race For The Metaverse Space Is Shaping Up - Benzinga - Benzinga",
  //       "description": "The Metaverse, which is touted to be the next big emerging theme, is a network of 3D virtual worlds focused on social connection. It encompasses se...",
  //       "url": "https:www.benzinga.com/analyst-ratings/analyst-color/22/01/24853626/apple-vs-facebook-how-the-race-for-the-metaverse-space-is-shaping-up",
  //       "urlToImage": "https:cdn2.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/metaverse3.jpg?width=720",
  //       "publishedAt": "2022-01-01T18:38:00Z",
  //       "content": "The Metaverse, which is touted to be the next big emerging theme, is a network of 3D virtual worlds focused on social connection. It encompasses several technologies, including mixed reality, the Int… [+2103 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "ZyCrypto"
  //       },
  //       "author": null,
  //       "title": "Dogecoin As The Official Currency Of Mars? Elon Musk Wavers - ZyCrypto",
  //       "description": "Elon Musk has continued to express his fascination with meme coin sensation Dogecoin. In a recent interview with Lex Fridman",
  //       "url": "https:zycrypto.com/dogecoin-as-the-official-currency-of-mars-elon-musk-ponders/",
  //       "urlToImage": "https:zycrypto.com/wp-content/uploads/2021/02/More-Competition-For-Bitcoin-and-DOGE-As-Elon-Musk-Mulls-MarsCoin.jpg",
  //       "publishedAt": "2022-01-01T18:35:23Z",
  //       "content": "<ul><li>Musk reveals that DOGE, more than any other crypto, checks out as a currency. </li><li>He likes Dogecoin as the currency of Mars but says it is up to the people.</li><li>There is no sign of t… [+2834 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "1011now"
  //       },
  //       "author": "Associated Press",
  //       "title": "Buffett rejects Bernie Sanders' call to intervene in strike - 1011now",
  //       "description": "Several hundred striking workers at a manufacturing facility owned by Berkshire Hathaway have attracted some high-profile support from U.S. Sen. Bernie Sanders, but CEO Warren Buffett has declined to get involved in the contract dispute because of the hands-o…",
  //       "url": "https:www.1011now.com/2022/01/01/buffett-rejects-bernie-sanders-call-intervene-strike/",
  //       "urlToImage": "https:gray-koln-prod.cdn.arcpublishing.com/resizer/aN20pqfH0mANBYUbem6WgOkbK_A=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/O2DXWPURLJDWTOSGSAPCZIT7OM.jpg",
  //       "publishedAt": "2022-01-01T18:25:00Z",
  //       "content": "OMAHA, Neb. (AP) Several hundred striking workers at a manufacturing facility owned by Berkshire Hathaway have attracted some high-profile support from U.S. Sen. Bernie Sanders, but CEO Warren Buffet… [+619 chars]"
  //       }
  //       ]

  //   articles2 =  [
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "The Indian Express"
  //       },
  //       "author": "New York Times",
  //       "title": "Toyota surpasses GM in US car sales, a first for a foreign automaker",
  //       "description": " The milestone underlines the changes shaking automakers, which face strong competition and external forces as they move into electric vehicles.",
  //       "url": "https:indianexpress.com/article/world/toyota-surpasses-gm-in-us-car-sales-7707051/",
  //       "urlToImage": "https:images.indianexpress.com/2022/01/toyota-car-1200.jpg",
  //       "publishedAt": "2022-01-05T05:53:16Z",
  //       "content": "Written by Neal E. BoudetteToyota Motor unseated General Motors as the top-selling automaker in the United States last year, becoming the first manufacturer based outside the country to achieve that … [+7194 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Business Standard"
  //       },
  //       "author": "Reuters",
  //       "title": "Sony plans to enter electric vehicle market with new company this year",
  //       "description": "Japan's Sony Group Corp plans to launch a company this spring to examine entering the electric vehicle market",
  //       "url": "https:www.business-standard.com/article/companies/sony-plans-to-enter-electric-vehicle-market-with-new-company-this-year-122010500422_1.html",
  //       "urlToImage": "https:bsmedia.business-standard.com/_media/bs/img/article/2021-12/30/full/1640804542-5545.jpg",
  //       "publishedAt": "2022-01-05T05:49:00Z",
  //       "content": "Japan's Sony Group Corp plans to launch a company this spring to examine entering the electric vehicle market, looking to harness its strengths in entertainment and sensors to play a bigger role in n… [+3249 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "CNA"
  //       },
  //       "author": null,
  //       "title": "Startup ONE says battery prototype delivered 750-mile range",
  //       "description": "DETROIT :     Our Next Energy (ONE), a two-year-old Michigan startup, said on Wednesday it had tested a prototype of its new battery in a Tesla Model S, driving 752 miles (1,210 kilometers) before recharging.ONE aims to begin producing battery packs that will…",
  //       "url": "https:www.channelnewsasia.com/business/startup-one-says-battery-prototype-delivered-750-mile-range-2416196",
  //       "urlToImage": "https:onecms-res.cloudinary.com/image/upload/s--btf8nJhU--/fl_relative%2Cg_south_east%2Cl_one-cms:core:watermark:reuters%2Cw_0.1/f_auto%2Cq_auto/c_fill%2Cg_auto%2Ch_676%2Cw_1200/v1/one-cms/core/2022-01-05t051455z_1_lynxmpei0404m_rtroptp_3_electric-vehicles-batteries-one.jpg?itok=k3o5plSD",
  //       "publishedAt": "2022-01-05T05:19:28Z",
  //       "content": "DETROIT : Our Next Energy (ONE), a two-year-old Michigan startup, said on Wednesday it had tested a prototype of its new battery in a Tesla Model S, driving 752 miles (1,210 kilometers) before rechar… [+1606 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Yahoo Entertainment"
  //       },
  //       "author": "Paul Lienert",
  //       "title": "Startup ONE says battery prototype delivered 750-mile range",
  //       "description": "Our Next Energy (ONE), a two-year-old Michigan startup, said on Wednesday it had tested a prototype of its new battery in a Tesla Model S, driving 752 miles ...",
  //       "url": "https:finance.yahoo.com/news/startup-one-says-battery-prototype-051455425.html",
  //       "urlToImage": "https:s.yimg.com/uu/api/res/1.2/z6MZXF_pOP73qtNBCzPghA--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https:media.zenfs.com/en/reuters-finance.com/9c423656ae9f8ad6ce5b42f611417aba",
  //       "publishedAt": "2022-01-05T05:14:55Z",
  //       "content": "By Paul Lienert\r\nDETROIT (Reuters) - Our Next Energy (ONE), a two-year-old Michigan startup, said on Wednesday it had tested a prototype of its new battery in a Tesla Model S, driving 752 miles (1,21… [+1632 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //       },
  //       "author": null,
  //       "title": "Startup ONE says battery prototype delivered 750-mile range - Reuters",
  //       "description": "Our Next Energy (ONE), a two-year-old Michigan startup, said on Wednesday it had tested a prototype of its new battery in a Tesla Model S, driving 752 miles (1,210 kilometers) before recharging.",
  //       "url": "https:www.reuters.com/technology/startup-one-says-battery-prototype-delivered-750-mile-range-2022-01-05/",
  //       "urlToImage": "https:www.reuters.com/resizer/IURgb7y7uThKC_RTSTxu2FpM8ww=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JFSVVADVAJICJPHW75MH5SN5PE.jpg",
  //       "publishedAt": "2022-01-05T05:14:00Z",
  //       "content": "DETROIT, Jan 5 (Reuters) - Our Next Energy (ONE), a two-year-old Michigan startup, said on Wednesday it had tested a prototype of its new battery in a Tesla Model S, driving 752 miles (1,210 kilomete… [+1813 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Seeking Alpha"
  //       },
  //       "author": "Rohit Acharya",
  //       "title": "Pioneer Power's Price Hike Is Hype",
  //       "description": "Pioneer Power's price hike is market's knee-jerk reaction to announcement of new EV charging business. Today, my investment conclusion is not to invest in PPSI. Read more.",
  //       "url": "https:seekingalpha.com/article/4477945-pioneer-power-ppsi-price-hike-is-hype",
  //       "urlToImage": "https:static.seekingalpha.com/cdn/s3/uploads/getty_images/1306920005/large_image_1306920005.jpg",
  //       "publishedAt": "2022-01-05T05:11:09Z",
  //       "content": "PhonlamaiPhoto/iStock via Getty Images\r\nPioneer Power Solutions (PPSI) recently (Nov 2021) launched a new segment in their business which seems as the primary reason for the enormous 215% jump in the… [+7304 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //       },
  //       "author": "Peter Valdes-Dapena, CNN Business",
  //       "title": "Chrysler shows off an EV concept and a future for the brand",
  //       "description": "Chrysler was once one of the biggest names in the American auto industry, famous for flashy cars with chrome, fins and style that belied their relatively affordable prices. Cars like the Chrysler New Yorker, the Imperial and the classic Chrysler 300 helped it…",
  //       "url": "https:www.cnn.com/2022/01/05/business/chrysler-airflow-concept/index.html",
  //       "urlToImage": "https:cdn.cnn.com/cnnnext/dam/assets/220103133833-02-chrysler-airflow-ev-concept-super-tease.jpg",
  //       "publishedAt": "2022-01-05T05:02:53Z",
  //       "content": "(CNN)Chrysler was once one of the biggest names in the American auto industry, famous for flashy cars with chrome, fins and style that belied their relatively affordable prices. Cars like the Chrysle… [+3547 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "CNET"
  //       },
  //       "author": "Craig Cole",
  //       "title": "What is the Chrysler Airflow concept? Even the automaker won't say - Roadshow",
  //       "description": "Is this four-seat EV a crossover or a hatchback? Could it be an SUV? What about a station wagon? Your guess is as good as ours.",
  //       "url": "https:www.cnet.com/roadshow/news/what-is-the-chrysler-airflow-concept-ces-2022/",
  //       "urlToImage": "https:www.cnet.com/a/img/rjM-jwcjhHbdx0gHDPcU4VoE9Gw=/1200x630/2022/01/04/35fc171c-fbdb-4569-be9f-ce88663caf2c/chrysler-airflow-concept-ogi-03.jpg",
  //       "publishedAt": "2022-01-05T05:01:02Z",
  //       "content": "Is this all-electric people-hauler sleek enough for you?\r\nChrysler\r\nThis story is part of CES, where CNET covers the latest news on the most incredible tech coming soon.\r\nThe all-electric Chrysler Ai… [+2120 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Yahoo Entertainment"
  //       },
  //       "author": "PR Newswire",
  //       "title": "Our Next Energy (ONE) Battery Powers Electric Vehicle 752 Miles Without Charging",
  //       "description": "Our Next Energy, Inc. (ONE), a Michigan battery technology company, has demonstrated a proof-of-concept battery that powered an electric vehicle 752 miles...",
  //       "url": "https:finance.yahoo.com/news/next-energy-one-battery-powers-050100863.html",
  //       "urlToImage": "https:s.yimg.com/uu/api/res/1.2/nuAkL0G2XvjQ_UIJO1cmqA--~B/aD0yMjk7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https:media.zenfs.com/en/prnewswire.com/6302c7353e3561ea0bb5365384d80110",
  //       "publishedAt": "2022-01-05T05:01:00Z",
  //       "content": "- ONE has demonstrated a prototype battery in an electric vehicle that achieved 752 miles without recharging, signaling a paradigm shift that an electric vehicle can now store enough energy to satisf… [+3354 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": "the-verge",
  //       "name": "The Verge"
  //       },
  //       "author": "Andrew J. Hawkins",
  //       "title": "Chrysler previews its all-electric future with Airflow concept SUV",
  //       "description": "Chrysler is moving to electric-only sales by 2028. The company revealed its Airflow SUV concept at CES as a demonstration of its first EV due in 2025.",
  //       "url": "https:www.theverge.com/2022/1/5/22862387/chrysler-electric-only-2028-airflow-concept-ces-2022",
  //       "urlToImage": "https:cdn.vox-cdn.com/thumbor/atqTlakOyGY5206_VIwJYuzXh6Q=/0x59:3000x1630/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23138022/CN021_010CH.jpg",
  //       "publishedAt": "2022-01-05T05:01:00Z",
  //       "content": "Chrysler, the iconic American brand owned by Stellantis, will only sell electric vehicles by 2028, the company announced at the 2022 Consumer Electronics Show. \r\nTo emphasize this seismic shift, the … [+5222 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Slashdot.org"
  //       },
  //       "author": "feedfeeder",
  //       "title": "Tesla Draws Criticism After Opening Dealership in Xinjiang - The New York Times",
  //       "description": "Tesla Draws Criticism After Opening Dealership in XinjiangThe New York Times Companies back away from criticizing China's human rights violations in Xinjiang | DW NewsDW News Days after Tesla opened a Xinjiang store, White House press secretary Jen Psaki says…",
  //       "url": "https:slashdot.org/firehose.pl?op=view&amp;id=157126637",
  //       "urlToImage": null,
  //       "publishedAt": "2022-01-05T04:33:25Z",
  //       "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Gizmodo Australia"
  //       },
  //       "author": "José Rodríguez Jr.",
  //       "title": "Electric Snowmobiles Were Impossible Until a Startup Got Funding To Make Them",
  //       "description": "A new powersports company may have spurred on a flurry to produce electric snowmobiles, which had previously been written off...\nThe post Electric Snowmobiles Were Impossible Until a Startup Got Funding To Make Them appeared first on Gizmodo Australia.\n  Rela…",
  //       "url": "https:www.gizmodo.com.au/2022/01/electric-snowmobiles-were-impossible-until-a-startup-got-funding-to-make-them/",
  //       "urlToImage": "https:imgix.gizmodo.com.au/content/uploads/sites/2/2021/12/31/b7a4388ff8fc8aa9fe386e66885f3ed0.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
  //       "publishedAt": "2022-01-05T04:10:46Z",
  //       "content": "A new powersports company may have spurred on a flurry to produce electric snowmobiles, which had previously been written off by major manufacturers as impossible. The nascent company, Taiga Motors, … [+3081 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //       },
  //       "author": "Anuj Tiwari",
  //       "title": "Meet Ashok Elluswamy: First Indian-Origin Employee Hired For Tesla's Autopilot Team",
  //       "description": "Indian-origin techies are ruling the world, especially those serving in the biggest tech giants like Google and Microsoft, who are shaping the world. Recently Parag Agrawal and Jagdeep Singh CEO of a US battery startup, QuantumScape created quite a buzz becau…",
  //       "url": "https:www.indiatimes.com/technology/news/ashok-elluswamy-tesla-autopilot-team-558381.html",
  //       "urlToImage": "https:im.indiatimes.in/content/2022/Jan/ashok-elluswamy-elon-musk_61d3ee09828ec.jpg",
  //       "publishedAt": "2022-01-05T04:09:32Z",
  //       "content": "Indian-origin techies are ruling the world, especially those serving in the biggest tech giants like Google and Microsoft, who are shaping the world. Recently Parag Agrawal and Jagdeep Singh CEO of a… [+4182 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Business Standard"
  //       },
  //       "author": "ANI",
  //       "title": "Private sector should oppose Chinese genocide: US on Tesla Xinjiang store",
  //       "description": "The White House has urged private companies to oppose the human rights abuses and genocide by China in Xinjiang.This comes after Tesla, a US-based vehicle manufacturer, opened a showroom in the region in China, Kyodo News reported.At a news conference, White …",
  //       "url": "https:www.business-standard.com/article/international/private-sector-should-oppose-chinese-genocide-us-on-tesla-xinjiang-store-122010500204_1.html",
  //       "urlToImage": "https:bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614995125-3036.jpg",
  //       "publishedAt": "2022-01-05T03:54:00Z",
  //       "content": "The White House has urged private companies to oppose the human rights abuses and genocide by China in Xinjiang.\r\nThis comes after Tesla, a US-based vehicle manufacturer, opened a showroom in the reg… [+3206 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Livemint"
  //       },
  //       "author": "AP",
  //       "title": "US activists urge Elon Musk and Tesla to close new Xinjiang showroom",
  //       "description": "Tesla on Friday announced the opening of its showroom in Urumqi, the Xinjiang capital",
  //       "url": "https:www.livemint.com/companies/news/us-activists-urge-elon-musk-and-tesla-to-close-new-xinjiang-showroom-11641353200725.html",
  //       "urlToImage": "https:images.livemint.com/img/2022/01/05/600x338/China-Tesla-3_1641353321931_1641353369717.jpg",
  //       "publishedAt": "2022-01-05T03:31:00Z",
  //       "content": "American activists are appealing to Tesla Inc. to close a new showroom in Chinas northwestern region of Xinjiang, where officials are accused of abuses against mostly Muslim ethnic minorities.\r\nTesla… [+3846 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //       },
  //       "author": "Arthur Frederick (Fritz) Hasler",
  //       "title": "30 Days & 2000 Miles With Tesla’s Full Self Driving v10.5 — Is It Safe?",
  //       "description": "Background: I am still crazy about my Long Range dual-motor (four-wheel-drive) Tesla Model 3 after a little over two years and 57,075 miles. I paid $6000 extra for “Full Self Driving,” which now costs $10,000. I love the super smooth, rocket like acceleration…",
  //       "url": "https:cleantechnica.com/2022/01/04/30-days-2000-miles-with-teslas-full-self-driving-v10-5-is-it-safe/",
  //       "urlToImage": "https:cleantechnica.com/files/2022/01/Tesla-FSD-Beta-pedestrian-in-shopping-center-Florida-CleanTechnica-watermark-logo-cropped.png",
  //       "publishedAt": "2022-01-05T03:30:33Z",
  //       "content": "Background: I am still crazy about my Long Range dual-motor (four-wheel-drive) Tesla Model 3 after a little over two years and 57,075 miles. I paid $6000 extra for Full Self Driving, which now costs … [+13163 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Business Standard"
  //       },
  //       "author": "Reuters",
  //       "title": "How Tesla weathered global supply chain issues that knocked rivals",
  //       "description": "San Francisco (Reuters) -Tesla Inc's ability to design components in-house gave the automaker agility in making tweaks to parts and coping with supply chain issues that hit other automakers much harder, sources and experts said.",
  //       "url": "https:www.business-standard.com/article/international/how-tesla-weathered-global-supply-chain-issues-that-knocked-rivals-122010401157_1.html",
  //       "urlToImage": "https:bsmedia.business-standard.com/_media/bs/img/article/2022-01/03/full/1641220906-4504.jpg",
  //       "publishedAt": "2022-01-05T03:29:00Z",
  //       "content": "By Hyunjoo Jin\r\nSan Francisco (Reuters) -Tesla Inc's ability to design components in-house gave the automaker agility in making tweaks to parts and coping with supply chain issues that hit other auto… [+3702 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "Business Today"
  //       },
  //       "author": "Reuters",
  //       "title": "Apple shares down 1.3%, leave m-cap at $2.95 trillion",
  //       "description": "Apple's stock market value rose briefly above $3 trillion for the first time ever, and it repeated that again on Tuesday before losing ground.",
  //       "url": "https:www.businesstoday.in/latest/story/apple-shares-down-13-m-cap-at-295-trillion-317878-2022-01-05",
  //       "urlToImage": "https:akm-img-a-in.tosshub.com/businesstoday/images/story/202201/apple-sixteen_nine.jpeg",
  //       "publishedAt": "2022-01-05T03:08:24Z",
  //       "content": "Apple Inc's stock market value peaked on Tuesday for a second day above a $3 trillion, but the iPhone maker's shares again failed hold that gain by the session's end.\r\nApple shares ended down 1.3% at… [+1980 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //       },
  //       "author": "Carolyn Fortuna",
  //       "title": "What Was It Like To Be One Of The 308,000 Tesla Deliveries In Q4 2021?",
  //       "description": "Taking delivery of a Tesla Model Y during the recent quarter was a really cool experience -- one to be recommended!",
  //       "url": "https:cleantechnica.com/2022/01/04/what-was-it-like-to-be-one-of-the-308000-tesla-deliveries-in-q4-2021/",
  //       "urlToImage": "https:cleantechnica.com/files/2022/01/Teslas-Q4-deliveries-Fortuna-1200.jpg",
  //       "publishedAt": "2022-01-05T03:01:05Z",
  //       "content": "Tesla announced this week that it had not only hit but exceeded its 2021 fourth quarter delivery goals. The all-electric carmaker delivered 308,600 vehicles, far higher than analysts’ forecasts of 26… [+7739 chars]"
  //       },
  //       {
  //       "source": {
  //       "id": null,
  //       "name": "The Star Online"
  //       },
  //       "author": "Riley Beggin",
  //       "title": "Police need a warrant to search your cellphone. Your car’s data systems? Not so much",
  //       "description": "Police can pull sensitive personal data from many modern vehicles without a warrant due to gaps in US federal law, according to new research. Read full story",
  //       "url": "https:www.thestar.com.my/tech/tech-news/2022/01/05/police-need-a-warrant-to-search-your-cellphone-your-cars-data-systems-not-so-much",
  //       "urlToImage": "https:apicms.thestar.com.my/uploads/images/2022/01/05/1431701.jpg",
  //       "publishedAt": "2022-01-05T03:00:00Z",
  //       "content": "WASHINGTON: Police can pull sensitive personal data from many modern vehicles without a warrant due to gaps in US federal law, according to new research.\r\nCars are becoming more connected to drivers … [+7229 chars]"}
  //   ]

  constructor()
  {
    console.log("i am constructor");
    super();
    this.state = {
      article: [],
      count: 1,
      loading : false
     
    };
  }

  update = async ()=>
  {
    console.log("i am update");

    let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-12-06&sortBy=publishedAt&apiKey=65e40ee1a16e4ebab6aa8b8c80d1a441&page=${this.state.count++}&pageSize=20`;

    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata.articles);
   
    this.setState({
      article: this.state.article.concat(parseddata.articles),
      //loading : true,
      totalres : parseddata.totalResults
      
    });

    console.log("this is arrticle length = " + this.state.article.length);
    
  }

  async componentDidMount()
  {
    this.update();
  }

  // nextfun = async ()=>
  // {
    
  //       console.log("i am next");
  //       let url = `https://newsapi.org/v2/everything?q=apple&from=2022-01-04&to=2022-01-04&sortBy=popularity&apiKey=2d9348c20daf4567978f3198738ee03a&page=${this.state.count++}&pageSize=9`;
  //       this.setState({
  //           loading : false
  //       })
  //         let data = await fetch(url);
  //         let parseddata = await data.json();
  
  //         console.log(parseddata.articles);
  //         console.log(parseddata);

  //         this.setState({
  //         article: parseddata.articles,
  //         count : this.state.count++,
  //         loading : true
  //         });
      
      

  // }

  // prevfun = async ()=>
  // {
  //   console.log("i am prev");
  //   let url = `https://newsapi.org/v2/everything?q=apple&from=2022-01-04&to=2022-01-04&sortBy=popularity&apiKey=2d9348c20daf4567978f3198738ee03a&page=${this.state.count--}&pageSize=9`;
  //   this.setState({
  //       loading : false
  //   })
  //   let data = await fetch(url);
  //     let parseddata = await data.json();

  //     console.log(parseddata.articles);
  //     console.log(parseddata);
  //     this.setState({
  //     article: parseddata.articles,
  //     count : this.state.count--,
  //     loading : true
  //     });
  // }

  fetchMoreData = async () => {
    console.log("i am fecth more");

    console.log("this is count = " + this.state.count);
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-12-06&sortBy=publishedAt&apiKey=65e40ee1a16e4ebab6aa8b8c80d1a441&page=${this.state.count++}&pageSize=20`;

    let data = await fetch(url);
    let parseddata = await data.json();
    
    

    this.setState({
      article: this.state.article.concat(parseddata.articles),
      //loading : true,
      totalres : parseddata.totalResults
      
    });
    console.log(this.state.article)
    console.log("this is article length = " + this.state.article.length);

  };

  render()
  {
    console.log("i am a render");
    return (
      <div className="container">
        
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length <= 80} // replace 100 with Math.floor(this.state.totalres) some error is occuring thats why we have put 100 to fix it.
          loader={<div className="text-center">
                    <div className="spinner-grow text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>}
          
        >
          {this.state.article.map((element) => {
          return (
            <div className="text-center justify-content-center" key={element.url}>
              <Newsview
                title={element.title}
                des={element.description}
                url={element.urlToImage}
                urlgo={element.url}
              />
            </div>
          );
        })}
        </InfiniteScroll>

        {/* {!this.state.loading && <div className="text-center">
                                  <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                  </div>
                                </div>
        }  */}

        {/* {{this.state.loading && this.state.article.map((element) => {
          return (
            <div className="text-center justify-content-center" key={element.url}>
              <Newsview
                title={element.title}
                des={element.description}
                url={element.urlToImage}
                urlgo={element.url}
              />
            </div>
          );
        })}} */}

        
        {/* <div className="container  d-flex justify-content-between my-5">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.prevfun}
            disabled={this.state.count <= 1}> &larr;Prev </button>
          <button type="button" onClick={this.nextfun} disabled={this.state.count === 11} className="btn btn-dark"> Next &rarr;
          </button>
        </div>*/}
      </div>
    );
  }
}
