// Translation dictionaries
const translations = {
  ar: {
    nav_dashboard: "المؤشرات الأساسية",
    nav_history5: "البيانات التاريخية (5 سنوات)",
    nav_dividends: "التوزيعات النقدية",
    nav_news: "أخبار الشركة",
    nav_customize: "تخصيص المؤشرات",
    sync_title: "تكامل البيانات المباشر",
    price_update_label: "تحديث الأسعار والمؤشرات:",
    news_update_label: "تحديث الأخبار الفرعية:",
    sync_now_btn: "تحديث فوري للبيانات",
    sar_unit: "ر.س",
    notif_badge: "إجراء آلي:",
    info_box_title: "💡 دليل قراءة المؤشرات المالية",
    history5_title: "البيانات المالية التاريخية (آخر 5 سنوات)",
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
    search_placeholder: "ابحث برمز السهم أو الاسم...",
    sector_label: "القطاع: ",
    news_sync_status: "تحديث تلقائي كل ساعة",
    tasi_label: "المؤشر العام (تاسي):",
    liquidity_label: "السيولة:",
    volume_label: "الحجم:",
    market_status_label: "حالة السوق:",
    market_open: "مفتوح",
    market_closed: "مغلق",
    
    // Metric names and descriptions
    eps: { name: "ربحية السهم (EPS)", desc: "صافي أرباح الشركة مقسوماً على عدد الأسهم" },
    pe: { name: "مكرر الربحية (P/E Ratio)", desc: "سعر السهم مقسوماً على ربحية السهم" },
    netProfitMargin: { name: "هامش صافي الربح", desc: "نسبة صافي الدخل المحقق إلى إجمالي الإيرادات" },
    roe: { name: "العائد على حقوق الملكية", desc: "كفاءة تحقيق الأرباح من أموال المساهمين" },
    debtToAssets: { name: "الديون إلى الأصول", desc: "نسبة تمويل الأصول عبر الديون والقروض" },
    debtToEquity: { name: "الديون إلى حقوق الملكية", desc: "نسبة الاعتماد على الديون مقارنة برأس المال" },
    freeCashFlow: { name: "التدفق النقدي الحر", desc: "النقد المتبقي بعد تغطية النفقات التشغيلية والرأسمالية" },
    
    // Units
    unit_sar: "ريال",
    unit_percent: "%",
    unit_billion: "مليار ريال",
    unit_ratio: "ضعف"
  },
  en: {
    nav_dashboard: "Key Metrics",
    nav_history5: "Historical Data (5 Years)",
    nav_dividends: "Cash Dividends",
    nav_news: "Company News",
    nav_customize: "Customize Metrics",
    sync_title: "Live Data Integration",
    price_update_label: "Price & Metrics Update:",
    news_update_label: "Sub-News Update:",
    sync_now_btn: "Sync Now",
    sar_unit: "SAR",
    notif_badge: "Auto Action:",
    info_box_title: "💡 Guide to Reading Financial Metrics",
    history5_title: "Historical Financial Statements (Last 5 Years)",
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
    search_placeholder: "Search by symbol or name...",
    sector_label: "Sector: ",
    news_sync_status: "Auto updates hourly",
    tasi_label: "TASI Index:",
    liquidity_label: "Liquidity:",
    volume_label: "Volume:",
    market_status_label: "Market Status:",
    market_open: "Open",
    market_closed: "Closed",
    
    // Metric names and descriptions
    eps: { name: "Earnings Per Share (EPS)", desc: "Company's net profit divided by outstanding shares" },
    pe: { name: "P/E Ratio", desc: "Stock price divided by earnings per share" },
    netProfitMargin: { name: "Net Profit Margin", desc: "Ratio of net profit to total revenue generated" },
    roe: { name: "Return on Equity (ROE)", desc: "Efficiency in generating profits from shareholder equity" },
    debtToAssets: { name: "Debt to Assets", desc: "Percentage of assets financed by debt/loans" },
    debtToEquity: { name: "Debt to Equity", desc: "Financial leverage ratio comparing debt to equity" },
    freeCashFlow: { name: "Free Cash Flow (FCF)", desc: "Cash remaining after operating & capital expenditures" },
    
    // Units
    unit_sar: "SAR",
    unit_percent: "%",
    unit_billion: "Billion SAR",
    unit_ratio: "x"
  }
};

// Application State variables
let currentLang = "ar";
let currentCompanyId = "2222"; // default Aramco
let metricsConfig = ["eps", "pe", "netProfitMargin", "roe", "debtToAssets", "debtToEquity", "freeCashFlow"];
let activeTab = "dashboard";
let currentChart = null;

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
  triggerRandomLog("تم الاتصال بنجاح بخوادم هيئة السوق المالية وتداول السعودية.");
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

// Setup all page events
function setupEventListeners() {
  // Lang Toggle Button
  document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    
    saveConfig();
    updateUI();
    
    // Re-render chart if visible
    if (activeTab === "history5") {
      renderHistoryChart();
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

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val === "") {
      searchClear.style.display = "none";
      dropdown.style.display = "none";
      return;
    }
    
    searchClear.style.display = "block";
    
    // Filter stocks database
    const results = Object.values(stockData).filter(stock => {
      return stock.symbol.includes(val) || 
             stock.nameAr.toLowerCase().includes(val) || 
             stock.nameEn.toLowerCase().includes(val) ||
             stock.sectorAr.toLowerCase().includes(val) ||
             stock.sectorEn.toLowerCase().includes(val);
    });
    
    renderSearchResults(results);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    dropdown.style.display = "none";
    searchInput.focus();
  });

  // Close search dropdown on click outside
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
    triggerManualSync();
  });

  // Chart Metric Toggles
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      renderHistoryChart();
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
    metricsConfig = ["eps", "pe", "netProfitMargin", "roe", "debtToAssets", "debtToEquity", "freeCashFlow"];
    saveConfig();
    updateUI();
    showToast(
      currentLang === "ar" ? "إعادة تعيين" : "Reset Complete", 
      currentLang === "ar" ? "تمت إعادة اللوحة إلى حالتها الافتراضية." : "Dashboard restored to default metrics view."
    );
    switchTab("dashboard");
  });
}

// Switch between dashboard views/tabs
function switchTab(tabName) {
  activeTab = tabName;
  
  // Update nav menu active states
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.getAttribute("data-tab") === tabName) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  
  // Show active section
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("active");
  });
  document.getElementById(`tab-${tabName}`).classList.add("active");
  
  // Specific view actions
  if (tabName === "history5") {
    renderHistoryChart();
  }
  
  if (tabName === "news") {
    // Clear news notification badge count
    newNewsAlertsCount = 0;
    document.getElementById("news-badge-count").style.display = "none";
  }
}

// Render the search results in the dropdown
function renderSearchResults(results) {
  const dropdown = document.getElementById("search-dropdown");
  dropdown.innerHTML = "";
  
  if (results.length === 0) {
    const li = document.createElement("li");
    li.style.color = "var(--text-light)";
    li.textContent = currentLang === "ar" ? "لا توجد نتائج مطابقة" : "No results match";
    dropdown.appendChild(li);
    dropdown.style.display = "block";
    return;
  }
  
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
  
  dropdown.style.display = "block";
}

// Load a specific company stock details
function loadStock(symbol) {
  if (!stockData[symbol]) return;
  currentCompanyId = symbol;
  
  // Transition animations effect
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
  
  // Update page-wide static translations
  document.getElementById("lang-btn").querySelector("span").textContent = currentLang === "ar" ? "English" : "العربية";
  document.getElementById("tasi-title").textContent = dict.tasi_label;
  document.getElementById("tasi-liquidity-label").textContent = dict.liquidity_label;
  document.getElementById("tasi-volume-label").textContent = dict.volume_label;
  document.getElementById("tasi-status-label").textContent = dict.market_status_label;
  document.getElementById("tasi-status").textContent = marketSummary.tasi.status === "OPEN" ? dict.market_open : dict.market_closed;
  
  // Translate search placeholder
  document.getElementById("stock-search").placeholder = dict.search_placeholder;
  
  // Translate navigation menu items
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
  renderHistoryTable(stock, dict);
  renderDividendsSection(stock, dict);
  renderCompanyNewsList(stock);
  renderCustomizeSwitches(dict);
  
  // Badge counts
  if (newNewsAlertsCount > 0) {
    const badge = document.getElementById("news-badge-count");
    badge.textContent = newNewsAlertsCount;
    badge.style.display = "inline-block";
  } else {
    document.getElementById("news-badge-count").style.display = "none";
  }
}

// Render dynamic metrics board grid
function renderMetricsGrid(stock, dict) {
  const container = document.getElementById("metrics-container");
  container.innerHTML = "";
  
  metricsConfig.forEach(metricKey => {
    const val = stock.metrics[metricKey];
    if (val === undefined) return;
    
    const card = document.createElement("div");
    card.className = "metric-card";
    
    // Header
    const header = document.createElement("div");
    header.className = "metric-card-header";
    
    const nameCont = document.createElement("div");
    nameCont.className = "metric-name-container";
    
    const title = document.createElement("span");
    title.className = "metric-card-title";
    title.textContent = dict[metricKey].name;
    
    const subtitle = document.createElement("span");
    subtitle.className = "metric-card-subtitle";
    subtitle.textContent = dict[metricKey].desc;
    
    nameCont.appendChild(title);
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
    
    // Format values based on unit types
    let unit = "";
    let formattedVal = val;
    
    if (metricKey === "eps") {
      unit = dict.unit_sar;
      formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
    } else if (metricKey === "pe") {
      unit = dict.unit_ratio;
      formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2});
    } else if (metricKey === "netProfitMargin" || metricKey === "roe" || metricKey === "debtToAssets" || metricKey === "debtToEquity") {
      unit = dict.unit_percent;
      formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US') + unit;
      unit = ""; // embedded in text
    } else if (metricKey === "freeCashFlow") {
      unit = dict.unit_billion;
      formattedVal = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
    }
    
    valEl.textContent = formattedVal;
    valCont.appendChild(valEl);
    
    if (unit !== "") {
      const unitEl = document.createElement("span");
      unitEl.className = "metric-unit";
      unitEl.textContent = " " + unit;
      valCont.appendChild(unitEl);
    }
    
    // Comparison metrics progress bar
    const progressWrapper = document.createElement("div");
    progressWrapper.className = "metric-progress-wrapper";
    
    // Compare metrics with sector average
    const sector = stock.sectorAr; 
    const sectorAvg = marketSummary.sectorAverages[sector] || {pe: 20, roe: 15, npm: 20};
    
    let comparisonText = "";
    let compareStatus = "safe";
    let progressPercent = 50;
    
    if (metricKey === "pe") {
      const targetPe = sectorAvg.pe;
      progressPercent = Math.min(100, Math.max(10, (val / (targetPe * 2)) * 100));
      if (val < targetPe * 0.8) {
        comparisonText = currentLang === "ar" ? "تقييم جاذب (رخيص)" : "Attractive Valuation (Underpriced)";
        compareStatus = "safe";
      } else if (val > targetPe * 1.3) {
        comparisonText = currentLang === "ar" ? "تقييم متضخم (غالٍ)" : "Premium Valuation (Overpriced)";
        compareStatus = "danger";
      } else {
        comparisonText = currentLang === "ar" ? "تقييم عادل" : "Fair Valuation";
        compareStatus = "warning";
      }
    } else if (metricKey === "roe") {
      const targetRoe = sectorAvg.roe;
      progressPercent = Math.min(100, Math.max(10, (val / 35) * 100));
      if (val >= targetRoe) {
        comparisonText = currentLang === "ar" ? "أعلى من متوسط القطاع" : "Above Sector Average";
        compareStatus = "safe";
      } else {
        comparisonText = currentLang === "ar" ? "أقل من متوسط القطاع" : "Below Sector Average";
        compareStatus = "warning";
      }
    } else if (metricKey === "debtToEquity") {
      progressPercent = Math.min(100, Math.max(10, (val / 200) * 100));
      if (val < 60) {
        comparisonText = currentLang === "ar" ? "رافعة مالية آمنة" : "Safe Leverage";
        compareStatus = "safe";
      } else if (val > 150) {
        comparisonText = currentLang === "ar" ? "رافعة مالية عالية" : "High Leverage Risks";
        compareStatus = "danger";
      } else {
        comparisonText = currentLang === "ar" ? "مخاطر معتدلة" : "Moderate Leverage";
        compareStatus = "warning";
      }
    } else if (metricKey === "debtToAssets") {
      progressPercent = val;
      if (val < 30) {
        comparisonText = currentLang === "ar" ? "ديون منخفضة وآمنة" : "Low Debt Exposure";
        compareStatus = "safe";
      } else if (val > 60) {
        comparisonText = currentLang === "ar" ? "ديون مرتفعة" : "High Debt Exposure";
        compareStatus = "danger";
      } else {
        comparisonText = currentLang === "ar" ? "ديون معتدلة" : "Moderate Debt";
        compareStatus = "warning";
      }
    } else {
      progressPercent = Math.min(100, Math.max(10, val));
      comparisonText = currentLang === "ar" ? "أداء تشغيلي مستقر" : "Stable Operating Performance";
      compareStatus = "safe";
    }
    
    // Sparkline mock trends
    const sparkline = document.createElement("div");
    sparkline.className = "sparkline-container";
    
    // Generate simulated heights for 5 intervals (years)
    let mockTrend = [45, 60, 52, 70, 90];
    if (metricKey === "pe") mockTrend = [80, 75, 95, 65, 50];
    if (metricKey === "debtToAssets") mockTrend = [20, 25, 23, 21, 18];
    if (stock.symbol === "2082" && metricKey === "freeCashFlow") mockTrend = [20, 10, -5, -20, -35]; // Acwa power negative cash trends
    
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
    
    // Delayed animation width load
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

// Return Inline SVGs for metric card icons
function getMetricIconSvg(key) {
  const icons = {
    eps: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    pe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    netProfitMargin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    roe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    debtToAssets: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`,
    debtToEquity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>`,
    freeCashFlow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
  };
  return icons[key] || "";
}

// Render the 5-year financials table view
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
    values.forEach(val => {
      const td = document.createElement("td");
      td.textContent = val.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 1});
      row.appendChild(td);
    });
    
    tbody.appendChild(row);
  });
}

// Render Cash Dividends panel and quarterly tables
function renderDividendsSection(stock, dict) {
  document.getElementById("div-yield-val").textContent = `${stock.dividends.dividendYield}%`;
  document.getElementById("div-payout-val").textContent = `${stock.dividends.payoutRatio}%`;
  
  // Render Quarterly table
  const qTable = document.getElementById("quarterly-dividends-table").querySelector("tbody");
  qTable.innerHTML = "";
  stock.dividends.quarterly.forEach(item => {
    const tr = document.createElement("tr");
    
    const tdPeriod = document.createElement("td");
    tdPeriod.textContent = item.period; // quarterly names remain standard
    
    const tdAmt = document.createElement("td");
    tdAmt.textContent = `${item.amount.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {minimumFractionDigits: 2})} ${dict.unit_sar}`;
    
    const tdDate = document.createElement("td");
    tdDate.textContent = item.date;
    
    tr.appendChild(tdPeriod);
    tr.appendChild(tdAmt);
    tr.appendChild(tdDate);
    qTable.appendChild(tr);
  });
  
  // Render Annual history table
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

// Render dynamic visual Chart.js graphs
function renderHistoryChart() {
  const stock = stockData[currentCompanyId];
  if (!stock) return;
  
  const ctx = document.getElementById("financialHistoryChart").getContext("2d");
  const years = stock.history5Years.years;
  
  // Check active chart metric filter selected
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
        label: currentLang === "ar" ? "الإيرادات (مليار ر.س)" : "Revenues (Billion SAR)",
        data: stock.history5Years.revenues,
        backgroundColor: "rgba(0, 135, 90, 0.2)",
        borderColor: "#00875A",
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
        label: currentLang === "ar" ? "صافي الدخل (مليار ر.س)" : "Net Income (Billion SAR)",
        data: stock.history5Years.netIncome,
        backgroundColor: "rgba(30, 41, 59, 0.1)",
        borderColor: "#0F172A",
        borderWidth: 3,
        fill: true,
        tension: 0.35,
        pointBackgroundColor: "#00875A",
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
          backgroundColor: "#00875A",
          borderColor: "#00875A",
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

// Render company-specific news log
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
    
    const title = document.createElement("h3");
    title.className = "news-title";
    title.textContent = currentLang === "ar" ? item.titleAr : item.titleEn;
    
    div.appendChild(meta);
    div.appendChild(title);
    container.appendChild(div);
  });
}

// Render switches in customized panel
function renderCustomizeSwitches(dict) {
  const container = document.getElementById("customize-checkboxes-container");
  container.innerHTML = "";
  
  const allMetricsKeys = ["eps", "pe", "netProfitMargin", "roe", "debtToAssets", "debtToEquity", "freeCashFlow"];
  
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
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = message;
    textEl.style.opacity = 1;
  }, 200);
}

// Start simulation clocks countdown
function startSimulationTimers() {
  // Countdown timers loop
  setInterval(() => {
    // Price countdown timer
    priceTimerSeconds--;
    if (priceTimerSeconds <= 0) {
      priceTimerSeconds = 6 * 60 * 60; // reset
      simulatePriceUpdate();
    }
    
    // News countdown timer
    newsTimerSeconds--;
    if (newsTimerSeconds <= 0) {
      newsTimerSeconds = 60 * 60; // reset
      simulateNewsUpdate();
    }
    
    // Update labels in the DOM
    document.getElementById("price-timer").textContent = formatTime(priceTimerSeconds);
    document.getElementById("news-timer").textContent = formatTime(newsTimerSeconds);
  }, 1000);

  // Periodic visual simulation inputs (every 30 seconds, push a notification)
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

// Force a manual instant recalculation & synchronization
function triggerManualSync() {
  showToast(
    currentLang === "ar" ? "تكامل البيانات فوري" : "Instant Sync Started",
    currentLang === "ar" ? "جاري الاتصال بقاعدة بيانات تداول وأرقام لتحديث الأسعار والمؤشرات..." : "Connecting to Tadawul & Argaam feeds to update stock charts..."
  );
  
  priceTimerSeconds = 6 * 60 * 60; // reset price countdown timer
  newsTimerSeconds = 60 * 60; // reset news countdown timer
  
  setTimeout(() => {
    simulatePriceUpdate();
    simulateNewsUpdate();
    
    showToast(
      currentLang === "ar" ? "اكتمل التحديث" : "Update Completed",
      currentLang === "ar" ? "تم تحديث جميع أسعار الأسهم والمؤشرات والأخبار المعنية." : "All stock prices, metrics, and news items updated to the latest values."
    );
  }, 1000);
}

// Simulate hourly news feed injection
function simulateNewsUpdate() {
  // Take a random item from newsDatabase and prepend to current active company
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
        source: randomNews.source
      });
      
      newNewsAlertsCount++;
      
      // Update badging on Sidebar News Item if not on news view
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

// Simulate stock price adjustments every 6 hours (or sync trigger)
function simulatePriceUpdate() {
  // Randomize all stock prices slightly (+/- 0.5%) and calculate PE Ratio
  Object.keys(stockData).forEach(symbol => {
    const stock = stockData[symbol];
    const percentage = (Math.random() * 1.0 - 0.5) / 100; // -0.5% to +0.5%
    const diff = stock.price * percentage;
    
    stock.price = parseFloat((stock.price + diff).toFixed(2));
    stock.change = parseFloat((stock.change + diff).toFixed(2));
    stock.changePercent = parseFloat(((stock.change / (stock.price - stock.change)) * 100).toFixed(2));
    
    // Recalculate P/E ratio: Price / EPS (only if EPS > 0)
    if (stock.metrics.eps > 0) {
      stock.metrics.pe = parseFloat((stock.price / stock.metrics.eps).toFixed(2));
    }
  });
  
  // TASI change
  const tasiDiff = (Math.random() * 100 - 50);
  marketSummary.tasi.value = parseFloat((marketSummary.tasi.value + tasiDiff).toFixed(2));
  marketSummary.tasi.change = parseFloat((marketSummary.tasi.change + tasiDiff).toFixed(2));
  marketSummary.tasi.changePercent = parseFloat(((marketSummary.tasi.change / marketSummary.tasi.value) * 100).toFixed(2));
  
  updateUI();
  
  triggerRandomLog(currentLang === "ar" ? "تم تحديث أسعار الأسهم وإعادة احتساب مكررات الربحية." : "Stock price values refreshed and P/E ratios re-evaluated.");
}
