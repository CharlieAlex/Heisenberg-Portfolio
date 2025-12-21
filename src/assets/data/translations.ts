export const translations = {
    en: {
        navigation: {
            expertise: "Expertise",
            history: "Career",
            projects: "Projects",
            analysis: "Analysis",
            research: "Research",
            teaching: "Teaching"
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
                desc: "Real-time query, tracking, and statistical analysis of available parking spaces in Taipei City. We retrieve parking data, aggregate availability for fixed time periods, and offer interactive visualization tools."
            },
            betting: {
                title: "Sports Betting Freerider",
                desc: "Elevate the Betting Game with Data-Backed Strategies. A web scraping system that captures prediction results from top-ranking players and provides statistical analyses of prediction accuracy."
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
                desc: "The Effects of Parental Death on Offspring's Marital Decisions: Evidence from Taiwan. A Pioneering Study using Event Study Method."
            },
            pension: {
                title: "National Pension Reform",
                desc: "How does National Pension Reform affect household economic behaviors? Evidence from Taiwan using Difference-in-Differences method."
            },
            labor: {
                title: "Division of Unpaid Labor",
                desc: "What is the cause and effect of the domestic division of unpaid labor? Evidence from Taiwanese Family using Ordered Probit model."
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
            teaching: "教學文件"
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
                desc: "台北市停車位即時查詢與統計分析。我們爬取即時停車數據，彙整分析固定時段的停車可用率，並提供互動式的視覺化工具。"
            },
            betting: {
                title: "運彩高手預測追蹤系統",
                desc: "用數據策略提升運彩勝率。這是一個網頁爬蟲系統，捕捉頂尖玩家的預測結果，並提供預測準確率的統計分析報告。"
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
                desc: "父母過世對子女婚姻決策的影響：來自台灣的證據。使用事件研究法 (Event Study) 的先驅研究。"
            },
            pension: {
                title: "國民年金改革",
                desc: "國民年金改革如何影響家庭經濟行為？使用差異中之差異法 (DiD) 基於台灣數據的實證研究。"
            },
            labor: {
                title: "無償勞動分工",
                desc: "家務無償勞動分工的成因與影響為何？使用 Ordered Probit 模型對台灣家庭的實證分析。"
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
