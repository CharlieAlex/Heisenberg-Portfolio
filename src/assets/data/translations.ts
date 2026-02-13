export const translations = {
    en: {
        navigation: {
            expertise: "Expertise",
            history: "Career",
            projects: "Projects",
            analysis: "Analysis",
            research: "Research",
            honors: "Honors",
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
            decision_science: {
                title: "Decision-Oriented Data Science",
                desc: "Specializes in decomposing business objectives into analytical problems. Integrates statistical analysis, machine learning, and linear programming to generate comparable action options, assessing impact, risk, and trade-offs. Transitions analysis into productized, auto-updating dashboards to support real-time monitoring and agile decision-making."
            },
            causal_analysis: {
                title: "Causal Inference & Experimental Design",
                desc: "Experienced in designing and executing A/B testing in real business scenarios, and applying econometric methods to construct robust counterfactuals when randomization is infeasible. Proficient in Causal Machine Learning (e.g., Causal Forests, Double Machine Learning) to analyze heterogeneous treatment effects at scale, enabling precise segmentation and intervention strategies."
            },
            analytics_engineering: {
                title: "Analytics Engineering",
                desc: "Engineers data analysis, machine learning, and experimental workflows into maintainable pipelines through version control and scheduling. Possesses foundational skills for productionizing results, including containerization, cloud deployment, and basic API development to support the long-term operation of models and analytical services."
            }
        },
        career: {
            title: "Career History",
            yulon: {
                title: "Data Analyst",
                subtitle: "Yulon Group, Digital Transformation",
                date: "2024.6 - Present",
                summary: "A/B Testing, Statistical Analysis, Machine Learning, Causal Machine Learning, Tableau, GCP",
                details: [
                    "CarPlus Car Rental: Designed and executed A/B tests to evaluate the impact of real-time incentives on short-term rental customers’ conversion behavior, increasing booking conversion rates by 5%. Built an operational KPI dashboard for car-sharing services to support fleet dispatching and station open/close decisions, reducing weekly decision-making time by 50%+.",
                    "LINE GO Taxi: Led multiple incentive strategy optimization analyses using causal machine learning (Causal Forest), linear programming, and social network analysis. Improved incentive allocation efficiency from different decision perspectives, achieving 10–20% reductions in total subsidy costs while maintaining service performance.",
                    "Sinjang Used Cars: Developed a used-car auction price prediction model using LightGBM, providing accurate pricing benchmarks to reduce acquisition risk. Model performance was within 5% of internal expert judgments. Built historical trend dashboards to systematically track price movements across vehicle types, supporting residual value evaluation and long-term analysis.",
                    "Additional Contributions: Proactively planned and delivered 10+ internal knowledge-sharing sessions on data science topics. Mentored one data analyst intern and one junior analyst, enabling rapid onboarding to production projects. Participated in three university guest lectures, sharing real-world data analytics case studies with nearly 100 students, fostering industry–academia exchange."
                ]
            },
            ntu_master: {
                title: "Master's Degree",
                subtitle: "National Taiwan University, Economics",
                summary: "Machine Learning, Econometrics, Causal Inference",
                details: [
                   "Academic Performance: GPA 4.09 / 4.30 (Highest: 4.30)",
                   "Core Coursework: Machine Learning and Causal Inference; Machine Learning and Econometrics; Applied Econometrics; Data Science for Social Research",
                   "Master’s Thesis: Applied causal inference and event study methods to large-scale real-world administrative data (tens of millions of records) to examine how policies and major events influence individual decision-making."
                ]
            },
            shopee_xpress: {
                title: "Data Engineer Intern",
                subtitle: "Shopee Xpress, Business Intelligence",
                summary: "SQL, Apps Script, Dynamic Data Report",
                details: [
                  "Served as the cross-functional data access and analytics interface, translating business requirements into structured SQL queries and metric definitions; designed and maintained 10+ automated, decision-oriented dashboards, enabling non-technical teams to consistently access reliable and verifiable data.",
                  "Optimized data storage and access workflows for the inventory management team by replacing high-latency spreadsheet formulas with Google Apps Script, reducing page load time by 50%+ and significantly improving daily operational efficiency.",
                  "Owned maintenance and data quality control for core buyer–seller operational dashboards, introduced 3 key metrics, and proactively identified and corrected 10+ data issues, substantially improving metric reliability and decision confidence.",
                  "Designed and built an end-to-end data pipeline from scratch for a reusable packaging initiative, integrating usage logs and status transitions to systematically track lifecycle stages, serving as a primary decision input for procurement sizing and resource allocation."
                ]
            },
            shopee_cb: {
                title: "Logistics Analyst Intern",
                subtitle: "Shopee, Cross Border",
                summary: "Cost-Benefit Estimation, Business Analysis, VBA",
                details: [
                  "Led pre-campaign cost–benefit estimation and post-campaign performance validation for cross-border free-shipping promotions, analyzing 5 large-scale campaigns (NT$1M+ each) and supporting activity design and resource allocation decisions to maximize profitability.",
                  "Built a systematic performance tracking and comparison framework for three major cross-border seller programs, validated data consistency and business logic, and automated reporting workflows with VBA, reducing manual effort by 50%+.",
                  "Conducted impact analyses of policy and strategy changes in cross-border operations, including customs identity verification requirements, new incentive mechanisms, and logistics channel adjustments, assessing substitution and cannibalization effects on user behavior and program performance."
                ]
            },
            ntu_bachelor: {
                 title: "Double Bachelor's Degree",
                 subtitle: "National Taiwan University, Economics & Philosophy",
                 summary: "Economic Thinking, Logical Thinking, Critical Thinking",
                 details: [
                    "Academic Performance: GPA 4.00 / 4.30 (Highest: 4.30)",
                    "Economics Training: Microeconomics; Macroeconomics; Econometrics; Game Theory; Experimental Economics",
                    "Mathematical & Logical Foundations: Mathematical Analysis; Set Theory; Classical Logic; Non-classical Logic"
                 ]
            },
            fcc: {
                title: "Assistant Analyst Intern",
                subtitle: "FCC Partners Asia",
                summary: "Investment Teaser, Business Plan, Market Research",
                details: [
                  "Supported front-office investment analysis by preparing 3 investment briefs and 1 business plan, focusing on business model evaluation, growth trajectory, fundraising strategy, and investment risk assessment.",
                  "Conducted systematic data collection and synthesis for 20+ potential targets, gathering both structured and unstructured information on industry positioning, competitive landscape, financial performance, and historical financing records to enable preliminary investment screening and comparative analysis."
                ]
            }
        },
        projects: {
            title: "Side Projects",
            visit_github: "Visit GitHub",
            visit_app: "Visit App",
            ml_analysis: {
                title: "ML Analysis Dashboard",
                short: "Error analysis and interpretability dashboard for trained machine learning models.",
                full: "ML Analysis Dashboard is a comprehensive tool for analyzing trained machine learning models, focusing on error analysis and model interpretability to drive continuous improvement.\n\nKey Features:\n• Error analysis to identify patterns in model mispredictions\n• Feature importance and SHAP value visualization\n• Interactive data exploration and filtering\n• Comparative analysis across different model versions\n\nThis dashboard empowers data scientists to understand model behavior, identify areas for improvement, and communicate insights to stakeholders effectively.",
                link: "https://ML-Analysis-Dashboard.streamlit.app/",
                github: "https://github.com/CharlieAlex/ML-Analysis-Dashboard"
            },
            parkfinder: {
                title: "ParkFinder",
                short: "Real-time query and statistical analysis of available parking spaces in Taipei City.",
                full: "ParkFinder is a comprehensive real-time parking availability platform for Taipei City. The system combines a robust data pipeline that retrieves live parking data from government APIs, statistical analysis based on historical patterns, and interactive visualization using Streamlit.\n\nKey Features:\n• Real-time parking space availability queries across all Taipei districts\n• Historical data analysis to predict parking availability by time of day\n• Interactive maps and filters for multi-dimensional exploration\n• Daily automated data collection and aggregation\n\nThe platform helps drivers save time by identifying parking lots with higher availability based on historical trends, reducing urban congestion and improving city mobility.",
                link: "https://parkfinder.streamlit.app/",
                github: "https://github.com/CharlieAlex/ParkFinder"
            },
            betting: {
                title: "Sports Betting Freerider",
                short: "Data-backed prediction tracking system capturing insights from top-ranking bettors.",
                full: "Sports Betting Freerider is a Line Bot driven crawler system designed to track and analyze prediction results from top-ranking sports betting players.\n\nKey Features:\n• Flexible crawling targets specified via Line Bot, fully automated with iOS Shortcuts\n• Automated scraping of prediction data from Playsport, with statistical analysis of prediction accuracy by sport, league, and betting type\n• BigQuery & Google Sheets integration for seamless data tracking and sharing\n• Performance metrics dashboard to identify consistently accurate predictors\n\nBy leveraging collective intelligence from proven successful bettors, this system provides data-driven insights to inform betting strategies. The analysis reveals patterns in prediction accuracy across different sports and time periods.",
                link: "https://sports-betting-freerider.streamlit.app/",
                github: "https://github.com/CharlieAlex/Sports-Betting-Freerider"
            },
            shopping_adventure: {
                title: "Japan Shopping Adventure",
                short: "An adventure-themed shopping list app designed for two players, turning shopping into an exciting quest!",
                full: "Japan Shopping Adventure is a collaborative shopping list application that gamifies the shopping experience with adventure elements.\n\nKey Features:\n• Shopping List Management: Built-in 60+ curated must-buy items in Japan, with real-time addition and editing capabilities.\n• Two-Player Collaboration: \"Villager A\" and \"Villager B\" can track their individual progress with dynamic contribution bars.\n• Smart Search & Filter: Keyword search support with category and store filtering options.\n• Visual Experience: Integrated Google Drive image display and one-click Google Image Search.\n• Travel Guide Map: Manage shopping, anime, and dining spots with visit tracking and external link support.\n• Immersive Adventure UI: Deep green theme with gold accents, optimizing the user experience for mobile devices.\n• Cloud Sync: Real-time multi-device synchronization using Firebase Firestore and Google Sheets integration.",
                link: "https://shopping-adventure-app.vercel.app/",
                github: "https://github.com/CharlieAlex/Shopping-Adventure-App"
            }
        },
        analysis: {
            title: "Business Analysis",
            people_flow: {
                title: "Shared Station Flow Map",
                short: "Optimizing station placement, elimination, and vehicle dispatching using shared station flow visualization.",
                full: "This project utilizes Tableau to create a comprehensive visualization of shared station usage flows, empowering the business unit to intuitively understand \"people flow\" across different locations. These insights drive data-driven decisions for strategically opening new stations in high-demand areas, optimizing vehicle dispatching to meet usage needs, and identifying underperforming stations for potential elimination, thereby enhancing overall network efficiency."
            },
            trip_rate: {
                title: "Taxi Driver Trip Rate Analysis",
                short: "Estimating the non-linear relationship between fare prices and driver acceptance rates to support optimal subsidy allocation.",
                full: "Based on historical ride-hailing pricing and driver acceptance behavior, this analysis estimates the non-linear relationship between price and acceptance rates under various external conditions such as city and time period. It characterizes the diminishing marginal utility and saturation effects of price increases on acceptance willingness. By stabilizing the behavioral response curve through smoothing estimation, the project quantifies the trade-off between subsidy costs and acceptance rate improvements, supporting the selection of the most cost-effective subsidy and pricing intervals within a limited budget."
            },
            mgm: {
                title: "Friend Referral Social Network Analysis",
                short: "Constructing a referral social network to analyze the impact of structural reciprocity on campaign costs and diffusion efficiency.",
                full: "Addressing the issue of excessive reward issuance in referral programs due to design flaws, this project constructs a user social network based on referral relationships. Through network simulation and structural analysis, it assesses the impact of policy adjustments on diffusion behavior and reward costs, quantifying potential savings in coupon issuance. Additionally, centrality analysis identifies key influencers for precision marketing, while detection of high-density subgroups supports the design of group-based promotions and bundling schemes, transforming cost vulnerabilities into scalable marketing strategies."
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
        honors: {
            title: "Honors",
            award1: {
                title: "Department's Best Employee",
                subtitle: "CarPlus, Yulon Group",
                date: "2025"
            },
            award2: {
                title: "Presidential Award",
                subtitle: "College of Social Sciences, National Taiwan University",
                date: "2020"
            },
            award3: {
                title: "TOEIC Golden Certificate",
                subtitle: "Score: 870/990",
                date: "2020"
            },
            award4: {
                title: "Presidential Award",
                subtitle: "College of Liberal Arts, National Taiwan University",
                date: "2017"
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
            },
            note_taking: {
                title: "Note-taking Methodology",
                desc: "Learn how to build a personal knowledge management system using effective note-taking techniques."
            },
            problem_solving: {
                title: "McKinsey 7-Step Problem Solving",
                desc: "A structural approach to solving complex business problems based on the McKinsey methodology."
            },
            tree_model: {
                title: "Tree Model Algorithms",
                desc: "A comprehensive guide to tree-based algorithms, including Decision Tree, Random Forest, GBDT, XGBoost, LightGBM, and CatBoost."
            },
            scm: {
                title: "Structural Causal Model",
                desc: "A deep dive into Structural Causal Models (SCM). Covers DAGs, do-calculus, identification, and mediation, bridging the gap between statistical correlation and causal mechanisms."
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
            honors: "榮譽獎項",
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
            decision_science: {
                title: "決策導向資料科學",
                desc: "專長將商業目標拆解為可分析的資料問題，依不同情境整合統計分析、機器學習與線性規劃模型，產出可比較的行動選項，評估影響、風險與權衡，並將分析結果產品化為自動更新的動態儀表板，支援即時監控與快速迭代決策。"
            },
            causal_analysis: {
                title: "因果推論與實驗設計",
                desc: "具備在真實商業場景規劃執行 A/B Testing 實驗的能力與經驗，也能在無法進行隨機實驗時以計量經濟學方法建構合理的對照組。同時熟悉因果森林、雙重機器學習等因果機器學習模型，可在大規模資料下進行異質性效果分析，據此提出更精準的分群干預與實驗策略。"
            },
            analytics_engineering: {
                title: "分析式資料工程",
                desc: "能將資料分析、機器學習與實驗流程工程化，透過版本控管與定期排程，建構出易於維護的模型管線。亦具備將成果落地的基礎能力，包含容器化、雲端部署與基礎 API 撰寫，支援模型與分析服務的長期運行。"
            }
        },
        career: {
            title: "職涯歷程",
            yulon: {
                title: "資料分析師",
                subtitle: "裕隆集團, 數位轉型部門",
                date: "2024.6 - 至今",
                summary: "A/B Testing, 統計分析, 機器學習, 因果機器學習, Tableau儀表板, GCP",
                details: [
                    "格上租車: 設計、執行 A/B Testing 實驗以評估即時誘因對日租車用戶轉換行為的影響，有效提升下單轉換率 5%。建立共享車營運指標儀表板，用以提供車輛調度與開關站決策所需資訊，每週節省決策流程時間 50%+。",
                    "LINE GO 計程車: 主導多項優惠策略優化分析，涵蓋因果機器學習模型 Causal Forest、線性規劃模型與社會網絡分析，從不同決策角度提升誘因配置效率，在維持服務成效的前提下，分別大幅降低整體補貼成本 10%-20%。",
                    "行將中古車: 以 LightGBM 建立中古車拍賣價格預測模型，透過精確的報價基準降低收購風險，模型表現與內部專業人員判斷水準差距不到 5%。建立歷史趨勢分析儀表板，系統性追蹤不同車型的價格變化，作為殘值評估與長期分析依據。",
                    "其他: 主動規劃並分享資料科學領域相關主題，累計 10 堂以上內部技術分享。指導 1 位分析實習生與 1 位新人分析師，協助快速銜接實務專案。參與 3 場校園演講，對外分享實務資料分析專案，累計近 100 位學生參與，促進人才交流與學術合作。",
                ]
            },
            ntu_master: {
                title: "碩士學位",
                subtitle: "國立台灣大學, 經濟學研究所",
                summary: "機器學習, 計量方法, 因果推論",
                details: [
                   "學業成績: 4.09/4.30 (最高 4.30)",
                   "修課重點: 機器學習與因果推論、機器學習與經濟計量、應用計量方法、資料科學與社會研究",
                   "碩士論文: 運用因果推論與事件研究方法，分析大規模真實世界行政資料（千萬級），探討政策與事件對個體決策的影響"
                ]
            },
            shopee_xpress: {
                title: "資料工程實習生",
                subtitle: "蝦皮娛樂電商, 商業智慧部門",
                summary: "SQL, Apps Script, 動態數據報表",
                details: [
                  "作為跨部門資料存取與分析窗口，將業務需求轉化為結構化查詢與指標定義，設計並維護 10+ 份可自動更新的決策型儀表板，使非技術團隊能穩定取得一致、可驗證的數據結果。",
                  "優化存貨管理部門的資料儲存與存取流程，導入 Apps Script 取代高負載試算表函式，將頁面載入時間縮短逾 50%，顯著改善日常使用體驗與作業效率。",
                  "負責買賣家核心營運數據的儀表板維護與品質控管，新增 3 項關鍵指標，並主動識別與修正 10+ 項既有數據錯誤，提升指標可信度與決策可靠性。",
                  "從零設計並建構循環包裝專案的端到端資料流，整合使用紀錄與狀態變化，系統化追蹤包裝生命週期，成為採購規模評估與資源配置的關鍵決策依據。"
                ]
            },
            shopee_cb: {
                title: "物流分析實習生",
                subtitle: "蝦皮娛樂電商, 跨境部門",
                summary: "成本效益估計, 商業分析, VBA",
                details: [
                  "負責跨境免運活動的事前成本效益預估與事後成效驗證，累計分析 5 次規模達 NT$ 1M+ 的活動，支援活動設計與資源投入決策，以達利潤最大化。",
                  "系統化追蹤與比較跨境三大賣家方案之成效，檢核數據一致性與合理性，並透過 VBA 自動化彙整流程，降低 50%+ 人工作業時間。",
                  "針對跨境業務中的制度與策略變動進行影響分析，包括海關實名認證政策、新回饋機制與物流通路調整，評估其對使用行為與方案表現的潛在排擠與替代效果。"
                ]
            },
            ntu_bachelor: {
                 title: "雙學士學位",
                 subtitle: "國立台灣大學, 經濟學系與哲學系",
                 summary: "經濟思維, 邏輯思維, 批判思維",
                 details: [
                    "學業成績: 4.00/4.30 (最高 4.30)",
                    "經濟學訓練: 個體經濟學、總體經濟學、計量經濟學、賽局論、實驗經濟學",
                    "數理與邏輯訓練: 分析導論、集合論、基本邏輯、非古典邏輯"
                 ]
            },
            fcc: {
                title: "助理分析實習生",
                subtitle: "藍濤亞洲",
                summary: "投資概要, 商業計畫書, 市場研究",
                details: [
                  "參與投資銀行前端分析工作，協助撰寫 3 份投資概要與 1 份商業計畫書，聚焦於商業模式拆解、成長路徑、募資邏輯與投資風險判斷。",
                  "系統化蒐集並整理 20+ 家潛在標的之公開與非結構化資訊，涵蓋產業定位、競爭結構、財務表現與歷史融資紀錄，支援初步投資篩選與比較分析。"
                ]
            }
        },
        honors: {
            title: "榮譽獎項",
            award1: {
                title: "績優員工",
                subtitle: "格上租車, 裕隆集團",
                date: "2025"
            },
            award2: {
                title: "書卷獎",
                subtitle: "國立台灣大學 社科學院",
                date: "2020"
            },
            award3: {
                title: "TOEIC 金色證書",
                subtitle: "分數: 870/990",
                date: "2020"
            },
            award4: {
                title: "書卷獎",
                subtitle: "國立台灣大學 文學院",
                date: "2017"
            }
        },
        projects: {
            title: "個人專案",
            visit_github: "前往 GitHub",
            visit_app: "前往應用程式",
            ml_analysis: {
                title: "機器學習分析儀表板",
                short: "針對訓練完成的機器學習模型進行錯誤分析與可解釋性分析。",
                full: "ML 分析儀表板是一個綜合性的機器學習模型分析工具，專注於錯誤分析與模型可解釋性，協助持續改善模型效能。\n\n主要功能：\n• 錯誤分析：識別模型預測錯誤的模式\n• 特徵重要性與 SHAP 值視覺化\n• 互動式數據探索與篩選\n• 不同模型版本的比較分析\n\n這個儀表板協助資料科學家理解模型行為、找出改善空間，並有效地向利害關係人傳達分析洞察。",
                link: "https://ML-Analysis-Dashboard.streamlit.app/",
                github: "https://github.com/CharlieAlex/ML-Analysis-Dashboard"
            },
            parkfinder: {
                title: "台北停車通",
                short: "台北市停車位即時查詢與歷史數據統計分析平台。",
                full: "ParkFinder 台北停車通是一個全方位的台北市即時停車位查詢平台。系統整合了政府開放資料API的即時數據擷取、歷史數據的統計分析，以及使用 Streamlit 建構的互動式視覺化介面。\n\n主要功能：\n• 台北市各行政區停車場即時空位查詢\n• 基於歷史數據分析，預測不同時段的停車位可用率\n• 互動式地圖與多維度篩選功能\n• 每日自動化數據收集與彙整\n\n這個平台幫助駕駛人根據歷史趨勢找到空位率較高的停車場，節省尋找車位的時間，降低都市交通壅塞，提升城市移動效率。",
                link: "https://parkfinder.streamlit.app/",
                github: "https://github.com/CharlieAlex/ParkFinder"
            },
            betting: {
                title: "運彩高手預測追蹤系統",
                short: "追蹤頂尖運彩玩家預測結果的數據驅動分析系統。",
                full: "運彩高手預測追蹤系統是一個以 Line Bot 驅動的爬蟲系統，專門追蹤並分析頂尖運彩玩家的預測結果。\n\n主要功能：\n• 以 Line Bot 彈性指定要爬蟲的資料內容，可透過 ios 捷徑實現全自動化\n• 從玩運彩網站爬取預測數據，依運動、聯賽、投注類型進行準確率統計分析\n• BigQuery 與 Google Sheets 整合，方便數據追蹤與分享\n• 績效指標儀表板，識別持續準確的預測者\n\n透過彙整經驗證的成功投注者的集體智慧，這個系統提供數據驅動的洞察，作為投注策略的參考依據。分析結果揭示了不同運動項目和時間期間的預測準確率模式。",
                link: "https://sports-betting-freerider.streamlit.app/",
                github: "https://github.com/CharlieAlex/Sports-Betting-Freerider"
            },
            shopping_adventure: {
                title: "日本購物大冒險",
                short: "一個冒險主題的日本購物清單管理應用，專為「村民A」和「村民B」設計，讓購物變成一場冒險遊戲！",
                full: "日本購物大冒險是一個結合冒險遊戲元素的購物清單管理應用，專為雙人協作設計。\n\n主要功能：\n• 購物清單管理：內建 60+ 種精選日本必買商品，支援即時新增與編輯。\n• 雙人協作追蹤：村民 A 與村民 B 可分別標記購買進度，透過動態進度條呈現貢獻。\n• 智能搜尋與篩選：支援關鍵字搜尋，並可依分類或店舖篩選商品。\n• 視覺化體驗：整合 Google Drive 商品圖片與 Google 圖片搜尋功能。\n• 旅遊攻略地圖：管理購物、動漫、餐廳等據點，標記造訪進度並支援外部連結。\n• 沉浸式冒險介面：深綠色調搭配金色漸層，結合行動裝置優先的響應式設計。\n• 雲端資料同步：整合 Firebase Firestore 與 Google Sheets 實現多裝置即時同步。",
                link: "https://shopping-adventure-app.vercel.app/",
                github: "https://github.com/CharlieAlex/Shopping-Adventure-App"
            }
        },
        analysis: {
            title: "商業分析",
            people_flow: {
                title: "共享站點人流地圖",
                short: "利用共享站點人流視覺化，優化站點的開設與淘汰、車輛調度等決策。",
                full: "本專案利用 Tableau 建立了共享站點使用流量的綜合視覺化地圖。這份地圖讓業務單位能直觀地理解各個地點的「人流」。透過分析這些數據，團隊能夠依據數據決策，策略性地在需求量大的熱區開設新站點、將車輛調度至高需求站點，並識別出人流低、表現不佳的站點進行淘汰，從而優化整體的網絡效率。"
            },
            trip_rate: {
                title: "計程車司機接單率分析",
                short: "估計叫車價格與司機接單率之間的非線性關係，以支援補貼決策的最佳配置。",
                full: "基於歷史叫車價格與司機接單行為，在不同縣市與時段等外在環境條件下，估計價格與接單率之間的非線性關係，刻畫價格提升對接單意願的邊際遞減與飽和效果，並透過平滑估計穩定行為反應曲線，進一步量化補貼成本與接單率提升之間的權衡，支援在有限預算下選擇最具成本效益的補貼與定價區間。"
            },
            mgm: {
                title: "好友分享社群網絡分析",
                short: "建構好友分享關係的社群網絡，分析結構性互惠行為對活動成本與擴散效率的影響。",
                full: "針對好友分享活動中因制度設計產生的獎勵過度發放問題，建構以分享關係為邊的用戶社群網絡，透過網絡模擬與結構分析，評估適當的制度調整對整體擴散行為與獎勵成本的影響，並量化可降低的優惠券發放量；同時運用中心性分析辨識具高影響力的關鍵用戶，支援精準行銷，並進一步識別高密度子群結構，作為設計群體型促銷與綑綁使用方案的依據，將原本的成本漏洞轉化為可擴張的行銷策略。"
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
                title: "機器學習調參指南",
                desc: "針對非深度學習模型的超參數調整綜合指南，專注於實用技巧與策略。"
            },
            note_taking: {
                title: "知識管理方法論：如何做好筆記",
                desc: "學習如何透過有效的筆記技巧，建立個人知識管理系統。"
            },
            problem_solving: {
                title: "麥肯錫解決問題七步驟",
                desc: "基於麥肯錫方法論，系統性解決複雜商業問題的結構化方法。"
            },
            tree_model: {
                title: "樹模型演算法",
                desc: "詳細介紹樹模型演算法原理的講義，涵蓋 CART、Random Forest、GBDT、XGBoost、LightGBM 與 CatBoost。"
            },
            scm: {
               title: "結構因果模型",
               desc: "深入解析因果推論的發展脈絡與 SCM 結構因果模型。涵蓋 DAG 圖形語言、do-calculus 介入邏輯、可識別性分析及中介效應，是連結統計與因果結構的完整指南。"
            }
        }
    }
};
