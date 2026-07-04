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
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [1498, 2006, 1650, 1612, 1720], // in Billions SAR
      netIncome: [412, 604, 454, 442, 468],
      assets: [1680, 1790, 1820, 1850, 1910],
      liabilities: [610, 580, 595, 612, 608],
      equity: [1070, 1210, 1225, 1238, 1302]
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
      quarters: ["الربع الأول 2025", "الربع الثاني 2025", "الربع الثالث 2025", "الربع الرابع 2025"],
      revenues: [410, 435, 428, 447], // in Billions SAR
      netIncome: [110, 120, 118, 120],
      eps: [0.44, 0.48, 0.47, 0.48]
    },
    news: [
      { id: 1, date: "قبل ساعة واحدة", titleAr: "أرامكو توقع اتفاقية شراكة استراتيجية لتوسعة وتطوير البنية التحتية للطاقة النظيفة", titleEn: "Aramco signs strategic partnership agreement to expand clean energy infrastructure", source: "تداول السعودية" },
      { id: 2, date: "قبل 3 ساعات", titleAr: "أرامكو السعودية تعلن عن توزيع الأرباح النقدية للمساهمين عن الربع الأول من عام 2026", titleEn: "Saudi Aramco announces cash dividend distribution for Q1 2026", source: "أرقام" },
      { id: 3, date: "قبل 6 ساعات", titleAr: "هيئة السوق المالية توافق على زيادة رأس مال شركات تابعة لأرامكو السعودية", titleEn: "CMA approves capital increase for Saudi Aramco subsidiaries", source: "هيئة السوق المالية" },
      { id: 4, date: "قبل يوم واحد", titleAr: "تقرير خاص: أثر ارتفاع أسعار النفط العالمية على ربحية أرامكو في النصف الأول", titleEn: "Special Report: Impact of global oil prices on Aramco's H1 profitability", source: "أرقام" }
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
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [25.7, 28.6, 31.2, 33.5, 36.8],
      netIncome: [14.7, 17.2, 16.6, 17.8, 19.5],
      assets: [624, 762, 808, 840, 885],
      liabilities: [550, 662, 701, 725, 760],
      equity: [74, 100, 107, 115, 125]
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
      quarters: ["الربع الأول 2025", "الربع الثاني 2025", "الربع الثالث 2025", "الربع الرابع 2025"],
      revenues: [8.8, 9.1, 9.3, 9.6],
      netIncome: [4.6, 4.8, 4.9, 5.2],
      eps: [0.98, 1.02, 1.04, 1.11]
    },
    news: [
      { id: 1, date: "قبل ساعتين", titleAr: "مصرف الراجحي يفتتح فرعاً رقمياً متكاملاً هو الأكبر في المنطقة الشرقية", titleEn: "Al Rajhi Bank opens its largest digital branch in the Eastern Province", source: "أرقام" },
      { id: 2, date: "قبل 4 ساعات", titleAr: "تحديث من هيئة السوق المالية بخصوص زيادة ملكية المؤسسات في مصرف الراجحي", titleEn: "CMA update on institutional ownership increase in Al Rajhi Bank", source: "هيئة السوق المالية" },
      { id: 3, date: "قبل يوم واحد", titleAr: "مصرف الراجحي يحصد جائزة أفضل مصرف في الخدمات المصرفية للأفراد بالمملكة", titleEn: "Al Rajhi Bank wins Best Retail Bank in Saudi Arabia award", source: "تداول السعودية" }
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
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [174.8, 198.5, 141.6, 138.4, 148.2],
      netIncome: [23.0, 16.5, -2.7, 8.5, 8.7],
      assets: [318, 312, 298, 290, 296],
      liabilities: [110, 105, 96, 88, 90],
      equity: [208, 207, 202, 202, 206]
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
      quarters: ["الربع الأول 2025", "الربع الثاني 2025", "الربع الثالث 2025", "الربع الرابع 2025"],
      revenues: [35.2, 37.1, 36.8, 39.1],
      netIncome: [1.8, 2.1, 2.3, 2.5],
      eps: [0.60, 0.70, 0.77, 0.83]
    },
    news: [
      { id: 1, date: "قبل 45 دقيقة", titleAr: "سابك تعلن عن إطلاق مشروع بولي إيثيلين منخفض الكثافة ومستدام محلياً", titleEn: "SABIC announces the launch of a sustainable low-density polyethylene project locally", source: "تداول السعودية" },
      { id: 2, date: "قبل 5 ساعات", titleAr: "دراسة أرقام: تحسن هوامش ربحية قطاع البتروكيماويات يمنح سابك دفعة تنافسية", titleEn: "Argaam study: Improved petrochemical margins give SABIC a competitive boost", source: "أرقام" },
      { id: 3, date: "قبل يومين", titleAr: "سابك تعين رئيساً تنفيذياً جديداً لشركة تابعة لها في أوروبا لتسريع إعادة الهيكلة", titleEn: "SABIC appoints new CEO for European subsidiary to accelerate restructuring", source: "أرقام" }
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
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [63.4, 67.4, 72.3, 75.1, 78.4],
      netIncome: [11.3, 12.2, 13.3, 13.0, 13.5],
      assets: [120, 135, 142, 148, 155],
      liabilities: [55, 62, 64, 66, 68],
      equity: [65, 73, 78, 82, 87]
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
      quarters: ["الربع الأول 2025", "الربع الثاني 2025", "الربع الثالث 2025", "الربع الرابع 2025"],
      revenues: [19.2, 19.6, 19.5, 20.1],
      netIncome: [3.3, 3.4, 3.3, 3.5],
      eps: [0.65, 0.67, 0.65, 0.68]
    },
    news: [
      { id: 1, date: "قبل 15 دقيقة", titleAr: "إس تي سي باي تعلن عن ترقية رخصتها المصرفية رسمياً لبدء عمليات البنك الرقمي", titleEn: "stc pay announces official upgrade of banking license to launch digital bank", source: "تداول السعودية" },
      { id: 2, date: "قبل 5 ساعات", titleAr: "اس تي سي توقع اتفاقية لتزويد مدينة نيوم بأحدث تقنيات الاتصال بالجيل الخامس المتقدم", titleEn: "stc signs agreement to provide NEOM with advanced 5G connectivity technology", source: "أرقام" },
      { id: 3, date: "قبل 12 ساعة", titleAr: "تداولات مطلع الأسبوع: سهم stc يستقطب سيولة قوية تدفعه لتجاوز مستوياته السابقة", titleEn: "Early week trading: stc stock attracts strong liquidity pushing it past former levels", source: "أرقام" }
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
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [28.2, 32.5, 34.1, 35.8, 38.2],
      netIncome: [12.7, 18.6, 20.0, 20.5, 21.2],
      assets: [914, 945, 1020, 1050, 1100],
      liabilities: [802, 820, 890, 915, 955],
      equity: [112, 125, 130, 135, 145]
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
      quarters: ["الربع الأول 2025", "الربع الثاني 2025", "الربع الثالث 2025", "الربع الرابع 2025"],
      revenues: [9.3, 9.5, 9.6, 9.8],
      netIncome: [5.0, 5.2, 5.3, 5.7],
      eps: [0.79, 0.82, 0.84, 0.90]
    },
    news: [
      { id: 1, date: "قبل ساعة", titleAr: "الأهلي السعودي يطلق برنامج تمويل عقاري تنافسي مخصص للمستفيدين من سكني", titleEn: "SNB launches competitive mortgage program for Sakani beneficiaries", source: "أرقام" },
      { id: 2, date: "قبل 8 ساعات", titleAr: "إعلان البنك الأهلي السعودي عن نتائج تصويت الجمعية العامة غير العادية وتوزيع الأرباح", titleEn: "SNB announces results of EGM voting and dividend distribution", source: "تداول السعودية" }
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
      quarters: ["الربع الأول 2025", "الربع الثاني 2025", "الربع الثالث 2025", "الربع الرابع 2025"],
      revenues: [1.6, 1.8, 1.9, 1.9],
      netIncome: [0.38, 0.45, 0.44, 0.48],
      eps: [0.49, 0.58, 0.56, 0.62]
    },
    news: [
      { id: 1, date: "قبل 30 دقيقة", titleAr: "أكوا باور تبدأ التشغيل التجاري لمشروع الطاقة الشمسية بقدرة 500 ميجاوات في دبي", titleEn: "ACWA Power starts commercial operations of a 500MW solar project in Dubai", source: "تداول السعودية" },
      { id: 2, date: "قبل ساعتين", titleAr: "أكوا باور توقع اتفاقية لشراء وتطوير محطات طاقة متجددة في آسيا بقيمة 2 مليار دولار", titleEn: "ACWA Power signs agreement to purchase and develop renewable plants in Asia worth $2B", source: "تداول السعودية" },
      { id: 3, date: "قبل 9 ساعات", titleAr: "تقرير تحليل فني لـ أرقام: سهم أكوا باور يخترق مستويات مقاومة هامة وسط تدفق استثماري أجنبي", titleEn: "Argaam Technical Report: ACWA Power stock breaks resistance levels amid foreign inflows", source: "أرقام" }
    ]
  }
};

const marketSummary = {
  tasi: {
    value: 11842.10,
    change: 45.30,
    changePercent: 0.38,
    status: "OPEN",
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
  { companyId: "2222", date: "منذ 10 دقائق", titleAr: "أرامكو تعلن عن شراكة هيدروجينية كبرى مع شركات يابانية وكورية", titleEn: "Aramco announces major hydrogen partnership with Japanese and Korean firms", source: "تداول السعودية" },
  { companyId: "1120", date: "منذ 25 دقيقة", titleAr: "الراجحي يطلق ميزة الاستثمار الفوري المدعوم بالذكاء الاصطناعي عبر تطبيقه", titleEn: "Al Rajhi launches AI-backed instant investment via its app", source: "أرقام" },
  { companyId: "2010", date: "منذ 40 دقيقة", titleAr: "سابك تعود للربحية القوية في تقرير الربع الأول وتتخطى تقديرات المحللين", titleEn: "SABIC returns to profitability in Q1 report, exceeding analyst estimates", source: "هيئة السوق المالية" },
  { companyId: "7010", date: "منذ 50 دقيقة", titleAr: "إس تي سي تختبر بنجاح أول شبكة اتصال فضائي مباشر للهواتف المحمولة في المملكة", titleEn: "stc successfully tests first direct satellite-to-mobile network in KSA", source: "أرقام" }
];
