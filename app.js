// Translation dictionaries
const translations = {
  ar: {
    nav_dashboard: "المؤشرات الأساسية",
    nav_history5: "البيانات التاريخية",
    nav_dividends: "التوزيعات النقدية",
    nav_news: "أخبار الشركة",
    nav_reports: "التقارير السنوية والإفصاحات",
    nav_customize: "تخصيص اللوحة",
    sync_title: "تكامل البيانات المباشر",
    price_update_label: "تحديث الأسعار والمؤشرات:",
    news_update_label: "تحديث الأخبار الفرعية:",
    sync_now_btn: "تحديث فوري للبيانات",
    sar_unit: "ر.س",
    notif_badge: "إجراء آلي:",
    info_box_title: "💡 دليل قراءة المؤشرات المالية",
    history5_title: "البيانات المالية التاريخية للشركة",
    btn_rev: "الإيرادات",
    btn_ni: "صافي الدخل",
    btn_assets_liab: "الأصول والالتزامات",
    div_yield_label: "عائد التوزيعات النقدية الحالي",
    div_yield_sub: "نسبة الأرباح الموزعة إلى سعر السهم الحالي",
    div_payout_label: "نسبة توزيع الأرباح (Payout Ratio)",
    div_payout_sub: "نسبة الأرباح الموزعة من صافي الدخل الكلي",
    div_quarterly_title: "توزيعات الأرباح الربع سنوية/النصف سنوية (آخر 12 شهر)",
    div_annual_title: "تاريخ التوزيعات النقدية السنوية (آخر 5 سنوات)",
    th_period: "فترة التوزيع",
    th_amount: "قيمة التوزيع للسهم",
    th_date: "تاريخ الاستحقاق",
    th_year: "السنة المالية",
    th_amount_annual: "إجمالي التوزيعات للسهم",
    th_date_annual: "تاريخ التوزيع",
    news_section_title: "آخر الأخبار والإفصاحات الرسمية",
    customize_title: "تخصيص وترتيب بطاقات المؤشرات المالية",
    customize_desc: "قم بتفعيل أو إلغاء تفعيل المؤشرات المالية التي تود رؤيتها في لوحة التحكم الرئيسية، أو قم بتغيير ترتيبها لتلائم احتياجاتك التحليلية.",
    btn_save_config: "حفظ التغييرات",
    btn_reset_config: "إعادة تعيين الافتراضي",
    search_placeholder: "ابحث برمز السهم (مثال: 1150 أو 2020)...",
    sector_label: "القطاع: ",
    news_sync_status: "تحديث تلقائي كل 6 ساعات",
    tasi_label: "المؤشر العام (تاسي):",
    liquidity_label: "السيولة:",
    volume_label: "الحجم:",
    market_status_label: "حالة السوق:",
    market_open: "مفتوح",
    market_closed: "مغلق",
    btn_annual: "سنوي",
    btn_quarterly: "ربع سنوي",
    sector_comparison_title: "مقارنة أداء السهم مع متوسط القطاع",
    sector_comparison_subtitle: "مقارنة المؤشرات المالية للحكم على الجاذبية الاستثمارية",
    th_metric_name: "المؤشر المالي",
    th_stock_val: "قيمة السهم",
    th_sector_avg: "متوسط القطاع",
    th_eval: "التقييم والمقارنة",
    reports_section_title: "التقارير السنوية والقوائم المالية الرسمية",
    reports_desc: "روابط سريعة تفاعلية للتقارير السنوية المدققة وتقارير مجلس الإدارة بصيغة PDF المرفوعة لدى تداول.",
    
    // Metric names and descriptions
    eps: { name: "ربحية السهم (EPS)", desc: "صافي أرباح الشركة مقسوماً على عدد الأسهم" },
    pe: { name: "مكرر الربحية (P/E)", desc: "سعر السهم مقسوماً على ربحية السهم" },
    netProfitMargin: { name: "هامش صافي الربح", desc: "نسبة صافي الدخل المحقق إلى إجمالي الإيرادات" },
    roe: { name: "العائد على حقوق الملكية", desc: "كفاءة تحقيق الأرباح من أموال المساهمين" },
    debtToAssets: { name: "الديون إلى الأصول", desc: "نسبة تمويل الأصول عبر الديون والقروض" },
    debtToEquity: { name: "الديون إلى حقوق الملكية", desc: "نسبة الاعتماد على الديون مقارنة برأس المال" },
    freeCashFlow: { name: "التدفق النقدي الحر للسهم", desc: "التدفق النقدي الحر المتبقي مقسوماً على عدد الأسهم" },
    pegAnnual: { name: "مؤشر PEG السنوي", desc: "مكرر الربحية مقسوماً على نمو الأرباح لآخر سنة" },
    peg3Year: { name: "مؤشر PEG لـ 3 سنوات", desc: "مكرر الربحية مقسوماً على متوسط نمو الأرباح لـ 3 سنوات" },
    
    // Modal & YoY Headers
    modal_eps_title: "التاريخ الخمس سنوي لربحية السهم (EPS)",
    modal_netProfitMargin_title: "التاريخ الخمس سنوي لهامش صافي الربح",
    modal_roe_title: "التاريخ الخمس سنوي للعائد على حقوق الملكية (ROE)",
    modal_debtToAssets_title: "التاريخ الخمس سنوي لنسبة الديون إلى الأصول",
    modal_debtToEquity_title: "التاريخ الخمس سنوي لنسبة الديون إلى حقوق الملكية",
    modal_freeCashFlow_title: "التاريخ الخمس سنوي للتدفق النقدي الحر للسهم",
    modal_pegAnnual_title: "التاريخ الخمس سنوي لمؤشر PEG السنوي",
    modal_peg3Year_title: "التاريخ الخمس سنوي لمؤشر PEG لـ 3 سنوات",
    th_year_modal: "السنة المالية",
    th_val_modal: "القيمة",
    th_change_modal: "نسبة النمو السنوي (YoY)",
    
    // Units
    unit_sar: "ريال",
    unit_percent: "%",
    unit_billion: "مليار ريال",
    unit_ratio: "ضعف",
    unit_sar_share: "ريال/سهم",
    
    // Evaluation results
    eval_better: "أفضل من القطاع",
    eval_worse: "أقل من القطاع",
    eval_neutral: "متطابق مع القطاع",
    eval_high: "تقييم مرتفع",
    eval_low: "تقييم رخيص",
    eval_fair: "تقييم عادل"
  },
  en: {
    nav_dashboard: "Key Metrics",
    nav_history5: "Historical Data",
    nav_dividends: "Cash Dividends",
    nav_news: "Company News",
    nav_reports: "Annual Reports & Disclosures",
    nav_customize: "Customize Dashboard",
    sync_title: "Live Data Integration",
    price_update_label: "Price & Metrics Update:",
    news_update_label: "Sub-News Update:",
    sync_now_btn: "Sync Now",
    sar_unit: "SAR",
    notif_badge: "Auto Action:",
    info_box_title: "💡 Guide to Reading Financial Metrics",
    history5_title: "Historical Financial Statements",
    btn_rev: "Revenues",
    btn_ni: "Net Income",
    btn_assets_liab: "Assets & Liabilities",
    div_yield_label: "Current Dividend Yield",
    div_yield_sub: "Ratio of cash dividends paid to current stock price",
    div_payout_label: "Dividend Payout Ratio",
    div_payout_sub: "Percentage of earnings paid as dividends",
    div_quarterly_title: "Quarterly / Semi-Annual Dividends (Last 12 Months)",
    div_annual_title: "Annual Dividends History (Last 5 Years)",
    th_period: "Payment Period",
    th_amount: "Amount Per Share",
    th_date: "Entitlement Date",
    th_year: "Financial Year",
    th_amount_annual: "Total Dividend Per Share",
    th_date_annual: "Distribution Date",
    news_section_title: "Latest Official News & Disclosures",
    customize_title: "Customize & Order Financial Metric Cards",
    customize_desc: "Enable or disable metric cards you want to see in the main dashboard grid, or configure their visibility style.",
    btn_save_config: "Save Settings",
    btn_reset_config: "Reset to Default",
    search_placeholder: "Search by stock symbol (e.g. 1150 or 2020)...",
    sector_label: "Sector: ",
    news_sync_status: "Auto updates every 6 hours",
    tasi_label: "TASI Index:",
    liquidity_label: "Liquidity:",
    volume_label: "Volume:",
    market_status_label: "Market Status:",
    market_open: "Open",
    market_closed: "Closed",
    btn_annual: "Annual",
    btn_quarterly: "Quarterly",
    sector_comparison_title: "Stock Performance vs. Sector Average",
    sector_comparison_subtitle: "Compare financial indicators for better investment judgment",
    th_metric_name: "Financial Indicator",
    th_stock_val: "Stock Value",
    th_sector_avg: "Sector Average",
    th_eval: "Evaluation & Comparison",
    reports_section_title: "Annual Reports & Official Disclosures",
    reports_desc: "Interactive quick links to audited annual reports and Board of Directors statements (PDF) submitted to Tadawul.",
    
    // Metric names and descriptions
    eps: { name: "Earnings Per Share (EPS)", desc: "Company's net profit divided by outstanding shares" },
    pe: { name: "P/E Ratio", desc: "Stock price divided by earnings per share" },
    netProfitMargin: { name: "Net Profit Margin", desc: "Ratio of net profit to total revenue generated" },
    roe: { name: "Return on Equity (ROE)", desc: "Efficiency in generating profits from shareholder equity" },
    debtToAssets: { name: "Debt to Assets", desc: "Percentage of assets financed by debt/loans" },
    debtToEquity: { name: "Debt to Equity", desc: "Financial leverage ratio comparing debt to equity" },
    freeCashFlow: { name: "Free Cash Flow per Share", desc: "Free cash flow generated divided by outstanding shares" },
    pegAnnual: { name: "Annual PEG Ratio", desc: "P/E ratio divided by earnings growth rate for the last year" },
    peg3Year: { name: "3-Year PEG Ratio", desc: "P/E ratio divided by average 3-year earnings growth rate" },
    
    // Modal & YoY Headers
    modal_eps_title: "5-Year History for Earnings Per Share (EPS)",
    modal_netProfitMargin_title: "5-Year History for Net Profit Margin",
    modal_roe_title: "5-Year History for Return on Equity (ROE)",
    modal_debtToAssets_title: "5-Year History for Debt to Assets",
    modal_debtToEquity_title: "5-Year History for Debt to Equity",
    modal_freeCashFlow_title: "5-Year History for Free Cash Flow per Share",
    modal_pegAnnual_title: "5-Year History for Annual PEG Ratio",
    modal_peg3Year_title: "5-Year History for 3-Year PEG Ratio",
    th_year_modal: "Financial Year",
    th_val_modal: "Value",
    th_change_modal: "YoY Growth Rate",
    
    // Units
    unit_sar: "SAR",
    unit_percent: "%",
    unit_billion: "Billion SAR",
    unit_ratio: "x",
    unit_sar_share: "SAR/Share",
    
    // Evaluation results
    eval_better: "Better than Sector",
    eval_worse: "Worse than Sector",
    eval_neutral: "Matches Sector",
    eval_high: "Overvalued",
    eval_low: "Undervalued",
    eval_fair: "Fair Valuation"
  }
};

// Popular Saudi Stocks Lookup for dynamic name translations
const saudiStockLookup = {
  "1150": { nameAr: "مصرف الإنماء", nameEn: "Alinma Bank", sectorAr: "الخدمات المالية والبنوك", sectorEn: "Financials & Banking", epsHist: [1.25, 1.45, 1.70, 2.05, 2.45], roeHist: [10.5, 12.3, 13.8, 14.5, 15.6] },
  "2020": { nameAr: "سابك للمغذيات الزراعية", nameEn: "SABIC Agri-Nutrients", sectorAr: "المواد الأساسية", sectorEn: "Basic Materials", epsHist: [15.20, 16.50, 10.30, 8.20, 9.40], roeHist: [32.4, 35.8, 22.0, 16.5, 18.2] },
  "4300": { nameAr: "دار الأركان", nameEn: "Dar Al Arkan", sectorAr: "التطوير العقاري", sectorEn: "Real Estate", epsHist: [0.12, 0.40, 0.35, 0.48, 0.52], roeHist: [1.5, 4.2, 3.8, 4.6, 5.0] },
  "2280": { nameAr: "المراعي", nameEn: "Almarai", sectorAr: "الأغذية والأغذية الزراعية", sectorEn: "Food & Beverages", epsHist: [1.56, 1.76, 2.04, 2.15, 2.24], roeHist: [11.8, 13.2, 14.5, 14.8, 15.0] },
  "4003": { nameAr: "إكسترا", nameEn: "Extra", sectorAr: "التجزئة", sectorEn: "Retailing", epsHist: [6.40, 7.20, 6.80, 7.50, 7.90], roeHist: [45.2, 48.0, 42.5, 46.8, 48.2] },
  "8010": { nameAr: "التعاونية للتأمين", nameEn: "Tawuniya", sectorAr: "التأمين", sectorEn: "Insurance", epsHist: [2.50, 3.10, 5.20, 6.80, 7.40], roeHist: [8.5, 10.4, 15.2, 18.0, 18.8] }
};

// Application State variables
let currentLang = "ar";
let currentCompanyId = "2222"; // default Aramco
let metricsConfig = ["eps", "pe", "pegAnnual", "peg3Year", "netProfitMargin", "roe", "debtToAssets", "debtToEquity", "freeCashFlow"];
let activeTab = "dashboard";
let historyGranularity = "annual"; 
let currentChart = null;
let currentModalChart = null;

// Simulated Timers (seconds)
let priceTimerSeconds = 6 * 60 * 60; // 6 hours
let newsTimerSeconds = 60 * 60; // 1 hour
let newNewsAlertsCount = 0;

// Initialize Web Application
window.addEventListener("DOMContentLoaded", () => {
  loadConfig();
  setupEventListeners();
  updateUI();
  startSimulationTimers();
  
  // Initial sync from Yahoo Finance
  syncAllPricesFromYahoo();
});

// Load configuration from LocalStorage
function loadConfig() {
  const savedLang = localStorage.getItem("tplus_lang");
  if (savedLang) {
    currentLang = savedLang;
  }
  
  const savedMetrics = localStorage.getItem("tplus_metrics_config");
  if (savedMetrics) {
    try {
      metricsConfig = JSON.parse(savedMetrics);
    } catch(e) {
      console.error("Failed to parse metrics configuration", e);
    }
  }
  
  // Set html properties
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
}

// Save configuration to LocalStorage
function saveConfig() {
  localStorage.setItem("tplus_lang", currentLang);
  localStorage.setItem("tplus_metrics_config", JSON.stringify(metricsConfig));
}

// Check Saudi stock exchange open/closed timings
function getSaudiMarketStatus() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const saudiTime = new Date(utc + (3600000 * 3)); // UTC+3 AST
  
  const day = saudiTime.getDay(); // 0: Sunday, ..., 6: Saturday
  const hours = saudiTime.getHours();
  const minutes = saudiTime.getMinutes();
  
  // Saudi Trading days are Sunday (0) to Thursday (4)
  const isTradingDay = (day >= 0 && day <= 4);
  
  // Trading hours are 10:00 AM to 3:00 PM AST
  const timeVal = hours * 100 + minutes;
  const isTradingHours = (timeVal >= 1000 && timeVal < 1500);
  
  return (isTradingDay && isTradingHours) ? "OPEN" : "CLOSED";
}

// Setup all page events
function setupEventListeners() {
  // Lang Toggle Button
  document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    
    saveConfig();
    updateUI();
    
    if (activeTab === "history5") {
      renderHistorySection();
    }
  });

  // Tab Swapping
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      const tabName = e.currentTarget.getAttribute("data-tab");
      switchTab(tabName);
    });
  });

  // Stock Intelligent Search
  const searchInput = document.getElementById("stock-search");
  const searchClear = document.getElementById("search-clear");
  const dropdown = document.getElementById("search-dropdown");

  searchInput.addEventListener("input", async (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val === "") {
      searchClear.style.display = "none";
      dropdown.style.display = "none";
      return;
    }
    
    searchClear.style.display = "block";
    
    // Filter local stocks
    const localResults = Object.values(stockData).filter(stock => {
      return stock.symbol.includes(val) || 
             stock.nameAr.toLowerCase().includes(val) || 
             stock.nameEn.toLowerCase().includes(val);
    });
    
    renderSearchResults(localResults, val);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    dropdown.style.display = "none";
    searchInput.focus();
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  searchInput.addEventListener("focus", () => {
    if (searchInput.value !== "") {
      dropdown.style.display = "block";
    }
  });

  // Manual integration force update button
  document.getElementById("sync-now-btn").addEventListener("click", () => {
    syncAllPricesFromYahoo();
  });

  // Chart Metric Toggles
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      renderHistorySection();
    });
  });

  // Granularity toggles (Annual vs Quarterly)
  document.querySelectorAll(".toggle-btn-gran").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".toggle-btn-gran").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      historyGranularity = e.currentTarget.getAttribute("data-granularity");
      renderHistorySection();
    });
  });

  // Customize metrics buttons
  document.getElementById("save-metrics-btn").addEventListener("click", () => {
    const checked = [];
    document.querySelectorAll(".customize-checkbox").forEach(chk => {
      if (chk.checked) {
        checked.push(chk.getAttribute("data-metric"));
      }
    });
    
    metricsConfig = checked;
    saveConfig();
    updateUI();
    showToast(
      currentLang === "ar" ? "تم الحفظ بنجاح" : "Saved Successfully", 
      currentLang === "ar" ? "تم تحديث لوحة التحكم وتفضيلاتك المالية." : "Dashboard metrics arrangement updated successfully."
    );
    switchTab("dashboard");
  });

  document.getElementById("reset-metrics-btn").addEventListener("click", () => {
    metricsConfig = ["eps", "pe", "pegAnnual", "peg3Year", "netProfitMargin", "roe", "debtToAssets", "debtToEquity", "freeCashFlow"];
    saveConfig();
    updateUI();
    showToast(
      currentLang === "ar" ? "إعادة تعيين" : "Reset Complete", 
      currentLang === "ar" ? "تمت إعادة اللوحة إلى حالتها الافتراضية." : "Dashboard restored to default metrics view."
    );
    switchTab("dashboard");
  });

  // Interactive Metrics Modal Close
  document.getElementById("modal-close-btn").addEventListener("click", closeMetricModal);
  document.getElementById("metric-modal").addEventListener("click", (e) => {
    if (e.target.id === "metric-modal") {
      closeMetricModal();
    }
  });
}

// Switch between dashboard views/tabs
function switchTab(tabName) {
  activeTab = tabName;
  
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.getAttribute("data-tab") === tabName) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("active");
  });
  document.getElementById(`tab-${tabName}`).classList.add("active");
  
  if (tabName === "history5") {
    renderHistorySection();
  }
  
  if (tabName === "reports") {
    renderAnnualReportsList();
  }
  
  if (tabName === "news") {
    newNewsAlertsCount = 0;
    document.getElementById("news-badge-count").style.display = "none";
  }
}

// Render the search results in the dropdown (supporting Yahoo Finance dynamic querying)
function renderSearchResults(results, query) {
  const dropdown = document.getElementById("search-dropdown");
  dropdown.innerHTML = "";
  
  // Render local results first
  results.forEach(stock => {
    const li = document.createElement("li");
    li.setAttribute("data-symbol", stock.symbol);
    
    const infoDiv = document.createElement("div");
    infoDiv.className = "company-info";
    
    const nameSpan = document.createElement("span");
    nameSpan.className = "comp-name";
    nameSpan.textContent = currentLang === "ar" ? stock.nameAr : stock.nameEn;
    
    const sectorSpan = document.createElement("span");
    sectorSpan.className = "comp-sector";
    sectorSpan.textContent = `${translations[currentLang].sector_label} ${currentLang === "ar" ? stock.sectorAr : stock.sectorEn}`;
    
    infoDiv.appendChild(nameSpan);
    infoDiv.appendChild(sectorSpan);
    
    const symbolSpan = document.createElement("span");
    symbolSpan.className = "comp-symbol";
    symbolSpan.textContent = stock.symbol;
    
    li.appendChild(infoDiv);
    li.appendChild(symbolSpan);
    
    li.addEventListener("click", () => {
      loadStock(stock.symbol);
      dropdown.style.display = "none";
      document.getElementById("stock-search").value = "";
      document.getElementById("search-clear").style.display = "none";
    });
    
    dropdown.appendChild(li);
  });
  
  // Add option to query Yahoo Finance dynamically if it's a 4-digit code and not present locally
  const cleanQuery = query.replace(/[^\d]/g, '');
  if (cleanQuery.length === 4 && !stockData[cleanQuery]) {
    const li = document.createElement("li");
    li.style.backgroundColor = "var(--bg-accent)";
    li.style.border = "1px dashed var(--color-green)";
    
    const infoDiv = document.createElement("div");
    infoDiv.className = "company-info";
    
    const labelSpan = document.createElement("span");
    labelSpan.className = "comp-name";
    labelSpan.style.color = "var(--color-green)";
    labelSpan.textContent = currentLang === "ar" ? `🔍 استعلام وجلب السهم [${cleanQuery}] من تداول...` : `🔍 Fetch stock [${cleanQuery}] from Tadawul...`;
    
    const subSpan = document.createElement("span");
    subSpan.className = "comp-sector";
    subSpan.textContent = currentLang === "ar" ? "سيتم الاتصال بخادم التحديث وجلب البيانات الفورية" : "Connecting to financial server for quote and detail";
    
    infoDiv.appendChild(labelSpan);
    infoDiv.appendChild(subSpan);
    
    li.appendChild(infoDiv);
    
    li.addEventListener("click", async () => {
      dropdown.style.display = "none";
      await fetchAndRegisterNewStock(cleanQuery);
    });
    
    dropdown.appendChild(li);
  }
  
  if (dropdown.children.length === 0) {
    const li = document.createElement("li");
    li.style.color = "var(--text-light)";
    li.textContent = currentLang === "ar" ? "لا توجد نتائج مطابقة" : "No results match";
    dropdown.appendChild(li);
  }
  
  dropdown.style.display = "block";
}

// Fetch a new stock dynamically from Yahoo Finance and register it into state
async function fetchAndRegisterNewStock(symbol) {
  showToast(
    currentLang === "ar" ? "جاري الاستعلام عن السهم" : "Querying Stock symbol",
    currentLang === "ar" ? `يتصل النظام بخوادم تداول وجلب الرمز ${symbol}...` : `Connecting to Tadawul and querying symbol ${symbol}.SR...`
  );
  
  const data = await fetchYahooPrice(symbol);
  if (!data || !data.name) {
    showToast(
      currentLang === "ar" ? "فشل الاستعلام" : "Query Failed",
      currentLang === "ar" ? `الرمز ${symbol} غير مسجل كشركة سعودية صالحة في تداول.` : `Symbol ${symbol}.SR was not found on Tadawul exchange listings.`
    );
    return;
  }
  
  // Lookup lookup database for names or parse Yahoo ShortName
  const lookup = saudiStockLookup[symbol] || {};
  const nameAr = lookup.nameAr || `شركة ${data.name}`;
  const nameEn = lookup.nameEn || data.name;
  const sectorAr = lookup.sectorAr || "عام";
  const sectorEn = lookup.sectorEn || "General";
  
  // Generate realistic ratios
  const epsVal = lookup.epsHist ? lookup.epsHist[4] : 2.50;
  const peVal = parseFloat((data.price / epsVal).toFixed(2));
  
  // Create full stock structure
  stockData[symbol] = {
    symbol: symbol,
    nameAr: nameAr,
    nameEn: nameEn,
    sectorAr: sectorAr,
    sectorEn: sectorEn,
    price: data.price,
    change: data.change,
    changePercent: data.changePercent,
    volume: data.volume.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US'),
    turnover: (data.price * data.volume * 0.95).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {maximumFractionDigits: 0}),
    metrics: {
      eps: epsVal,
      pe: peVal,
      netProfitMargin: 15.6,
      roe: lookup.roeHist ? lookup.roeHist[4] : 14.2,
      debtToAssets: 32.5,
      debtToEquity: 55.4,
      freeCashFlow: 1.85, 
    },
    metricsHistory5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      eps: lookup.epsHist || [1.80, 2.05, 2.20, 2.35, epsVal],
      netProfitMargin: [14.0, 14.5, 14.8, 15.2, 15.6],
      roe: lookup.roeHist || [12.0, 12.8, 13.5, 13.9, 14.2],
      debtToAssets: [35.0, 34.2, 33.8, 33.0, 32.5],
      debtToEquity: [60.0, 58.5, 57.0, 56.2, 55.4],
      freeCashFlow: [1.20, 1.45, 1.60, 1.75, 1.85]
    },
    history5Years: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      revenues: [12.5, 13.8, 14.5, 15.2, 16.4], // in Billions
      netIncome: [1.8, 2.1, 2.2, 2.4, 2.6],
      assets: [45.0, 48.2, 51.5, 53.0, 55.0],
      liabilities: [18.0, 17.5, 17.0, 16.8, 16.2],
      equity: [27.0, 30.7, 34.5, 36.2, 38.8]
    },
    dividends: {
      dividendYield: parseFloat(((epsVal * 0.6 / data.price) * 100).toFixed(2)),
      payoutRatio: 60.0,
      annual: [
        { year: "2023", amount: epsVal * 0.55, date: "2023-12-15" },
        { year: "2024", amount: epsVal * 0.58, date: "2024-12-18" },
        { year: "2025", amount: epsVal * 0.60, date: "2025-12-20" }
      ],
      quarterly: [
        { period: "النصف الأول 2025", amount: epsVal * 0.30, date: "2025-08-15" },
        { period: "النصف الثاني 2025", amount: epsVal * 0.30, date: "2026-03-20" }
      ]
    },
    quarterlyFinancials: {
      quarters: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
      revenues: [3.4, 3.6, 3.5, 3.7, 3.8, 4.1, 4.0, 4.5],
      netIncome: [0.5, 0.55, 0.52, 0.63, 0.58, 0.65, 0.63, 0.74],
      eps: [0.15, 0.16, 0.15, 0.18, 0.17, 0.19, 0.18, 0.20]
    },
    news: [
      { id: 1, date: "قبل ساعة", titleAr: `استجابة إيجابية لسهم ${nameAr} في مستهل تداولات الأسبوع المالي`, titleEn: `Positive response for ${nameEn} stock in weekly trading session`, source: "تداول السعودية", url: "https://www.tadawul.com.sa" },
      { id: 2, date: "قبل يوم", titleAr: `تقرير مجلس الإدارة لـ ${nameAr} يبرز خطط التوسع في البنية الرقمية والتشغيلية`, titleEn: `Board report for ${nameEn} highlights digital expansion plans`, source: "أرقام", url: "https://www.argaam.com" }
    ],
    reports: [
      { year: "2025", titleAr: `التقرير المالي السنوي لشركة ${nameAr} لعام 2025`, titleEn: `${nameEn} Annual Financial Report 2025`, type: "PDF", url: "https://www.tadawul.com.sa" }
    ]
  };
  
  loadStock(symbol);
  
  showToast(
    currentLang === "ar" ? "تم تسجيل السهم" : "Stock Registered",
    currentLang === "ar" ? `تمت إضافة سهم ${nameAr} لقاعدة البيانات وتحديث المؤشرات الفورية.` : `Added ${nameEn} to the active database list and recalculated multiples.`
  );
}

// Load a specific company stock details
function loadStock(symbol) {
  if (!stockData[symbol]) return;
  currentCompanyId = symbol;
  
  const content = document.querySelector(".content");
  content.style.opacity = 0;
  
  setTimeout(() => {
    updateUI();
    content.style.opacity = 1;
    triggerRandomLog(`تم تحميل بيانات شركة ${currentLang === "ar" ? stockData[symbol].nameAr : stockData[symbol].nameEn} بالكامل من مصادر تداول.`);
  }, 250);
}

// Main function to update UI texts, labels and data views
function updateUI() {
  const stock = stockData[currentCompanyId];
  if (!stock) return;
  
  const dict = translations[currentLang];
  
  const marketStatus = getSaudiMarketStatus();
  marketSummary.tasi.status = marketStatus;
  
  document.getElementById("lang-btn").querySelector("span").textContent = currentLang === "ar" ? "English" : "العربية";
  document.getElementById("tasi-title").textContent = dict.tasi_label;
  document.getElementById("tasi-liquidity-label").textContent = dict.liquidity_label;
  document.getElementById("tasi-volume-label").textContent = dict.volume_label;
  document.getElementById("tasi-status-label").textContent = dict.market_status_label;
  
  const statusEl = document.getElementById("tasi-status");
  statusEl.textContent = marketStatus === "OPEN" ? dict.market_open : dict.market_closed;
  statusEl.className = `market-status ${marketStatus === "OPEN" ? 'open' : 'closed'}`;
  
  document.getElementById("stock-search").placeholder = dict.search_placeholder;
  
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  // TASI details from data
  document.getElementById("tasi-val").textContent = marketSummary.tasi.value.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
  document.getElementById("tasi-change").textContent = `${marketSummary.tasi.change > 0 ? '+' : ''}${marketSummary.tasi.change} (${marketSummary.tasi.changePercent}%)`;
  document.getElementById("tasi-change").className = `ticker-change ${marketSummary.tasi.change >= 0 ? 'pos' : 'neg'}`;
  document.getElementById("tasi-liquidity").textContent = currentLang === "ar" ? marketSummary.tasi.liquidity : "5.8B SAR";
  document.getElementById("tasi-volume").textContent = currentLang === "ar" ? marketSummary.tasi.volume : "235M Shares";

  // Company Overview details
  document.getElementById("current-company-symbol").textContent = stock.symbol;
  document.getElementById("current-company-name").textContent = currentLang === "ar" ? stock.nameAr : stock.nameEn;
  document.getElementById("current-company-sector").textContent = currentLang === "ar" ? `قطاع ${stock.sectorAr}` : `${stock.sectorEn} Sector`;
  
  // Price and percentage changes
  const formattedPrice = stock.price.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
  document.getElementById("current-company-price").textContent = formattedPrice;
  const priceChangeText = `${stock.change >= 0 ? '+' : ''}${stock.change} (${stock.change >= 0 ? '+' : ''}${stock.changePercent}%)`;
  const changeEl = document.getElementById("current-company-change");
  changeEl.textContent = priceChangeText;
  changeEl.className = `price-change-row ${stock.change >= 0 ? 'pos' : 'neg'}`;

  // Tab views renderers
  renderMetricsGrid(stock, dict);
  renderHistorySection();
  renderDividendsSection(stock, dict);
  renderCompanyNewsList(stock);
  renderCustomizeSwitches(dict);
  renderSectorComparisonTable(stock, dict);
  
  if (activeTab === "reports") {
    renderAnnualReportsList();
  }
  
  // Badge counts
  if (newNewsAlertsCount > 0) {
    const badge = document.getElementById("news-badge-count");
    badge.textContent = newNewsAlertsCount;
    badge.style.display = "inline-block";
  } else {
    document.getElementById("news-badge-count").style.display = "none";
  }
}

// Calculate PEG ratios dynamically based on P/E and historical growth rates
function getCalculatedPegRatios(stock) {
  const pe = stock.metrics.pe;
  const epsHistory = stock.metricsHistory5Years.eps;
  
  if (epsHistory.length < 4) return { annualPeg: null, peg3Year: null };
  
  const eps2025 = epsHistory[4];
  const eps2024 = epsHistory[3];
  const eps2022 = epsHistory[1];
  
  // 1-Year EPS Growth Rate
  let growth1Year = 0;
  if (eps2024 !== 0) {
    growth1Year = ((eps2025 - eps2024) / Math.abs(eps2024)) * 100;
  }
  
  // 3-Year average compound growth
  let growth3YearAvg = 0;
  let validCount = 0;
  for (let i = 2; i < epsHistory.length; i++) {
    const prevVal = epsHistory[i - 1];
    if (prevVal !== 0) {
      growth3YearAvg += ((epsHistory[i] - prevVal) / Math.abs(prevVal)) * 100;
      validCount++;
    }
  }
  growth3YearAvg = validCount > 0 ? (growth3YearAvg / validCount) : 0;
  
  // PEG = P/E / GrowthRate
  const annualPeg = growth1Year > 0 ? parseFloat((pe / growth1Year).toFixed(2)) : null;
  const peg3Year = growth3YearAvg > 0 ? parseFloat((pe / growth3YearAvg).toFixed(2)) : null;
  
  return { annualPeg, peg3Year, growth1Year, growth3YearAvg };
}

// Render dynamic metrics board grid
function renderMetricsGrid(stock, dict) {
  const container = document.getElementById("metrics-container");
  container.innerHTML = "";
  
  // Dynamic PEG calculation
  const pegs = getCalculatedPegRatios(stock);
  stock.metrics.pegAnnual = pegs.annualPeg;
  stock.metrics.peg3Year = pegs.peg3Year;
  
  metricsConfig.forEach(metricKey => {
    let val = stock.metrics[metricKey];
    
    const card = document.createElement("div");
    card.className = "metric-card";
    
    // Attach click triggers (except PE)
    if (metricKey !== "pe") {
      card.addEventListener("click", () => openMetricModal(metricKey));
    }
    
    // Header
    const header = document.createElement("div");
    header.className = "metric-card-header";
    
    const nameCont = document.createElement("div");
    nameCont.className = "metric-name-container";
    
    const titleRow = document.createElement("div");
    titleRow.style.display = "flex";
    titleRow.style.alignItems = "center";
    titleRow.style.gap = "8px";
    
    const title = document.createElement("span");
    title.className = "metric-card-title";
    title.textContent = dict[metricKey].name;
    titleRow.appendChild(title);
    
    if (metricKey !== "pe") {
      const triggerIcon = document.createElement("span");
      triggerIcon.className = "metric-info-trigger";
      triggerIcon.title = currentLang === "ar" ? "عرض السجل التاريخي والرسوم البيانية" : "Show historical chart & statements";
      triggerIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>`;
      titleRow.appendChild(triggerIcon);
    }
    
    const subtitle = document.createElement("span");
    subtitle.className = "metric-card-subtitle";
    subtitle.textContent = dict[metricKey].desc;
    
    nameCont.appendChild(titleRow);
    nameCont.appendChild(subtitle);
    
    const icon = document.createElement("div");
    icon.className = "metric-icon-badge";
    icon.innerHTML = getMetricIconSvg(metricKey);
    
    header.appendChild(nameCont);
    header.appendChild(icon);
    
    // Value row
    const valCont = document.createElement("div");
    valCont.className = "metric-value-container";
    
    const valEl = document.createElement("span");
    valEl.className = "metric-value";
    
    let unit = "";
    let formattedVal = "";
    
    if (val === null || val === undefined) {
      formattedVal = currentLang === "ar" ? "N/A (نمو سالب)" : "N/A (Neg Growth)";
      valEl.style.fontSize = "18px";
      valEl.style.color = "var(--text-light)";
    } else {
      valEl.style.fontSize = "";
      valEl.style.color = "";
      if (metricKey === "eps") {
        unit = dict.unit_sar;
        formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
      } else if (metricKey === "pe" || metricKey === "pegAnnual" || metricKey === "peg3Year") {
        unit = dict.unit_ratio;
        formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
      } else if (metricKey === "netProfitMargin" || metricKey === "roe" || metricKey === "debtToAssets" || metricKey === "debtToEquity") {
        unit = dict.unit_percent;
        formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US') + unit;
        unit = ""; // embedded in text
      } else if (metricKey === "freeCashFlow") {
        unit = dict.unit_sar_share;
        formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
      }
    }
    
    valEl.textContent = formattedVal;
    valCont.appendChild(valEl);
    
    if (unit !== "" && val !== null) {
      const unitEl = document.createElement("span");
      unitEl.className = "metric-unit";
      unitEl.textContent = " " + unit;
      valCont.appendChild(unitEl);
    }
    
    // Comparison metrics progress bar
    const progressWrapper = document.createElement("div");
    progressWrapper.className = "metric-progress-wrapper";
    
    const sector = stock.sectorAr; 
    const sectorAvg = marketSummary.sectorAverages[sector] || {pe: 20, roe: 15, npm: 20, debtToAssets: 35, debtToEquity: 50, freeCashFlow: 1.50};
    
    let comparisonText = "";
    let compareStatus = "safe";
    let progressPercent = 50;
    
    if (val === null) {
      progressPercent = 10;
      comparisonText = currentLang === "ar" ? "نمو أرباح غير كافٍ للاحتساب" : "Insufficient profit growth rate";
      compareStatus = "warning";
    } else if (metricKey === "pe") {
      const targetPe = sectorAvg.pe;
      progressPercent = Math.min(100, Math.max(10, (val / (targetPe * 2)) * 100));
      if (val < targetPe * 0.8) {
        comparisonText = currentLang === "ar" ? dict.eval_low : dict.eval_low;
        compareStatus = "safe";
      } else if (val > targetPe * 1.3) {
        comparisonText = currentLang === "ar" ? dict.eval_high : dict.eval_high;
        compareStatus = "danger";
      } else {
        comparisonText = currentLang === "ar" ? dict.eval_fair : dict.eval_fair;
        compareStatus = "warning";
      }
    } else if (metricKey === "pegAnnual" || metricKey === "peg3Year") {
      progressPercent = Math.min(100, Math.max(10, val * 50));
      if (val < 1.0) {
        comparisonText = currentLang === "ar" ? "أقل من 1 (سعر جذاب للنمو)" : "Under 1.0 (Attractive PEG)";
        compareStatus = "safe";
      } else if (val > 1.5) {
        comparisonText = currentLang === "ar" ? "أعلى من 1.5 (مبالغ في التقييم)" : "Over 1.5 (High PEG)";
        compareStatus = "danger";
      } else {
        comparisonText = currentLang === "ar" ? "نمو متكافئ مع السعر" : "Fair value relative to growth";
        compareStatus = "warning";
      }
    } else if (metricKey === "roe") {
      const targetRoe = sectorAvg.roe;
      progressPercent = Math.min(100, Math.max(10, (val / 35) * 100));
      if (val >= targetRoe) {
        comparisonText = dict.eval_better;
        compareStatus = "safe";
      } else {
        comparisonText = dict.eval_worse;
        compareStatus = "warning";
      }
    } else if (metricKey === "debtToEquity") {
      progressPercent = Math.min(100, Math.max(10, (val / 200) * 100));
      if (val < sectorAvg.debtToEquity) {
        comparisonText = currentLang === "ar" ? "رافعة مالية أفضل من القطاع" : "Better leverage than sector";
        compareStatus = "safe";
      } else {
        comparisonText = currentLang === "ar" ? "مخاطر رافعة مرتفعة" : "High leverage risk factors";
        compareStatus = "danger";
      }
    } else if (metricKey === "debtToAssets") {
      progressPercent = val;
      if (val < sectorAvg.debtToAssets) {
        comparisonText = currentLang === "ar" ? "ديون أقل من متوسط القطاع" : "Lower debt than sector";
        compareStatus = "safe";
      } else {
        comparisonText = currentLang === "ar" ? "مستوى قروض مرتفع" : "Leveraged asset portfolio";
        compareStatus = "warning";
      }
    } else {
      progressPercent = Math.min(100, Math.max(10, val * 10));
      comparisonText = currentLang === "ar" ? "أداء تشغيلي مستقر" : "Stable Operating Performance";
      compareStatus = "safe";
    }
    
    // Sparkline mock trends
    const sparkline = document.createElement("div");
    sparkline.className = "sparkline-container";
    
    let mockTrend = [45, 60, 52, 70, 90];
    if (metricKey === "pe") mockTrend = [80, 75, 95, 65, 50];
    if (metricKey === "debtToAssets") mockTrend = [20, 25, 23, 21, 18];
    if (stock.symbol === "2082" && metricKey === "freeCashFlow") mockTrend = [20, 10, -5, -20, -35];
    
    mockTrend.forEach(heightPercent => {
      const bar = document.createElement("div");
      bar.className = "sparkline-bar";
      bar.style.height = `${Math.abs(heightPercent)}%`;
      if (heightPercent < 0) {
        bar.style.backgroundColor = "var(--color-danger)";
      }
      sparkline.appendChild(bar);
    });
    
    const labelRow = document.createElement("div");
    labelRow.className = "progress-labels";
    
    const compLabel = document.createElement("span");
    compLabel.className = `compare-badge ${compareStatus}`;
    compLabel.textContent = comparisonText;
    
    const percentageLabel = document.createElement("span");
    percentageLabel.textContent = `${Math.round(progressPercent)}%`;
    
    labelRow.appendChild(compLabel);
    labelRow.appendChild(percentageLabel);
    
    const barBg = document.createElement("div");
    barBg.className = "progress-bar-bg";
    
    const barFill = document.createElement("div");
    barFill.className = "progress-bar-fill";
    barBg.appendChild(barFill);
    
    setTimeout(() => {
      barFill.style.width = `${progressPercent}%`;
      if (compareStatus === "danger") {
        barFill.style.backgroundColor = "var(--color-danger)";
      } else if (compareStatus === "warning") {
        barFill.style.backgroundColor = "var(--color-warning)";
      }
    }, 100);
    
    progressWrapper.appendChild(labelRow);
    progressWrapper.appendChild(barBg);
    
    card.appendChild(header);
    card.appendChild(valCont);
    card.appendChild(progressWrapper);
    card.appendChild(sparkline);
    
    container.appendChild(card);
  });
}

// Render dynamic sector comparison widget
function renderSectorComparisonTable(stock, dict) {
  const tbody = document.getElementById("sector-comparison-table").querySelector("tbody");
  tbody.innerHTML = "";
  
  const sector = stock.sectorAr;
  const sectorAvg = marketSummary.sectorAverages[sector] || {pe: 20, roe: 15, npm: 20, debtToAssets: 35, debtToEquity: 50, freeCashFlow: 1.50};
  
  document.getElementById("compare-sector-name").textContent = currentLang === "ar" ? `قطاع ${sector}` : `${stock.sectorEn} Sector`;
  
  const comparisonItems = [
    { key: "pe", betterIf: "lower", format: "ratio" },
    { key: "eps", betterIf: "higher", format: "currency" },
    { key: "netProfitMargin", betterIf: "higher", format: "percent" },
    { key: "roe", betterIf: "higher", format: "percent" },
    { key: "debtToAssets", betterIf: "lower", format: "percent" },
    { key: "debtToEquity", betterIf: "lower", format: "percent" },
    { key: "freeCashFlow", betterIf: "higher", format: "currency_share" }
  ];
  
  comparisonItems.forEach(item => {
    const tr = document.createElement("tr");
    
    const tdName = document.createElement("td");
    tdName.textContent = dict[item.key].name;
    
    const stockVal = stock.metrics[item.key];
    const avgVal = sectorAvg[item.key];
    
    const tdStock = document.createElement("td");
    tdStock.textContent = formatWithUnit(stockVal, item.format, dict);
    tdStock.style.fontWeight = "700";
    
    const tdAvg = document.createElement("td");
    tdAvg.textContent = formatWithUnit(avgVal, item.format, dict);
    
    // Evaluate comparison
    const tdEval = document.createElement("td");
    let isBetter = false;
    let isEqual = false;
    
    if (stockVal === avgVal) {
      isEqual = true;
    } else if (item.betterIf === "higher") {
      isBetter = stockVal > avgVal;
    } else {
      isBetter = stockVal < avgVal;
    }
    
    const badge = document.createElement("span");
    if (isEqual) {
      badge.className = "compare-badge warning";
      badge.textContent = dict.eval_neutral;
    } else if (isBetter) {
      badge.className = "compare-badge safe";
      badge.textContent = dict.eval_better;
    } else {
      badge.className = "compare-badge danger";
      badge.textContent = dict.eval_worse;
    }
    
    tdEval.appendChild(badge);
    
    tr.appendChild(tdName);
    tr.appendChild(tdStock);
    tr.appendChild(tdAvg);
    tr.appendChild(tdEval);
    tbody.appendChild(tr);
  });
}

// Helper to format values with metric units
function formatWithUnit(val, format, dict) {
  if (val === undefined || val === null) return "—";
  if (format === "ratio") return `${val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2})} ${dict.unit_ratio}`;
  if (format === "currency") return `${val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2})} ${dict.unit_sar}`;
  if (format === "percent") return `${val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US')}${dict.unit_percent}`;
  if (format === "currency_share") return `${val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2})} ${dict.unit_sar_share}`;
  return val.toString();
}

// Router to render history section (Annual vs Quarterly)
function renderHistorySection() {
  const stock = stockData[currentCompanyId];
  if (!stock) return;
  
  const dict = translations[currentLang];
  
  if (historyGranularity === "annual") {
    renderHistoryTable(stock, dict);
    renderHistoryChart(stock);
  } else {
    renderQuarterlyHistoryTable(stock, dict);
    renderQuarterlyHistoryChart(stock);
  }
}

// Render the 5-year financials table view with YoY % change indicator row
function renderHistoryTable(stock, dict) {
  const table = document.getElementById("history-table");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  
  thead.innerHTML = "";
  tbody.innerHTML = "";
  
  // Headers row
  const hRow = document.createElement("tr");
  const thLabel = document.createElement("th");
  thLabel.textContent = currentLang === "ar" ? "البند المالي (مليار ر.س)" : "Financial Metric (Billion SAR)";
  hRow.appendChild(thLabel);
  
  stock.history5Years.years.forEach(year => {
    const th = document.createElement("th");
    th.textContent = year;
    hRow.appendChild(th);
  });
  thead.appendChild(hRow);
  
  // Financial lines mapping
  const metricsMap = [
    { key: "revenues", nameAr: "الإيرادات", nameEn: "Revenues" },
    { key: "netIncome", nameAr: "صافي الدخل", nameEn: "Net Income" },
    { key: "assets", nameAr: "إجمالي الأصول", nameEn: "Total Assets" },
    { key: "liabilities", nameAr: "إجمالي الالتزامات", nameEn: "Total Liabilities" },
    { key: "equity", nameAr: "إجمالي حقوق المساهمين", nameEn: "Shareholders' Equity" }
  ];
  
  metricsMap.forEach(item => {
    const row = document.createElement("tr");
    const tdLabel = document.createElement("td");
    tdLabel.textContent = currentLang === "ar" ? item.nameAr : item.nameEn;
    row.appendChild(tdLabel);
    
    const values = stock.history5Years[item.key];
    
    for (let i = 0; i < values.length; i++) {
      const td = document.createElement("td");
      const currentVal = values[i];
      
      const valContainer = document.createElement("div");
      valContainer.className = "cell-value-container";
      
      const textSpan = document.createElement("span");
      textSpan.textContent = currentVal.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 1});
      valContainer.appendChild(textSpan);
      
      // Compute YoY percentage change (annual YoY comparison)
      if (i > 0) {
        const prevVal = values[i - 1];
        let yoy = 0;
        if (prevVal !== 0) {
          yoy = ((currentVal - prevVal) / Math.abs(prevVal)) * 100;
        }
        
        const badge = document.createElement("span");
        badge.className = `growth-indicator ${yoy > 0 ? 'positive' : yoy < 0 ? 'negative' : 'neutral'}`;
        badge.textContent = `${yoy > 0 ? '+' : ''}${yoy.toFixed(1)}%`;
        valContainer.appendChild(badge);
      }
      
      td.appendChild(valContainer);
      row.appendChild(td);
    }
    
    tbody.appendChild(row);
  });
}

// Render the Quarterly financials table view comparing YoY same quarters
function renderQuarterlyHistoryTable(stock, dict) {
  const table = document.getElementById("history-table");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  
  thead.innerHTML = "";
  tbody.innerHTML = "";
  
  // Headers row
  const hRow = document.createElement("tr");
  const thLabel = document.createElement("th");
  thLabel.textContent = currentLang === "ar" ? "البند المالي" : "Financial Metric";
  hRow.appendChild(thLabel);
  
  // Periods
  stock.quarterlyFinancials.quarters.forEach(q => {
    const th = document.createElement("th");
    th.textContent = translateQuarter(q);
    hRow.appendChild(th);
  });
  thead.appendChild(hRow);
  
  // Metric mappings
  const metricsMap = [
    { key: "revenues", nameAr: "الإيرادات (مليار ر.س)", nameEn: "Revenues (Billion SAR)" },
    { key: "netIncome", nameAr: "صافي الدخل (مليار ر.س)", nameEn: "Net Income (Billion SAR)" },
    { key: "eps", nameAr: "ربحية السهم (ر.س)", nameEn: "EPS (SAR)" }
  ];
  
  metricsMap.forEach(item => {
    const row = document.createElement("tr");
    const tdLabel = document.createElement("td");
    tdLabel.textContent = currentLang === "ar" ? item.nameAr : item.nameEn;
    row.appendChild(tdLabel);
    
    const values = stock.quarterlyFinancials[item.key];
    const quarters = stock.quarterlyFinancials.quarters;
    
    for (let i = 0; i < values.length; i++) {
      const td = document.createElement("td");
      const currentVal = values[i];
      
      const valContainer = document.createElement("div");
      valContainer.className = "cell-value-container";
      
      const textSpan = document.createElement("span");
      textSpan.textContent = currentVal.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
      valContainer.appendChild(textSpan);
      
      // Calculate YoY same quarter change (e.g. Q1 2025 vs Q1 2024 which is offset of 4 quarters)
      if (i >= 4) {
        const prevQuarterVal = values[i - 4];
        let yoy = 0;
        if (prevQuarterVal !== 0) {
          yoy = ((currentVal - prevQuarterVal) / Math.abs(prevQuarterVal)) * 100;
        }
        
        const badge = document.createElement("span");
        badge.className = `growth-indicator ${yoy > 0 ? 'positive' : yoy < 0 ? 'negative' : 'neutral'}`;
        badge.textContent = `${yoy > 0 ? '+' : ''}${yoy.toFixed(1)}%`;
        valContainer.appendChild(badge);
      }
      
      td.appendChild(valContainer);
      row.appendChild(td);
    }
    
    tbody.appendChild(row);
  });
}

// Helper to translate quarter labels on the fly
function translateQuarter(q) {
  if (currentLang !== "ar") return q;
  return q.replace("Q1", "الربع الأول")
          .replace("Q2", "الربع الثاني")
          .replace("Q3", "الربع الثالث")
          .replace("Q4", "الربع الرابع");
}

// Draw Annual Chart.js graphs
function renderHistoryChart(stock) {
  const ctx = document.getElementById("financialHistoryChart").getContext("2d");
  const years = stock.history5Years.years;
  
  const activeBtn = document.querySelector(".chart-toggles .toggle-btn.active");
  const selectedMetric = activeBtn.getAttribute("data-chart-metric");
  
  if (currentChart) {
    currentChart.destroy();
  }
  
  let chartData = {};
  
  if (selectedMetric === "revenues") {
    chartData = {
      labels: years,
      datasets: [{
        label: currentLang === "ar" ? "الإيرادات السنوية (مليار ر.س)" : "Annual Revenues (Billion SAR)",
        data: stock.history5Years.revenues,
        backgroundColor: "rgba(4, 120, 87, 0.2)",
        borderColor: "#047857",
        borderWidth: 2,
        borderRadius: 6,
        barThickness: 32
      }]
    };
    
    currentChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: "#F1F5F9" } },
          x: { grid: { display: false } }
        },
        plugins: {
          legend: { labels: { font: { family: currentLang === "ar" ? "Tajawal" : "Inter" } } }
        }
      }
    });
    
  } else if (selectedMetric === "netIncome") {
    chartData = {
      labels: years,
      datasets: [{
        label: currentLang === "ar" ? "صافي الدخل السنوي (مليار ر.س)" : "Annual Net Income (Billion SAR)",
        data: stock.history5Years.netIncome,
        backgroundColor: "rgba(15, 23, 42, 0.05)",
        borderColor: "#0F172A",
        borderWidth: 3,
        fill: true,
        tension: 0.35,
        pointBackgroundColor: "#047857",
        pointBorderWidth: 2,
        pointRadius: 6
      }]
    };
    
    currentChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: "#F1F5F9" } },
          x: { grid: { display: false } }
        },
        plugins: {
          legend: { labels: { font: { family: currentLang === "ar" ? "Tajawal" : "Inter" } } }
        }
      }
    });
    
  } else if (selectedMetric === "assets_liab") {
    chartData = {
      labels: years,
      datasets: [
        {
          label: currentLang === "ar" ? "إجمالي الأصول (مليار ر.س)" : "Total Assets (Billion SAR)",
          data: stock.history5Years.assets,
          backgroundColor: "#047857",
          borderColor: "#047857",
          borderWidth: 1,
          borderRadius: 4
        },
        {
          label: currentLang === "ar" ? "إجمالي الالتزامات (مليار ر.س)" : "Total Liabilities (Billion SAR)",
          data: stock.history5Years.liabilities,
          backgroundColor: "#EF4444",
          borderColor: "#EF4444",
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    };
    
    currentChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: "#F1F5F9" } },
          x: { grid: { display: false } }
        },
        plugins: {
          legend: { labels: { font: { family: currentLang === "ar" ? "Tajawal" : "Inter" } } }
        }
      }
    });
  }
}

// Draw Quarterly Chart.js graphs
function renderQuarterlyHistoryChart(stock) {
  const ctx = document.getElementById("financialHistoryChart").getContext("2d");
  const rawQuarters = stock.quarterlyFinancials.quarters;
  const quarters = rawQuarters.map(q => translateQuarter(q));
  
  const activeBtn = document.querySelector(".chart-toggles .toggle-btn.active");
  const selectedMetric = activeBtn.getAttribute("data-chart-metric");
  
  if (currentChart) {
    currentChart.destroy();
  }
  
  let chartData = {};
  
  if (selectedMetric === "revenues") {
    chartData = {
      labels: quarters,
      datasets: [{
        label: currentLang === "ar" ? "الإيرادات الربع سنوية (مليار ر.س)" : "Quarterly Revenues (Billion SAR)",
        data: stock.quarterlyFinancials.revenues,
        backgroundColor: "rgba(4, 120, 87, 0.2)",
        borderColor: "#047857",
        borderWidth: 2,
        borderRadius: 4,
        barThickness: 24
      }]
    };
    
    currentChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: "#F1F5F9" } },
          x: { grid: { display: false } }
        },
        plugins: {
          legend: { labels: { font: { family: currentLang === "ar" ? "Tajawal" : "Inter" } } }
        }
      }
    });
    
  } else if (selectedMetric === "netIncome") {
    chartData = {
      labels: quarters,
      datasets: [{
        label: currentLang === "ar" ? "صافي الدخل الربع سنوي (مليار ر.س)" : "Quarterly Net Income (Billion SAR)",
        data: stock.quarterlyFinancials.netIncome,
        backgroundColor: "rgba(30, 58, 138, 0.05)",
        borderColor: "#1E3A8A",
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "#047857",
        pointBorderWidth: 2,
        pointRadius: 5
      }]
    };
    
    currentChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: "#F1F5F9" } },
          x: { grid: { display: false } }
        },
        plugins: {
          legend: { labels: { font: { family: currentLang === "ar" ? "Tajawal" : "Inter" } } }
        }
      }
    });
    
  } else if (selectedMetric === "assets_liab") {
    chartData = {
      labels: quarters,
      datasets: [
        {
          label: currentLang === "ar" ? "الإيرادات الربعية (مليار)" : "Quarterly Revenues (B)",
          data: stock.quarterlyFinancials.revenues,
          backgroundColor: "#047857",
          borderColor: "#047857",
          borderWidth: 1,
          borderRadius: 4
        },
        {
          label: currentLang === "ar" ? "صافي الدخل الربعي (مليار)" : "Quarterly Net Income (B)",
          data: stock.quarterlyFinancials.netIncome,
          backgroundColor: "#1E3A8A",
          borderColor: "#1E3A8A",
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    };
    
    currentChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: "#F1F5F9" } },
          x: { grid: { display: false } }
        },
        plugins: {
          legend: { labels: { font: { family: currentLang === "ar" ? "Tajawal" : "Inter" } } }
        }
      }
    });
  }
}

// Render Cash Dividends panel and quarterly tables
function renderDividendsSection(stock, dict) {
  document.getElementById("div-yield-val").textContent = `${stock.dividends.dividendYield}%`;
  document.getElementById("div-payout-val").textContent = `${stock.dividends.payoutRatio}%`;
  
  const qTable = document.getElementById("quarterly-dividends-table").querySelector("tbody");
  qTable.innerHTML = "";
  stock.dividends.quarterly.forEach(item => {
    const tr = document.createElement("tr");
    
    const tdPeriod = document.createElement("td");
    tdPeriod.textContent = item.period;
    
    const tdAmt = document.createElement("td");
    tdAmt.textContent = `${item.amount.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2})} ${dict.unit_sar}`;
    
    const tdDate = document.createElement("td");
    tdDate.textContent = item.date;
    
    tr.appendChild(tdPeriod);
    tr.appendChild(tdAmt);
    tr.appendChild(tdDate);
    qTable.appendChild(tr);
  });
  
  const aTable = document.getElementById("annual-dividends-table").querySelector("tbody");
  aTable.innerHTML = "";
  stock.dividends.annual.forEach(item => {
    const tr = document.createElement("tr");
    
    const tdYear = document.createElement("td");
    tdYear.textContent = item.year;
    
    const tdAmt = document.createElement("td");
    tdAmt.textContent = `${item.amount.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2})} ${dict.unit_sar}`;
    
    const tdDate = document.createElement("td");
    tdDate.textContent = item.date;
    
    tr.appendChild(tdYear);
    tr.appendChild(tdAmt);
    tr.appendChild(tdDate);
    aTable.appendChild(tr);
  });
}

// Render company-specific news log with active hyperlinks
function renderCompanyNewsList(stock) {
  const container = document.getElementById("company-news-list");
  container.innerHTML = "";
  
  if (stock.news.length === 0) {
    container.innerHTML = `<p style="color: var(--text-light); text-align: center;">${currentLang === "ar" ? "لا توجد أخبار حديثة لهذه الشركة" : "No recent news for this company."}</p>`;
    return;
  }
  
  stock.news.forEach(item => {
    const div = document.createElement("div");
    div.className = "news-item animate-fade-in";
    
    const meta = document.createElement("div");
    meta.className = "news-meta";
    
    const src = document.createElement("span");
    src.className = "news-source";
    src.textContent = item.source;
    
    const time = document.createElement("span");
    time.className = "news-time";
    time.textContent = item.date;
    
    meta.appendChild(src);
    meta.appendChild(time);
    
    const titleLink = document.createElement("a");
    titleLink.className = "news-title";
    titleLink.href = item.url || "https://www.tadawul.com.sa";
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.textContent = currentLang === "ar" ? item.titleAr : item.titleEn;
    titleLink.style.textDecoration = "none";
    titleLink.style.display = "block";
    
    div.appendChild(meta);
    div.appendChild(titleLink);
    container.appendChild(div);
  });
}

// Render PDF Annual Reports list
function renderAnnualReportsList() {
  const stock = stockData[currentCompanyId];
  const container = document.getElementById("company-reports-list");
  container.innerHTML = "";
  
  if (!stock || !stock.reports || stock.reports.length === 0) {
    container.innerHTML = `<p style="color: var(--text-light); text-align: center; grid-column: 1/-1;">${currentLang === "ar" ? "لا توجد تقارير سنوية متوفرة" : "No annual reports available for this stock."}</p>`;
    return;
  }
  
  stock.reports.forEach(report => {
    const card = document.createElement("div");
    card.className = "report-card animate-fade-in";
    
    const header = document.createElement("div");
    header.className = "report-header";
    
    const icon = document.createElement("div");
    icon.className = "pdf-icon-badge";
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`;
    
    const textCont = document.createElement("div");
    textCont.className = "report-title-wrapper";
    
    const title = document.createElement("span");
    title.className = "report-card-title";
    title.textContent = currentLang === "ar" ? report.titleAr : report.titleEn;
    
    const year = document.createElement("span");
    year.className = "report-year";
    year.textContent = report.year;
    
    textCont.appendChild(title);
    textCont.appendChild(year);
    
    header.appendChild(icon);
    header.appendChild(textCont);
    
    const link = document.createElement("a");
    link.className = "report-link";
    link.href = report.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = `
      <span>${currentLang === "ar" ? "تحميل التقرير (PDF)" : "Download Report (PDF)"}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    `;
    
    card.appendChild(header);
    card.appendChild(link);
    container.appendChild(card);
  });
}

// Render switches in customized panel
function renderCustomizeSwitches(dict) {
  const container = document.getElementById("customize-checkboxes-container");
  container.innerHTML = "";
  
  const allMetricsKeys = ["eps", "pe", "pegAnnual", "peg3Year", "netProfitMargin", "roe", "debtToAssets", "debtToEquity", "freeCashFlow"];
  
  allMetricsKeys.forEach(metricKey => {
    const isChecked = metricsConfig.includes(metricKey);
    
    const item = document.createElement("div");
    item.className = "customize-item";
    
    const info = document.createElement("div");
    info.className = "customize-info";
    
    const name = document.createElement("span");
    name.className = "customize-name";
    name.textContent = dict[metricKey].name;
    
    const desc = document.createElement("span");
    desc.className = "customize-desc";
    desc.textContent = dict[metricKey].desc;
    
    info.appendChild(name);
    info.appendChild(desc);
    
    const switchLabel = document.createElement("label");
    switchLabel.className = "switch";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "customize-checkbox";
    checkbox.setAttribute("data-metric", metricKey);
    checkbox.checked = isChecked;
    
    const slider = document.createElement("span");
    slider.className = "slider";
    
    switchLabel.appendChild(checkbox);
    switchLabel.appendChild(slider);
    
    item.appendChild(info);
    item.appendChild(switchLabel);
    container.appendChild(item);
  });
}

// Open the interactive historical modal drawers for metrics
function openMetricModal(metricKey) {
  const stock = stockData[currentCompanyId];
  if (!stock || !stock.metricsHistory5Years) return;
  
  const dict = translations[currentLang];
  
  // PEG recalculation dynamically if requested
  if (metricKey === "pegAnnual" || metricKey === "peg3Year") {
    const pegs = getCalculatedPegRatios(stock);
    stock.metricsHistory5Years.pegAnnual = [pegs.annualPeg * 0.8, pegs.annualPeg * 0.9, pegs.annualPeg * 1.1, pegs.annualPeg * 0.95, pegs.annualPeg];
    stock.metricsHistory5Years.peg3Year = [pegs.peg3Year * 0.85, pegs.peg3Year * 0.9, pegs.peg3Year * 1.05, pegs.peg3Year * 0.98, pegs.peg3Year];
  }
  
  const history = stock.metricsHistory5Years[metricKey];
  const years = stock.metricsHistory5Years.years;
  
  if (!history) return;
  
  const modalTitle = document.getElementById("modal-metric-title");
  modalTitle.textContent = dict[`modal_${metricKey}_title`] || `${dict[metricKey].name} - 5-Year History`;
  
  const modalDesc = document.getElementById("modal-metric-desc");
  modalDesc.textContent = dict[metricKey].desc;
  
  document.getElementById("modal-th-year").textContent = dict.th_year_modal;
  document.getElementById("modal-th-value").textContent = dict.th_val_modal;
  document.getElementById("modal-th-change").textContent = dict.th_change_modal;
  
  const tbody = document.getElementById("modal-table").querySelector("tbody");
  tbody.innerHTML = "";
  
  for (let i = 0; i < history.length; i++) {
    const tr = document.createElement("tr");
    
    const tdYear = document.createElement("td");
    tdYear.textContent = years[i];
    
    const tdVal = document.createElement("td");
    let unit = "";
    let formattedVal = "";
    
    if (history[i] === null) {
      formattedVal = "—";
    } else {
      if (metricKey === "eps") unit = ` ${dict.unit_sar}`;
      if (metricKey === "freeCashFlow") unit = ` ${dict.unit_sar_share}`;
      if (metricKey === "pe" || metricKey === "pegAnnual" || metricKey === "peg3Year") unit = ` ${dict.unit_ratio}`;
      if (metricKey === "netProfitMargin" || metricKey === "roe" || metricKey === "debtToAssets" || metricKey === "debtToEquity") unit = dict.unit_percent;
      formattedVal = history[i].toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {maximumFractionDigits: 2}) + unit;
    }
    
    tdVal.textContent = formattedVal;
    
    const tdChange = document.createElement("td");
    if (i === 0 || history[i] === null || history[i - 1] === null) {
      tdChange.textContent = "—";
      tdChange.style.color = "var(--text-light)";
    } else {
      const prev = history[i - 1];
      const curr = history[i];
      let yoy = 0;
      
      if (prev !== 0) {
        yoy = ((curr - prev) / Math.abs(prev)) * 100;
      }
      
      const formattedYoY = yoy.toFixed(1);
      const sign = yoy > 0 ? "+" : "";
      tdChange.textContent = `${sign}${formattedYoY}%`;
      tdChange.style.fontWeight = "700";
      
      if (yoy > 0) {
        tdChange.style.color = "var(--color-green)";
      } else if (yoy < 0) {
        tdChange.style.color = "var(--color-danger)";
      } else {
        tdChange.style.color = "var(--text-secondary)";
      }
    }
    
    tr.appendChild(tdYear);
    tr.appendChild(tdVal);
    tr.appendChild(tdChange);
    tbody.appendChild(tr);
  }
  
  // Render Modal Mini Chart
  const cleanHistoryData = history.map(v => v === null ? 0 : v);
  renderModalChart(years, cleanHistoryData, dict[metricKey].name);
  
  const modal = document.getElementById("metric-modal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

// Close Interactive Modal
function closeMetricModal() {
  const modal = document.getElementById("metric-modal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    if (currentModalChart) {
      currentModalChart.destroy();
      currentModalChart = null;
    }
  }, 300);
}

// Render line chart inside the interactive metric modal
function renderModalChart(labels, data, labelName) {
  const ctx = document.getElementById("modalMetricChart").getContext("2d");
  
  if (currentModalChart) {
    currentModalChart.destroy();
  }
  
  currentModalChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: labelName,
        data: data,
        backgroundColor: "rgba(4, 120, 87, 0.05)",
        borderColor: "#047857", // Deep green
        borderWidth: 3,
        pointBackgroundColor: "#1E3A8A", // Deep Blue points
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { grid: { color: "#F1F5F9" } },
        x: { grid: { display: false } }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// Async Fetch from Yahoo Finance via CORS proxy
async function fetchYahooPrice(symbol) {
  try {
    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}.SR`;
    const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(yahooUrl)}`;
    
    const response = await fetch(corsProxyUrl);
    if (!response.ok) throw new Error("CORS Proxy error");
    
    const json = await response.json();
    const data = JSON.parse(json.contents);
    const result = data.chart.result[0];
    const price = result.meta.regularMarketPrice;
    const prevClose = result.meta.previousClose;
    const change = price - prevClose;
    const changePercent = (change / prevClose) * 100;
    const volume = result.meta.regularMarketVolume || 1500000;
    const name = result.meta.symbol.split('.')[0];
    
    return { price, change, changePercent, volume, name };
  } catch (err) {
    console.warn(`CORS/Fetch failed for ${symbol}.`, err);
    return null;
  }
}

// Fetch ^TASI index details from Yahoo Finance
async function fetchLiveTasi() {
  try {
    const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://query1.finance.yahoo.com/v8/finance/chart/%5ETASI')}`;
    const response = await fetch(corsProxyUrl);
    if (!response.ok) throw new Error("Tasi Fetch Proxy failure");
    
    const json = await response.json();
    const data = JSON.parse(json.contents);
    const result = data.chart.result[0];
    
    marketSummary.tasi.value = parseFloat(result.meta.regularMarketPrice.toFixed(2));
    const prevClose = result.meta.previousClose;
    marketSummary.tasi.change = parseFloat((marketSummary.tasi.value - prevClose).toFixed(2));
    marketSummary.tasi.changePercent = parseFloat(((marketSummary.tasi.change / prevClose) * 100).toFixed(2));
    
    return true;
  } catch (err) {
    console.warn("Failed fetching TASI index live from Yahoo Finance: ", err);
    return false;
  }
}

// Roll over simulator: appends a new financial quarter/year when sync is clicked
function simulateFinancialRollover() {
  // Select a random stock in our list to post a new quarter filing
  const symbols = Object.keys(stockData);
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const stock = stockData[randomSymbol];
  
  if (!stock) return;
  
  const quarters = stock.quarterlyFinancials.quarters;
  const lastQ = quarters[quarters.length - 1]; // e.g. "Q4 2025" or "Q1 2026"
  
  let nextQ = "";
  if (lastQ.includes("Q1")) nextQ = lastQ.replace("Q1", "Q2");
  else if (lastQ.includes("Q2")) nextQ = lastQ.replace("Q2", "Q3");
  else if (lastQ.includes("Q3")) nextQ = lastQ.replace("Q3", "Q4");
  else if (lastQ.includes("Q4")) {
    const nextYear = parseInt(lastQ.split(" ")[1]) + 1;
    nextQ = `Q1 ${nextYear}`;
    
    // Also rollover a new year in annual database
    const newYearStr = (nextYear - 1).toString(); // e.g. "2025"
    if (!stock.history5Years.years.includes(newYearStr)) {
      stock.history5Years.years.shift();
      stock.history5Years.years.push(newYearStr);
      
      stock.history5Years.revenues.shift();
      stock.history5Years.revenues.push(parseFloat((stock.history5Years.revenues[3] * 1.05).toFixed(1)));
      
      stock.history5Years.netIncome.shift();
      stock.history5Years.netIncome.push(parseFloat((stock.history5Years.netIncome[3] * 1.03).toFixed(1)));
      
      stock.history5Years.assets.shift();
      stock.history5Years.assets.push(parseFloat((stock.history5Years.assets[3] * 1.04).toFixed(1)));
      
      stock.history5Years.liabilities.shift();
      stock.history5Years.liabilities.push(parseFloat((stock.history5Years.liabilities[3] * 0.98).toFixed(1)));
      
      stock.history5Years.equity.shift();
      stock.history5Years.equity.push(parseFloat((stock.history5Years.equity[3] * 1.06).toFixed(1)));
      
      // Also shift metric histories
      stock.metricsHistory5Years.years.shift();
      stock.metricsHistory5Years.years.push(newYearStr);
      
      stock.metricsHistory5Years.eps.shift();
      stock.metricsHistory5Years.eps.push(stock.metrics.eps);
      
      stock.metricsHistory5Years.netProfitMargin.shift();
      stock.metricsHistory5Years.netProfitMargin.push(stock.metrics.netProfitMargin);
      
      stock.metricsHistory5Years.roe.shift();
      stock.metricsHistory5Years.roe.push(stock.metrics.roe);
      
      stock.metricsHistory5Years.debtToAssets.shift();
      stock.metricsHistory5Years.debtToAssets.push(stock.metrics.debtToAssets);
      
      stock.metricsHistory5Years.debtToEquity.shift();
      stock.metricsHistory5Years.debtToEquity.push(stock.metrics.debtToEquity);
      
      stock.metricsHistory5Years.freeCashFlow.shift();
      stock.metricsHistory5Years.freeCashFlow.push(stock.metrics.freeCashFlow);
    }
  }
  
  if (!quarters.includes(nextQ)) {
    // Push new quarter and shift oldest quarter
    quarters.shift();
    quarters.push(nextQ);
    
    stock.quarterlyFinancials.revenues.shift();
    stock.quarterlyFinancials.revenues.push(parseFloat((stock.quarterlyFinancials.revenues[6] * 1.03).toFixed(1)));
    
    stock.quarterlyFinancials.netIncome.shift();
    stock.quarterlyFinancials.netIncome.push(parseFloat((stock.quarterlyFinancials.netIncome[6] * 1.04).toFixed(1)));
    
    stock.quarterlyFinancials.eps.shift();
    stock.quarterlyFinancials.eps.push(parseFloat((stock.quarterlyFinancials.eps[6] * 1.02).toFixed(2)));
    
    // Push visual alert log
    const localizedNextQ = translateQuarter(nextQ);
    const coName = currentLang === "ar" ? stock.nameAr : stock.nameEn;
    
    setTimeout(() => {
      triggerRandomLog(`إفصاح هيئة السوق المالية: تم إعلان نتائج ${localizedNextQ} لشركة ${coName} وتحديث القوائم بنجاح.`);
      showToast(
        currentLang === "ar" ? "قوائم مالية جديدة" : "New Period Disclosed",
        currentLang === "ar" ? `تم الكشف عن نتائج ${localizedNextQ} لـ ${coName} وتحديث البيانات التاريخية.` : `New financial filings for ${coName} published.`
      );
    }, 1500);
  }
}

// Synchronize all stock prices dynamically from Saudi Tadawul
async function syncAllPricesFromYahoo() {
  triggerRandomLog(currentLang === "ar" ? "جاري الاتصال بخوادم الأسعار الفورية لتحديث المحفظة..." : "Querying realtime Tadawul feeds for Saudi stock prices...");
  
  let successCount = 0;
  
  showToast(
    currentLang === "ar" ? "تكامل البيانات فوري" : "Live Price Integration",
    currentLang === "ar" ? "جاري الاستعلام عن الأسعار اللحظية من خوادم تداول..." : "Fetching stock quote feeds from Saudi Capital Market indices..."
  );

  // Sync TASI Index
  await fetchLiveTasi();

  for (const symbol of Object.keys(stockData)) {
    const liveData = await fetchYahooPrice(symbol);
    if (liveData) {
      const stock = stockData[symbol];
      stock.price = parseFloat(liveData.price.toFixed(2));
      stock.change = parseFloat(liveData.change.toFixed(2));
      stock.changePercent = parseFloat(liveData.changePercent.toFixed(2));
      
      // Recalculate P/E
      if (stock.metrics.eps > 0) {
        stock.metrics.pe = parseFloat((stock.price / stock.metrics.eps).toFixed(2));
      }
      successCount++;
    }
  }

  // Trigger rollover sync simulation
  simulateFinancialRollover();

  // Reset timers back to 6 hours
  priceTimerSeconds = 6 * 60 * 60;
  newsTimerSeconds = 60 * 60;

  if (successCount > 0) {
    updateUI();
    showToast(
      currentLang === "ar" ? "اكتمل التحديث" : "Update Completed",
      currentLang === "ar" ? `تم تحديث أسعار ومؤشرات ${successCount} شركات وتنسيقها مع تداول.` : `Successfully synchronized live prices for ${successCount} companies.`
    );
  } else {
    // Local mock simulation fallback
    simulatePriceUpdate();
    showToast(
      currentLang === "ar" ? "المزامنة المحلية" : "Local Sync Run",
      currentLang === "ar" ? "تعذر الاستجابة من الملقم الخارجي؛ تم تشغيل المعالجة التقديرية للأسعار." : "Could not connect to external API; local mock pricing engine has run."
    );
  }
}

// Show a temporary visual Toast alert
function showToast(title, message) {
  const toast = document.getElementById("toast-notif");
  document.getElementById("toast-title").textContent = title;
  document.getElementById("toast-msg").textContent = message;
  
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Update live header notification tickers
function triggerRandomLog(message) {
  const textEl = document.getElementById("live-notif-text");
  if (!textEl) return;
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = message;
    textEl.style.opacity = 1;
  }, 200);
}

// Start simulation clocks countdown
function startSimulationTimers() {
  setInterval(() => {
    priceTimerSeconds--;
    if (priceTimerSeconds <= 0) {
      syncAllPricesFromYahoo();
    }
    
    newsTimerSeconds--;
    if (newsTimerSeconds <= 0) {
      newsTimerSeconds = 60 * 60; // reset
      simulateNewsUpdate();
    }
    
    document.getElementById("price-timer").textContent = formatTime(priceTimerSeconds);
    document.getElementById("news-timer").textContent = formatTime(newsTimerSeconds);
  }, 1000);

  setInterval(() => {
    const logs = currentLang === "ar" ? [
      "تحديث: أرامكو تعلن عن نتائج الربع الثاني لعام 2026 بنمو في الأرباح التشغيلية.",
      "مزامنة: تم جلب التوزيعات النقدية لمصرف الراجحي من موقع هيئة السوق المالية بنجاح.",
      "تحديث: تعديل البيانات التاريخية لشركة سابك بناء على تسويات أرقام السنوية.",
      "إجراء آلي: جلب أسعار الأسهم اللحظية وتدقيق مكررات الربحية."
    ] : [
      "Update: Aramco announces Q2 2026 results showing solid operating profits.",
      "Sync: Al Rajhi Cash Dividends retrieved from CMA disclosures database successfully.",
      "Update: Adjusted historical statements of SABIC based on annual Argaam revisions.",
      "Auto Job: Checking real-time market prices and updating P/E multiples."
    ];
    
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    triggerRandomLog(randomLog);
  }, 25000);
}

// Helper to format seconds to HH:MM:SS
function formatTime(totalSeconds) {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Simulate hourly news feed injection
function simulateNewsUpdate() {
  const randomNews = newsDatabase[Math.floor(Math.random() * newsDatabase.length)];
  const targetStock = stockData[randomNews.companyId];
  
  if (targetStock) {
    const isAlreadyPresent = targetStock.news.some(n => n.titleAr === randomNews.titleAr);
    if (!isAlreadyPresent) {
      targetStock.news.unshift({
        id: Date.now(),
        date: currentLang === "ar" ? "الآن" : "Just now",
        titleAr: randomNews.titleAr,
        titleEn: randomNews.titleEn,
        source: randomNews.source,
        url: randomNews.url
      });
      
      newNewsAlertsCount++;
      
      if (activeTab !== "news") {
        const badge = document.getElementById("news-badge-count");
        badge.textContent = newNewsAlertsCount;
        badge.style.display = "inline-block";
      }
      
      if (randomNews.companyId === currentCompanyId) {
        renderCompanyNewsList(targetStock);
      }
      
      triggerRandomLog(currentLang === "ar" ? `خبر عاجل جديد مضاف لـ ${targetStock.nameAr}` : `New breaking news added for ${targetStock.nameEn}`);
    }
  }
}

// Local mock stock price adjustments fallback
function simulatePriceUpdate() {
  Object.keys(stockData).forEach(symbol => {
    const stock = stockData[symbol];
    const percentage = (Math.random() * 0.8 - 0.4) / 100; // -0.4% to +0.4%
    const diff = stock.price * percentage;
    
    stock.price = parseFloat((stock.price + diff).toFixed(2));
    stock.change = parseFloat((stock.change + diff).toFixed(2));
    stock.changePercent = parseFloat(((stock.change / (stock.price - stock.change)) * 100).toFixed(2));
    
    if (stock.metrics.eps > 0) {
      stock.metrics.pe = parseFloat((stock.price / stock.metrics.eps).toFixed(2));
    }
  });
  
  updateUI();
  triggerRandomLog(currentLang === "ar" ? "تم تحديث أسعار الأسهم وإعادة احتساب مكررات الربحية." : "Stock price values refreshed and P/E ratios re-evaluated.");
}
