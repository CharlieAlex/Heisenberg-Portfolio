export const translations = {
    en: {
        navigation: {
            expertise: "Expertise",
            history: "Career",
            projects: "Projects",
            analysis: "Analysis",
            research: "Research",
            teaching: "Teaching",
            back: "← Back to Portfolio",
            back_to_top: "Back to Top"
        },
        footer: {
            contact_me: "Contact me: "
        },
        main: {
            name: "Heisenberg Lo",
            title: "Data Scientist",
            description: "A Data Scientist specialized in causal machine learning, statistical analysis, and data engineering. Transforming raw data into actionable insights.",
            resume: "Resume"
        },
        expertise: {
            title: "Expertise",
            tech_stack: "Tech stack:",
            datascience: {
                title: "Data Science & Machine Learning",
                desc: "Proficient in building predictive models and conducting statistical analysis. I transform raw data into actionable insights using various machine learning algorithms and data visualization techniques."
            },
            dataengineering: {
                title: "Data Engineering & Cloud",
                desc: "Experienced in building data pipelines, ETL processes, and deploying machine learning models on cloud platforms. I ensure data quality and accessibility for downstream analytics."
            },
            economics: {
                title: "Economics & Causal Inference",
                desc: "Strong foundation in econometrics and causal inference methods. I design and analyze experiments to measure true impact and guide data-driven decision making."
            }
        },
        career: {
            title: "Career History",
            yulon: {
                title: "Data Analyst",
                subtitle: "Yulon Group, Taiwan",
                date: "2023.8 - present",
                summary: "Causal Machine Learning, Machine Learning, Tableau Dashboard, A/B Testing, Data Pipeline, Statistical Analysis",
                details: [
                    "Specialized in Causal Machine Learning and Statistical Analysis.",
                    "Developed and maintained Tableau Dashboards for business intelligence.",
                    "Designed and executed A/B Testing experiments.",
                    "Built resilient Data Pipelines for data processing.",
                    "Applied Machine Learning models to solve business problems."
                ]
            },
            ntu_master: {
                title: "Master's Degree",
                subtitle: "National Taiwan University, Economics",
                summary: "Machine Learning, Econometrics, Data Science",
                details: [
                   "Overall GPA: 4.09/4.30",
                   "Course Highlights: Machine Learning and Econometrics, Data Science and Social Inquiry, Applied Econometric Method, Industrial Organization and Firm Strategy"
                ]
            },
            shopee_xpress: {
                title: "Data Engineer Intern",
                subtitle: "Shopee Xpress, Taiwan",
                summary: "SQL Data Reporting, Apps Script Automation, Dashboard Maintenance",
                details: [
                  "Assisted other teams in utilizing SQL to query databases and developed 10+ fully automated dynamic data reports based on actual business needs.",
                  "Optimized the data storage system for the inventory management department, replacing spreadsheet functions with Apps Script to increase page load speed by 100%+.",
                  "Maintained dashboards for buyers and sellers, adding 3 key metrics and identifying 10+ existing errors.",
                  "Constructed the data flow for the eco-package project, tracking the usage and lifecycle of each packaging unit to provide decision support for procurement and distribution."
                ]
            },
            shopee_cb: {
                title: "Logistics Analysis Intern",
                subtitle: "Shopee Cross Border, Taiwan",
                summary: "P&L Estimation, VBA Automation, Campaign Analytics",
                details: [
                  "Estimated and validated the P&L of 5+ cross-border free shipping campaigns with a scale of NT$ 1 M+, assisting in the formulation of activities to maximize profits.",
                  "Tracked the performance of 3 cross-border seller programs, ensuring data integrity, and automated processes with VBA to reduce operational time by 50%+.",
                  "Analyzed the impacts of relevant events such as the impact of customs real-name authentication, and the crowding-out effect of new logistics channels."
                ]
            },
            ntu_bachelor: {
                 title: "Double Bachelor's Degree",
                 subtitle: "National Taiwan University, Economics & Philosophy",
                 summary: "Economics & Philosophy, Presidential Awards",
                 details: [
                    "Overall GPA: 4.00/4.30",
                    "Awards: President Awards in 106, President Awards in 109"
                 ]
            },
            fcc: {
                title: "Assistant Analyst Intern",
                subtitle: "FCC Partners Asia, Taiwan",
                summary: "Investment Teaser, Business Plan, Market Research",
                details: [
                  "Assisted in drafting 3 investment teaser and 1 business plan covering development plans, fundraising strategies, market prospects, and investment highlights.",
                  "Prepared 20+ data collection reports for potential clients, focusing on business models, competitive advantages, financial performance, and fundraising records."
                ]
            }
        },
        projects: {
            title: "Side Projects",
            parkfinder: {
                title: "ParkFinder",
                short: "Real-time query and statistical analysis of available parking spaces in Taipei City.",
                full: "ParkFinder is a comprehensive real-time parking availability platform for Taipei City. The system combines a robust data pipeline that retrieves live parking data from government APIs, statistical analysis based on historical patterns, and interactive visualization using Streamlit.\n\nKey Features:\n• Real-time parking space availability queries across all Taipei districts\n• Historical data analysis to predict parking availability by time of day\n• Interactive maps and filters for multi-dimensional exploration\n• Daily automated data collection and aggregation\n\nThe platform helps drivers save time by identifying parking lots with higher availability based on historical trends, reducing urban congestion and improving city mobility.",
                link: "https://parkfinder.streamlit.app/"
            },
            betting: {
                title: "Sports Betting Freerider",
                short: "Data-backed prediction tracking system capturing insights from top-ranking bettors.",
                full: "Sports Betting Freerider is an automated web scraping system designed to track and analyze prediction results from top-ranking sports betting players.\n\nKey Features:\n• Automated web scraping of prediction data from multiple platforms\n• Statistical analysis of prediction accuracy by sport, league, and betting type\n• Google Sheets integration for seamless data tracking and sharing\n• Performance metrics dashboard to identify consistently accurate predictors\n\nBy leveraging collective intelligence from proven successful bettors, this system provides data-driven insights to inform betting strategies. The analysis reveals patterns in prediction accuracy across different sports and time periods.",
                link: "https://docs.google.com/spreadsheets/d/1IcTCgwnIk_EKnqRdBYK7-MGfxiTrxbTnm3-89Fc76X4/edit?usp=sharing"
            }
        },
        analysis: {
            title: "Business Analysis",
            people_flow: {
                title: "Tableau Shared Station Flow Map",
                short: "Optimizing station placement and elimination using shared station flow visualization.",
                full: "We utilized Tableau to create a comprehensive visualization of shared station usage flows. This map empowers the business unit to intuitively understand the \"people flow\" across different locations. By analyzing this data, the team can make data-driven decisions on where to strategically open new stations to capture high demand and identify underperforming stations with low foot traffic for potential elimination, thereby optimizing the overall network efficiency."
            },
            trip_rate: {
                title: "Driver Trip Rate Estimation",
                short: "Estimating driver acceptance rates using total fare and performance metrics with LOWESS fitting.",
                full: "This project focuses on estimating the probability of a driver accepting a trip request (Trip Rate). We analyze historical data correlating the total fare amount and individual driver performance metrics. By applying LOWESS (Locally Weighted Scatterplot Smoothing) to fit the data points, we generated a trip rate curve. This model allows us to simulate different pricing scenarios and determine the optimal subsidy amount required to achieve a target acceptance rate at the lowest possible cost."
            },
            mgm: {
                title: "MGM Social Network Analysis",
                short: "Analyzing \"Member Get Member\" campaign performance using social network analysis.",
                full: "Leveraging the NetworkX library, we conducted a social network analysis on the \"Member Get Member\" (MGM) campaign. By mapping out the connections formed through referrals, we classified users into different community clusters. We then calculated various network centrality metrics to identify key influencers within the network. This analysis enables targeted marketing strategies, focusing resources on users with high centrality to maximize the viral effect and overall campaign performance."
            }
        },
        research: {
            title: "Research",
            thesis: {
                title: "Parental Death & Marital Decisions",
                short: "Pioneering Event Study research on how parental loss affects offspring's marriage decisions.",
                full: "The Effects of Parental Death on Offspring's Marital Decisions: Evidence from Taiwan\n\nThis Master's thesis examines the causal relationship between parental death and offspring's marital decisions using Taiwan's comprehensive administrative data.\n\nMethodology:\n• Event Study design to capture dynamic effects before and after parental death\n• Large-scale administrative data ensuring statistical power and external validity\n• Control for time-invariant individual heterogeneity\n\nKey Findings:\n• Significant changes in marriage timing following parental loss\n• Heterogeneous effects by gender and birth order\n• Evidence of both \"guardian effect\" and \"inheritance effect\"\n\nThis pioneering research contributes to understanding family dynamics, bereavement effects, and demographic transitions in East Asian societies.",
                link: "/paper/thesis.pdf"
            },
            pension: {
                title: "National Pension Reform",
                short: "Difference-in-Differences analysis of pension reform's impact on household economic behavior.",
                full: "How Does National Pension Reform Affect Household Economic Behaviors? Evidence from Taiwan\n\nThis study analyzes the causal effects of Taiwan's National Pension Reform on household economic decisions using quasi-experimental methods.\n\nMethodology:\n• Difference-in-Differences (DiD) approach exploiting policy timing variation\n• Comparison between affected and unaffected cohorts\n• Robustness checks including placebo tests and parallel trend verification\n\nKey Findings:\n• Significant changes in household savings rates post-reform\n• Adjusted labor supply decisions, particularly among older workers\n• Consumption smoothing behavior in response to expected pension changes\n\nThe findings provide crucial insights for pension policy design and understanding how households respond to social security changes.",
                link: "/paper/labor_final.pdf"
            },
            labor: {
                title: "Division of Unpaid Labor",
                short: "Ordered Probit analysis of domestic labor division determinants in Taiwanese families.",
                full: "What is the Cause and Effect of the Domestic Division of Unpaid Labor? Evidence from Taiwanese Families\n\nThis research investigates the determinants and consequences of unpaid domestic labor division within Taiwanese households.\n\nMethodology:\n• Ordered Probit model to analyze ordinal outcome of labor division\n• Taiwan Social Change Survey data providing rich household information\n• Control for selection bias and endogeneity concerns\n\nKey Findings:\n• Gender remains a primary determinant of household labor allocation\n• Education and relative income significantly affect bargaining power\n• Unequal division correlates with reduced female labor force participation\n• Cultural factors interact with economic incentives\n\nThis study contributes to labor economics and gender studies by quantifying the trade-offs in household production decisions.",
                link: "/paper/applied_econ_final.pdf"
            }
        },
        teaching: {
            title: "Teaching",
            git: {
                title: "Git Advanced Course",
                desc: "An advanced guide to Git version control, covering branching strategies, conflict resolution, and best practices."
            },
            ml_tuning: {
                title: "Machine Learning Hyperparameter Tuning Guide",
                desc: "A comprehensive guide to hyperparameter tuning for non-deep learning models, focusing on practical techniques and strategies."
            }
        }
    },
    zh: {
        navigation: {
            expertise: "專業技能",
            history: "職涯歷程",
            projects: "個人專案",
            analysis: "商業分析",
            research: "學術研究",
            teaching: "教學文件",
            back: "← 返回主頁",
            back_to_top: "回到頂部"
        },
        footer: {
            contact_me: "聯絡我："
        },
        main: {
            name: "羅偉駿",
            title: "資料科學家",
            description: "專注於因果機器學習、統計分析與資料工程的資料科學家。致力於將原始數據轉化為具體的商業洞察，協助企業做出最佳決策。",
            resume: "個人履歷"
        },
        expertise: {
            title: "專業技能",
            tech_stack: "技術堆疊：",
            datascience: {
                title: "資料科學與機器學習",
                desc: "精通建模預測與統計分析。我使用多種機器學習演算法與資料視覺化技術，將複雜的數據轉化為可執行的洞察報告。"
            },
            dataengineering: {
                title: "資料工程與雲端架構",
                desc: "具備建置資料管線 (Pipeline)、ETL 流程與雲端平台模型部署的經驗。確保數據品質並提升後續分析的存取效率。"
            },
            economics: {
                title: "經濟學與因果推論",
                desc: "擁有深厚的計量經濟學與因果推論基礎。我專設計並分析實驗 (A/B Testing)，以衡量決策的真實影響力，實現數據驅動決策。"
            }
        },
        career: {
            title: "職涯歷程",
            yulon: {
                title: "數據分析師",
                subtitle: "裕隆集團, 台灣",
                date: "2023.8 - 至今",
                summary: "因果機器學習, 機器學習, Tableau儀表板, A/B Testing, 資料管線, 統計分析",
                details: [
                    "專精於因果機器學習與統計分析。",
                    "開發並維護 Tableau 商業智慧儀表板。",
                    "設計並執行 A/B Testing 實驗。",
                    "建置穩健的資料處理管線。",
                    "應用機器學習模型解決商業問題。"
                ]
            },
            ntu_master: {
                title: "經濟學研究所 碩士學位",
                subtitle: "國立台灣大學",
                summary: "機器學習, 計量經濟學, 資料科學",
                details: [
                   "學業成績: 4.09/4.30",
                   "修課紀錄: 機器學習與因果推論、資料科學與社會研究、應用計量方法、產業組織與廠商策略"
                ]
            },
            shopee_xpress: {
                title: "資料工程實習生",
                subtitle: "蝦皮娛樂電商-店到店部門, 台灣",
                summary: "SQL 數據報表, Apps Script 自動化, 儀表板維護",
                details: [
                  "協助各團隊使用 SQL 查詢資料庫，根據實際商業需求建置 10+ 份全自動更新的動態數據報表。",
                  "優化存貨管理部門的資料儲存系統，使用 Apps Script 取代試算表函式以提高頁面載入速度 100%+。",
                  "維護買賣家相關數據的儀表板，新增 3 個重要指標，並主動發掘修正 10+ 個既有錯誤。",
                  "建構循環包裝專案的資料流，追蹤各包裝的使用近況與生命週期，提供採購與分配的決策依據。"
                ]
            },
            shopee_cb: {
                title: "物流分析實習生",
                subtitle: "蝦皮娛樂電商-跨境部門, 台灣",
                summary: "損益預估, VBA 自動化, 活動成效分析",
                details: [
                  "預估與驗證 5 次規模 NT$ 1 M+ 的跨境免運活動之成本效益，協助制定能最大化利潤的活動內容。",
                  "追蹤彙整跨境三大賣家方案的成效，確認數據合理性，並以 VBA 自動化流程減少 50%+ 作業時間。",
                  "分析相關事件的潛在影響，如海關實名認證的衝擊、新蝦幣回饋方案與新物流渠道的排擠效果。"
                ]
            },
            ntu_bachelor: {
                 title: "經濟學系與哲學系 雙學士學位",
                 subtitle: "國立台灣大學",
                 summary: "經濟學 & 哲學, 書卷獎",
                 details: [
                    "學業成績: 4.00/4.30",
                    "獲獎紀錄: 109學年社科學院書卷獎、106學年文學院書卷獎"
                 ]
            },
            fcc: {
                title: "助理分析實習生",
                subtitle: "藍濤亞洲, 台灣",
                summary: "投資概要, 商業計畫書, 市場研究",
                details: [
                  "協助撰寫 3 份投資概要與 1 份商業計畫書，內容涵蓋發展規劃、募資計劃、市場前景與投資亮點。",
                  "製作 20+ 份潛在客戶的資料蒐集報告，聚焦於商業模式、競爭優勢、財務表現與融資紀錄。"
                ]
            }
        },
        projects: {
            title: "個人專案",
            parkfinder: {
                title: "ParkFinder 台北停車通",
                short: "台北市停車位即時查詢與歷史數據統計分析平台。",
                full: "ParkFinder 台北停車通是一個全方位的台北市即時停車位查詢平台。系統整合了政府開放資料API的即時數據擷取、歷史數據的統計分析，以及使用 Streamlit 建構的互動式視覺化介面。\n\n主要功能：\n• 台北市各行政區停車場即時空位查詢\n• 基於歷史數據分析，預測不同時段的停車位可用率\n• 互動式地圖與多維度篩選功能\n• 每日自動化數據收集與彙整\n\n這個平台幫助駕駛人根據歷史趨勢找到空位率較高的停車場，節省尋找車位的時間，降低都市交通壅塞，提升城市移動效率。",
                link: "https://parkfinder.streamlit.app/"
            },
            betting: {
                title: "運彩高手預測追蹤系統",
                short: "追蹤頂尖運彩玩家預測結果的數據驅動分析系統。",
                full: "運彩高手預測追蹤系統是一個自動化網頁爬蟲系統，專門追蹤並分析頂尖運彩玩家的預測結果。\n\n主要功能：\n• 從多個平台自動爬取預測數據\n• 依運動類型、聯賽、投注類型進行準確率統計分析\n• Google Sheets 整合，方便數據追蹤與分享\n• 績效指標儀表板，識別持續準確的預測者\n\n透過彙整經驗證的成功投注者的集體智慧，這個系統提供數據驅動的洞察，作為投注策略的參考依據。分析結果揭示了不同運動項目和時間期間的預測準確率模式。",
                link: "https://docs.google.com/spreadsheets/d/1IcTCgwnIk_EKnqRdBYK7-MGfxiTrxbTnm3-89Fc76X4/edit?usp=sharing"
            }
        },
        analysis: {
            title: "商業分析",
            people_flow: {
                title: "Tableau 共享站點人流地圖",
                short: "利用共享站點人流視覺化，優化站點的開設與淘汰決策。",
                full: "我們利用 Tableau 建立了共享站點使用流量的綜合視覺化地圖。這份地圖讓業務單位能直觀地理解各個地點的「人流」。透過分析這些數據，團隊能夠依據數據決策，策略性地在需求量大的熱區開設新站點，並識別出人流低、表現不佳的站點進行淘汰，從而優化整體的網絡效率。"
            },
            trip_rate: {
                title: "司機接單率估計模型",
                short: "利用總車資與績效指標，透過 LOWESS 擬合估計司機接單率。",
                full: "本專案專注於估計司機接受行程請求的機率 (Trip Rate)。我們分析了總車資金額與個別司機績效指標之間的歷史數據相關性。透過應用 LOWESS (局部加權散點圖平滑) 技術來擬合數據點，我們生成了接單率曲線。此模型使我們能夠模擬不同的定價情境，並確定在最低成本下達到目標接單率所需的最佳補貼金額。"
            },
            mgm: {
                title: "MGM 社群網絡分析",
                short: "運用社群網絡分析評估「舊客帶新客」(MGM) 活動成效。",
                full: "利用 NetworkX 函式庫，我們對「舊客帶新客」(MGM) 活動進行了社群網絡分析。透過繪製由推薦關係形成的連結，我們將用戶分類為不同的社群聚落。接著，我們計算了各種網絡中心性指標，以識別網絡中的關鍵意見領袖 (Key Influencers)。這項分析使我們能夠制定精準的行銷策略，將資源集中在中心性高的用戶身上，以最大化病毒式傳播效應與整體活動成效。"
            }
        },
        research: {
            title: "學術研究",
            thesis: {
                title: "父母過世與婚姻決策",
                short: "使用事件研究法探討父母過世如何影響子女婚姻決策的先驅研究。",
                full: "父母過世對子女婚姻決策的影響：來自台灣的證據\n\n本碩士論文利用台灣完整的行政資料，探討父母過世與子女婚姻決策之間的因果關係。\n\n研究方法：\n• 事件研究法 (Event Study) 設計，捕捉父母過世前後的動態效果\n• 大規模行政資料確保統計檢定力與外部效度\n• 控制個體層級的時間不變異質性\n\n主要發現：\n• 父母過世後，子女婚姻時機出現顯著變化\n• 效果依性別與出生序呈現異質性\n• 發現「監護人效果」與「遺產效果」的證據\n\n這項先驅研究有助於理解東亞社會的家庭動態、喪親效應與人口轉型。",
                link: "/paper/thesis.pdf"
            },
            pension: {
                title: "國民年金改革",
                short: "使用差異中之差異法分析年金改革對家庭經濟行為的影響。",
                full: "國民年金改革如何影響家庭經濟行為？來自台灣的證據\n\n本研究使用準實驗方法，分析台灣國民年金改革對家庭經濟決策的因果效果。\n\n研究方法：\n• 差異中之差異法 (DiD)，利用政策實施時間的變異\n• 比較受影響與未受影響的世代群組\n• 穩健性檢驗包含安慰劑檢定與平行趨勢驗證\n\n主要發現：\n• 改革後家庭儲蓄率出現顯著變化\n• 勞動供給決策調整，尤其在年長工作者族群\n• 因應預期年金變動的消費平滑化行為\n\n研究結果為年金政策設計提供關鍵洞察，有助理解家庭如何回應社會安全制度的變革。",
                link: "/paper/labor_final.pdf"
            },
            labor: {
                title: "無償勞動分工",
                short: "使用 Ordered Probit 模型分析台灣家庭無償勞動分工的決定因素。",
                full: "家務無償勞動分工的成因與影響為何？來自台灣家庭的證據\n\n本研究探討台灣家庭中無償家務勞動分工的決定因素與後果。\n\n研究方法：\n• Ordered Probit 模型分析勞動分工的順序結果變數\n• 台灣社會變遷調查資料提供豐富的家戶資訊\n• 控制選擇性偏誤與內生性問題\n\n主要發現：\n• 性別仍是家務勞動分配的主要決定因素\n• 教育程度與相對所得顯著影響協商權力\n• 不平等分工與女性勞動參與率降低相關\n• 文化因素與經濟誘因交互作用\n\n本研究透過量化家庭生產決策中的權衡取捨，為勞動經濟學與性別研究做出貢獻。",
                link: "/paper/applied_econ_final.pdf"
            }
        },
        teaching: {
            title: "教學文件",
            git: {
                title: "Git 進階課程",
                desc: "Git 版本控制進階指南，涵蓋分支策略、衝突解決與最佳實踐。"
            },
            ml_tuning: {
                title: "機器學習(非深度學習)調參指南",
                desc: "針對非深度學習模型的超參數調整綜合指南，專注於實用技巧與策略。"
            }
        }
    }
};
