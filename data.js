const stockData = {
  "2222": {
    symbol: "2222",
    nameAr: "أرامكو السعودية",
    nameEn: "Saudi Aramco",
    sectorAr: "الطاقة",
    sectorEn: "Energy",
    price: 30.45,
    change: 0.15,
    changePercent: 0.49,
    volume: "5,820,412",
    turnover: "177,150,000",
    metrics: {
      eps: 1.85,
      pe: 16.46,
      netProfitMargin: 26.5,
      roe: 28.2,
      debtToAssets: 18.4,
      debtToEquity: 22.1,
      freeCashFlow: 382.4, // in Billions SAR
    },
    metricsHistory5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      eps: [1.60, 2.72, 2.05, 1.99, 1.85],
      netProfitMargin: [27.5, 30.1, 27.5, 27.4, 26.5],
      roe: [25.4, 32.8, 28.5, 28.0, 28.2],
      debtToAssets: [20.5, 18.9, 17.5, 18.0, 18.4],
      debtToEquity: [24.5, 22.8, 20.8, 21.5, 22.1],
      freeCashFlow: [320.5, 412.8, 380.2, 370.5, 382.4]
    },
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [1498.0, 2006.0, 1650.0, 1612.0, 1720.0], // in Billions SAR
      netIncome: [412.0, 604.0, 454.0, 442.0, 468.0],
      assets: [1680.0, 1790.0, 1820.0, 1850.0, 1910.0],
      liabilities: [610.0, 580.0, 595.0, 612.0, 608.0],
      equity: [1070.0, 1210.0, 1225.0, 1238.0, 1302.0]
    },
    dividends: {
      dividendYield: 7.2,
      payoutRatio: 95.0,
      annual: [
        { year: "2021", amount: 1.40, date: "2021-12-15" },
        { year: "2022", amount: 1.50, date: "2022-12-18" },
        { year: "2023", amount: 1.80, date: "2023-12-20" },
        { year: "2024", amount: 2.10, date: "2024-12-19" },
        { year: "2025", amount: 2.20, date: "2025-12-15" }
      ],
      quarterly: [
        { period: "الربع الأول 2025", amount: 0.55, date: "2025-05-20" },
        { period: "الربع الثاني 2025", amount: 0.55, date: "2025-08-25" },
        { period: "الربع الثالث 2025", amount: 0.55, date: "2025-11-20" },
        { period: "الربع الرابع 2025", amount: 0.55, date: "2026-03-10" }
      ]
    },
    quarterlyFinancials: {
      quarters: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
      revenues: [395.0, 412.0, 401.0, 404.0, 410.0, 435.0, 428.0, 447.0], // in Billions SAR
      netIncome: [102.0, 114.0, 110.0, 116.0, 110.0, 120.0, 118.0, 120.0],
      eps: [0.46, 0.51, 0.49, 0.53, 0.44, 0.48, 0.47, 0.48]
    },
    news: [
      { id: 1, date: "قبل ساعة واحدة", titleAr: "أرامكو توقع اتفاقية شراكة استراتيجية لتوسعة وتطوير البنية التحتية للطاقة النظيفة", titleEn: "Aramco signs strategic partnership agreement to expand clean energy infrastructure", source: "تداول السعودية", url: "https://www.tadawul.com.sa/wps/portal/tadawul/home/market-reports-publications/corporate-news" },
      { id: 2, date: "قبل 3 ساعات", titleAr: "أرامكو السعودية تعلن عن توزيع الأرباح النقدية للمساهمين عن الربع الأول من عام 2026", titleEn: "Saudi Aramco announces cash dividend distribution for Q1 2026", source: "أرقام", url: "https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/3509" },
      { id: 3, date: "قبل 6 ساعات", titleAr: "هيئة السوق المالية توافق على زيادة رأس مال شركات تابعة لأرامكو السعودية", titleEn: "CMA approves capital increase for Saudi Aramco subsidiaries", source: "هيئة السوق المالية", url: "https://www.cma.org.sa" },
      { id: 4, date: "قبل يوم واحد", titleAr: "تقرير خاص: أثر ارتفاع أسعار النفط العالمية على ربحية أرامكو في النصف الأول", titleEn: "Special Report: Impact of global oil prices on Aramco's H1 profitability", source: "أرقام", url: "https://www.argaam.com" }
    ]
  },
  "1120": {
    symbol: "1120",
    nameAr: "مصرف الراجحي",
    nameEn: "Al Rajhi Bank",
    sectorAr: "الخدمات المالية والبنوك",
    sectorEn: "Financials & Banking",
    price: 84.10,
    change: -0.60,
    changePercent: -0.71,
    volume: "2,150,900",
    turnover: "180,890,690",
    metrics: {
      eps: 4.15,
      pe: 20.26,
      netProfitMargin: 44.2,
      roe: 21.8,
      debtToAssets: 78.5,
      debtToEquity: 360.2,
      freeCashFlow: 24.8,
    },
    metricsHistory5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      eps: [3.10, 3.80, 3.75, 4.02, 4.15],
      netProfitMargin: [42.1, 44.5, 43.8, 44.0, 44.2],
      roe: [20.5, 22.4, 21.0, 21.5, 21.8],
      debtToAssets: [75.2, 77.8, 78.0, 78.2, 78.5],
      debtToEquity: [320.5, 350.2, 355.0, 358.5, 360.2],
      freeCashFlow: [18.2, 22.5, 20.8, 23.4, 24.8]
    },
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [25.7, 28.6, 31.2, 33.5, 36.8],
      netIncome: [14.7, 17.2, 16.6, 17.8, 19.5],
      assets: [624.0, 762.0, 808.0, 840.0, 885.0],
      liabilities: [550.0, 662.0, 701.0, 725.0, 760.0],
      equity: [74.0, 100.0, 107.0, 115.0, 125.0]
    },
    dividends: {
      dividendYield: 4.15,
      payoutRatio: 84.3,
      annual: [
        { year: "2021", amount: 2.20, date: "2021-04-10" },
        { year: "2022", amount: 2.50, date: "2022-04-15" },
        { year: "2023", amount: 2.30, date: "2023-04-12" },
        { year: "2024", amount: 3.00, date: "2024-04-18" },
        { year: "2025", amount: 3.50, date: "2025-04-20" }
      ],
      quarterly: [
        { period: "النصف الأول 2025", amount: 1.75, date: "2025-08-10" },
        { period: "النصف الثاني 2025", amount: 1.75, date: "2026-03-25" }
      ]
    },
    quarterlyFinancials: {
      quarters: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
      revenues: [8.1, 8.3, 8.5, 8.6, 8.8, 9.1, 9.3, 9.6],
      netIncome: [4.1, 4.3, 4.5, 4.9, 4.6, 4.8, 4.9, 5.2],
      eps: [0.85, 0.90, 0.94, 1.02, 0.98, 1.02, 1.04, 1.11]
    },
    news: [
      { id: 1, date: "قبل ساعتين", titleAr: "مصرف الراجحي يفتتح فرعاً رقمياً متكاملاً هو الأكبر في المنطقة الشرقية", titleEn: "Al Rajhi Bank opens its largest digital branch in the Eastern Province", source: "أرقام", url: "https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/30" },
      { id: 2, date: "قبل 4 ساعات", titleAr: "تحديث من هيئة السوق المالية بخصوص زيادة ملكية المؤسسات في مصرف الراجحي", titleEn: "CMA update on institutional ownership increase in Al Rajhi Bank", source: "هيئة السوق المالية", url: "https://www.cma.org.sa" },
      { id: 3, date: "قبل يوم واحد", titleAr: "مصرف الراجحي يحصد جائزة أفضل مصرف في الخدمات المصرفية للأفراد بالمملكة", titleEn: "Al Rajhi Bank wins Best Retail Bank in Saudi Arabia award", source: "تداول السعودية", url: "https://www.tadawul.com.sa" }
    ]
  },
  "2010": {
    symbol: "2010",
    nameAr: "سابك",
    nameEn: "SABIC",
    sectorAr: "المواد الأساسية",
    sectorEn: "Basic Materials",
    price: 72.80,
    change: 0.80,
    changePercent: 1.11,
    volume: "1,450,200",
    turnover: "105,574,560",
    metrics: {
      eps: 2.90,
      pe: 25.10,
      netProfitMargin: 6.8,
      roe: 7.5,
      debtToAssets: 24.1,
      debtToEquity: 34.6,
      freeCashFlow: 15.2,
    },
    metricsHistory5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      eps: [7.66, 5.50, -0.90, 2.83, 2.90],
      netProfitMargin: [13.1, 8.3, -1.9, 6.1, 6.8],
      roe: [11.0, 7.9, -1.3, 4.2, 7.5],
      debtToAssets: [34.5, 33.6, 32.2, 30.3, 24.1],
      debtToEquity: [52.8, 50.7, 47.5, 43.5, 34.6],
      freeCashFlow: [32.5, 28.6, 12.1, 14.8, 15.2]
    },
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [174.8, 198.5, 141.6, 138.4, 148.2],
      netIncome: [23.0, 16.5, -2.7, 8.5, 8.7],
      assets: [318.0, 312.0, 298.0, 290.0, 296.0],
      liabilities: [110.0, 105.0, 96.0, 88.0, 90.0],
      equity: [208.0, 207.0, 202.0, 202.0, 206.0]
    },
    dividends: {
      dividendYield: 5.49,
      payoutRatio: 137.9,
      annual: [
        { year: "2021", amount: 4.00, date: "2021-11-20" },
        { year: "2022", amount: 4.25, date: "2022-11-25" },
        { year: "2023", amount: 3.50, date: "2023-11-28" },
        { year: "2024", amount: 3.75, date: "2024-11-30" },
        { year: "2025", amount: 4.00, date: "2025-11-25" }
      ],
      quarterly: [
        { period: "النصف الأول 2025", amount: 2.00, date: "2025-09-12" },
        { period: "النصف الثاني 2025", amount: 2.00, date: "2026-03-18" }
      ]
    },
    quarterlyFinancials: {
      quarters: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
      revenues: [34.1, 35.8, 33.9, 34.6, 35.2, 37.1, 36.8, 39.1],
      netIncome: [1.5, 2.0, 1.8, 3.2, 1.8, 2.1, 2.3, 2.5],
      eps: [0.50, 0.67, 0.60, 1.06, 0.60, 0.70, 0.77, 0.83]
    },
    news: [
      { id: 1, date: "قبل 45 دقيقة", titleAr: "سابك تعلن عن إطلاق مشروع بولي إيثيلين منخفض الكثافة ومستدام محلياً", titleEn: "SABIC announces the launch of a sustainable low-density polyethylene project locally", source: "تداول السعودية", url: "https://www.tadawul.com.sa/wps/portal/tadawul/home/market-reports-publications/corporate-news" },
      { id: 2, date: "قبل 5 ساعات", titleAr: "دراسة أرقام: تحسن هوامش ربحية قطاع البتروكيماويات يمنح سابك دفعة تنافسية", titleEn: "Argaam study: Improved petrochemical margins give SABIC a competitive boost", source: "أرقام", url: "https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/79" },
      { id: 3, date: "قبل يومين", titleAr: "سابك تعين رئيساً تنفيذياً جديداً لشركة تابعة لها في أوروبا لتسريع إعادة الهيكلة", titleEn: "SABIC appoints new CEO for European subsidiary to accelerate restructuring", source: "أرقام", url: "https://www.argaam.com" }
    ]
  },
  "7010": {
    symbol: "7010",
    nameAr: "اس تي سي (stc)",
    nameEn: "stc Group",
    sectorAr: "الاتصالات",
    sectorEn: "Telecommunication",
    price: 38.90,
    change: 0.35,
    changePercent: 0.91,
    volume: "3,890,100",
    turnover: "151,324,900",
    metrics: {
      eps: 2.65,
      pe: 14.68,
      netProfitMargin: 18.2,
      roe: 19.8,
      debtToAssets: 32.5,
      debtToEquity: 62.1,
      freeCashFlow: 11.8,
    },
    metricsHistory5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      eps: [2.26, 2.44, 2.66, 2.60, 2.65],
      netProfitMargin: [17.8, 18.1, 18.4, 17.3, 18.2],
      roe: [17.3, 16.7, 17.0, 15.8, 19.8],
      debtToAssets: [28.5, 30.2, 31.4, 32.0, 32.5],
      debtToEquity: [52.4, 55.6, 58.1, 60.2, 62.1],
      freeCashFlow: [8.9, 10.2, 11.5, 10.9, 11.8]
    },
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [63.4, 67.4, 72.3, 75.1, 78.4],
      netIncome: [11.3, 12.2, 13.3, 13.0, 13.5],
      assets: [120.0, 135.0, 142.0, 148.0, 155.0],
      liabilities: [55.0, 62.0, 64.0, 66.0, 68.0],
      equity: [65.0, 73.0, 78.0, 82.0, 87.0]
    },
    dividends: {
      dividendYield: 4.11,
      payoutRatio: 60.3,
      annual: [
        { year: "2021", amount: 1.60, date: "2021-12-10" },
        { year: "2022", amount: 1.60, date: "2022-12-15" },
        { year: "2023", amount: 1.60, date: "2023-12-12" },
        { year: "2024", amount: 1.60, date: "2024-12-10" },
        { year: "2025", amount: 1.60, date: "2025-12-15" }
      ],
      quarterly: [
        { period: "الربع الأول 2025", amount: 0.40, date: "2025-05-15" },
        { period: "الربع الثاني 2025", amount: 0.40, date: "2025-08-20" },
        { period: "الربع الثالث 2025", amount: 0.40, date: "2025-11-15" },
        { period: "الربع الرابع 2025", amount: 0.40, date: "2026-03-05" }
      ]
    },
    quarterlyFinancials: {
      quarters: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
      revenues: [18.1, 18.5, 18.9, 19.6, 19.2, 19.6, 19.5, 20.1],
      netIncome: [3.1, 3.2, 3.2, 3.5, 3.3, 3.4, 3.3, 3.5],
      eps: [0.62, 0.64, 0.64, 0.70, 0.65, 0.67, 0.65, 0.68]
    },
    news: [
      { id: 1, date: "قبل 15 دقيقة", titleAr: "إس تي سي باي تعلن عن ترقية رخصتها المصرفية رسمياً لبدء عمليات البنك الرقمي", titleEn: "stc pay announces official upgrade of banking license to launch digital bank", source: "تداول السعودية", url: "https://www.tadawul.com.sa/wps/portal/tadawul/home/market-reports-publications/corporate-news" },
      { id: 2, date: "قبل 5 ساعات", titleAr: "اس تي سي توقع اتفاقية لتزويد مدينة نيوم بأحدث تقنيات الاتصال بالجيل الخامس المتقدم", titleEn: "stc signs agreement to provide NEOM with advanced 5G connectivity technology", source: "أرقام", url: "https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/31" },
      { id: 3, date: "قبل 12 ساعة", titleAr: "تداولات مطلع الأسبوع: سهم stc يستقطب سيولة قوية تدفعه لتجاوز مستوياته السابقة", titleEn: "Early week trading: stc stock attracts strong liquidity pushing it past former levels", source: "أرقام", url: "https://www.argaam.com" }
    ]
  },
  "1180": {
    symbol: "1180",
    nameAr: "البنك الأهلي السعودي",
    nameEn: "Saudi National Bank (SNB)",
    sectorAr: "الخدمات المالية والبنوك",
    sectorEn: "Financials & Banking",
    price: 36.25,
    change: -0.15,
    changePercent: -0.41,
    volume: "2,845,000",
    turnover: "103,131,250",
    metrics: {
      eps: 3.35,
      pe: 10.82,
      netProfitMargin: 46.5,
      roe: 14.8,
      debtToAssets: 81.2,
      debtToEquity: 432.1,
      freeCashFlow: 18.5,
    },
    metricsHistory5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      eps: [2.10, 3.10, 3.30, 3.25, 3.35],
      netProfitMargin: [45.1, 47.2, 46.8, 46.0, 46.5],
      roe: [12.4, 15.6, 15.0, 14.5, 14.8],
      debtToAssets: [78.2, 80.5, 81.0, 81.1, 81.2],
      debtToEquity: [385.0, 410.5, 425.0, 428.1, 432.1],
      freeCashFlow: [12.5, 15.6, 17.0, 17.5, 18.5]
    },
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [28.2, 32.5, 34.1, 35.8, 38.2],
      netIncome: [12.7, 18.6, 20.0, 20.5, 21.2],
      assets: [914.0, 945.0, 1020.0, 1050.0, 1100.0],
      liabilities: [802.0, 820.0, 890.0, 915.0, 955.0],
      equity: [112.0, 125.0, 130.0, 135.0, 145.0]
    },
    dividends: {
      dividendYield: 5.52,
      payoutRatio: 59.7,
      annual: [
        { year: "2021", amount: 1.80, date: "2021-04-20" },
        { year: "2022", amount: 2.00, date: "2022-04-22" },
        { year: "2023", amount: 1.85, date: "2023-04-25" },
        { year: "2024", amount: 2.00, date: "2024-04-29" },
        { year: "2025", amount: 2.00, date: "2025-04-24" }
      ],
      quarterly: [
        { period: "النصف الأول 2025", amount: 1.00, date: "2025-08-15" },
        { period: "النصف الثاني 2025", amount: 1.00, date: "2026-03-22" }
      ]
    },
    quarterlyFinancials: {
      quarters: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
      revenues: [8.8, 8.9, 9.1, 9.0, 9.3, 9.5, 9.6, 9.8],
      netIncome: [4.8, 4.9, 5.1, 5.7, 5.0, 5.2, 5.3, 5.7],
      eps: [0.75, 0.77, 0.81, 0.92, 0.79, 0.82, 0.84, 0.90]
    },
    news: [
      { id: 1, date: "قبل ساعة", titleAr: "الأهلي السعودي يطلق برنامج تمويل عقاري تنافسي مخصص للمستفيدين من سكني", titleEn: "SNB launches competitive mortgage program for Sakani beneficiaries", source: "أرقام", url: "https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/40" },
      { id: 2, date: "قبل 8 ساعات", titleAr: "إعلان البنك الأهلي السعودي عن نتائج تصويت الجمعية العامة غير العادية وتوزيع الأرباح", titleEn: "SNB announces results of EGM voting and dividend distribution", source: "تداول السعودية", url: "https://www.tadawul.com.sa/wps/portal/tadawul/home/market-reports-publications/corporate-news" }
    ]
  },
  "2082": {
    symbol: "2082",
    nameAr: "أكوا باور",
    nameEn: "ACWA Power",
    sectorAr: "المرافق الخدمية",
    sectorEn: "Utilities",
    price: 368.40,
    change: 5.20,
    changePercent: 1.43,
    volume: "450,210",
    turnover: "165,857,320",
    metrics: {
      eps: 2.25,
      pe: 163.73,
      netProfitMargin: 23.5,
      roe: 8.6,
      debtToAssets: 68.2,
      debtToEquity: 215.4,
      freeCashFlow: -4.8,
    },
    metricsHistory5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      eps: [1.02, 2.05, 2.15, 2.18, 2.25],
      netProfitMargin: [15.5, 29.1, 27.2, 26.3, 23.5],
      roe: [5.8, 10.1, 9.9, 8.7, 8.6],
      debtToAssets: [71.0, 68.5, 67.5, 68.0, 68.2],
      debtToEquity: [245.0, 216.8, 224.5, 223.3, 215.4],
      freeCashFlow: [2.5, -1.2, -3.8, -4.5, -4.8]
    },
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [4.9, 5.3, 6.1, 6.4, 7.2],
      netIncome: [0.76, 1.54, 1.66, 1.68, 1.75],
      assets: [45.2, 48.5, 54.2, 62.4, 75.1],
      liabilities: [32.1, 33.2, 37.5, 43.1, 52.8],
      equity: [13.1, 15.3, 16.7, 19.3, 22.3]
    },
    dividends: {
      dividendYield: 0.26,
      payoutRatio: 42.6,
      annual: [
        { year: "2021", amount: 0.77, date: "2022-06-05" },
        { year: "2022", amount: 0.83, date: "2023-06-12" },
        { year: "2023", amount: 0.90, date: "2024-06-10" },
        { year: "2024", amount: 0.96, date: "2025-06-15" }
      ],
      quarterly: [
        { period: "السنوي لعام 2024", amount: 0.96, date: "2025-06-15" }
      ]
    },
    quarterlyFinancials: {
      quarters: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
      revenues: [1.4, 1.5, 1.6, 1.9, 1.6, 1.8, 1.9, 1.9],
      netIncome: [0.35, 0.40, 0.38, 0.55, 0.38, 0.45, 0.44, 0.48],
      eps: [0.45, 0.52, 0.49, 0.72, 0.49, 0.58, 0.56, 0.62]
    },
    news: [
      { id: 1, date: "قبل 30 دقيقة", titleAr: "أكوا باور تبدأ التشغيل التجاري لمشروع الطاقة الشمسية بقدرة 500 ميجاوات في دبي", titleEn: "ACWA Power starts commercial operations of a 500MW solar project in Dubai", source: "تداول السعودية", url: "https://www.tadawul.com.sa/wps/portal/tadawul/home/market-reports-publications/corporate-news" },
      { id: 2, date: "قبل ساعتين", titleAr: "أكوا باور توقع اتفاقية لشراء وتطوير محطات طاقة متجددة في آسيا بقيمة 2 مليار دولار", titleEn: "ACWA Power signs agreement to purchase and develop renewable plants in Asia worth $2B", source: "تداول السعودية", url: "https://www.tadawul.com.sa" },
      { id: 3, date: "قبل 9 ساعات", titleAr: "تقرير تحليل فني لـ أرقام: سهم أكوا باور يخترق مستويات مقاومة هامة وسط تدفق استثماري أجنبي", titleEn: "Argaam Technical Report: ACWA Power stock breaks resistance levels amid foreign inflows", source: "أرقام", url: "https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/13247" }
    ]
  }
};

const marketSummary = {
  tasi: {
    value: 11842.10,
    change: 45.30,
    changePercent: 0.38,
    status: "CLOSED", // default
    liquidity: "5.8 مليار ر.س",
    volume: "235 مليون سهم",
    trades: "412,000 صفقة"
  },
  sectorAverages: {
    "الطاقة": { pe: 16.8, roe: 25.5, npm: 24.8 },
    "الخدمات المالية والبنوك": { pe: 18.2, roe: 18.4, npm: 42.1 },
    "المواد الأساسية": { pe: 22.4, roe: 9.8, npm: 8.5 },
    "الاتصالات": { pe: 15.6, roe: 18.2, npm: 17.5 },
    "المرافق الخدمية": { pe: 85.0, roe: 7.2, npm: 19.8 }
  }
};

const newsDatabase = [
  { companyId: "2222", date: "منذ 10 دقائق", titleAr: "أرامكو تعلن عن شراكة هيدروجينية كبرى مع شركات يابانية وكورية", titleEn: "Aramco announces major hydrogen partnership with Japanese and Korean firms", source: "تداول السعودية", url: "https://www.tadawul.com.sa" },
  { companyId: "1120", date: "منذ 25 دقيقة", titleAr: "الراجحي يطلق ميزة الاستثمار الفوري المدعوم بالذكاء الاصطناعي عبر تطبيقه", titleEn: "Al Rajhi launches AI-backed instant investment via its app", source: "أرقام", url: "https://www.argaam.com" },
  { companyId: "2010", date: "منذ 40 دقيقة", titleAr: "سابك تعود للربحية القوية في تقرير الربع الأول وتتخطى تقديرات المحللين", titleEn: "SABIC returns to profitability in Q1 report, exceeding analyst estimates", source: "هيئة السوق المالية", url: "https://www.cma.org.sa" },
  { companyId: "7010", date: "منذ 50 دقيقة", titleAr: "إس تي سي تختبر بنجاح أول شبكة اتصال فضائي مباشر للهواتف المحمولة في المملكة", titleEn: "stc successfully tests first direct satellite-to-mobile network in KSA", source: "أرقام", url: "https://www.argaam.com" }
];

  
