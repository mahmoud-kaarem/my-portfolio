export type Language = "en" | "ar";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero
    "hero.name": "Mahmoud Kaarem",
    "hero.title": "Data Analyst",
    "hero.headline": "Transforming Raw Data into Actionable Insights",
    "hero.download": "Download Resume",
    "hero.contact": "Contact Me",

    // About
    "about.title": "About Me",
    "about.p1": "I am an aspiring Data Analyst with a strong foundation in data cleaning, analysis, and visualization, supported by hands-on experience with real business and e-commerce datasets. I specialize in transforming raw data into meaningful insights that support data-driven decision-making.",
    "about.p2": "My technical skills include SQL (PostgreSQL), Excel, Python, and Power BI, which I use for data cleaning, exploratory analysis, and building interactive dashboards. Through managing product data for a Shopify store, I gained experience in data validation, SKU matching, and maintaining data consistency.",
    "about.p3": "I also bring strong analytical thinking, attention to detail, and communication skills. My background in telemarketing enhanced my ability to understand business needs and work effectively in fast-paced environments. I am trained in the full data analysis process, from problem definition to delivering actionable insights, and I'm passionate about using data to solve real-world problems.",

    // Skills
    "skills.title": "Skills",
    "skills.technical": "Technical Skills",
    "skills.tools": "Tools",
    "skills.soft": "Soft Skills",

    // Projects
    "projects.title": "Projects",
    "projects.viewGithub": "View on GitHub",
    "projects.liveDemo": "Live Demo",
    "projects.comingSoon": "Coming Soon",
    "projects.done": "Completed",
    "projects.viewSnapshot": "View Dashboard",
    "project5.title": "E-commerce Transactional Sales Data Analysis",
    "project5.desc": "Analyzed transactional sales data using Excel — standardized column formats (currency, dates), removed duplicates, and resolved missing postal codes using city/state mapping. Built pivot tables to uncover sales trends by region, category, and time period, then designed an interactive dashboard to visualize KPIs and support data-driven business decisions.",
    "project6.title": "Superstore Sales Dashboard",
    "project6.desc": "Built an end-to-end Power BI dashboard from the Sample Superstore CSV dataset. Performed thorough data cleaning (handled nulls, standardized formats, removed duplicates), created DAX measures for KPIs, and designed interactive visualizations to analyze sales, profit, and shipping performance across regions, categories, and customer segments.",

    // Experience
    "experience.title": "Experience",
    "exp1.role": "E-commerce Assistant",
    "exp1.desc": "Managed Shopify product listings, cleaned and validated product data, ensured data accuracy, and maintained SKU consistency.",
    "exp2.role": "Telemarketing Specialist",
    "exp2.desc": "Conducted high-volume cold calls, maintained customer records, and improved lead conversion rates.",
    "exp3.role": "Power BI Intern",
    "exp3.desc": "Worked with real datasets, created dashboards, and supported data-driven decision making.",

    // Education
    "education.title": "Education",
    "edu.degree": "Bachelor of Computer Science",
    "edu.university": "Helwan University",
    "edu.major": "Major: Information Systems",
    "edu.grade": "Grade: Excellent",
    "edu.graduation": "Expected Graduation: June 2026",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Feel free to reach out for collaborations or just a friendly chat",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.phone": "WhatsApp",
    "contact.chatOnWhatsapp": "Chat with me",
    "contact.emailLabel": "Email",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with React & Tailwind CSS",
  },
  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.experience": "الخبرة",
    "nav.education": "التعليم",
    "nav.contact": "تواصل",
    "nav.resume": "السيرة الذاتية",

    // Hero
    "hero.name": "محمود كارم",
    "hero.title": "محلل بيانات",
    "hero.headline": "تحويل البيانات الخام إلى رؤى قابلة للتنفيذ",
    "hero.download": "تحميل السيرة الذاتية",
    "hero.contact": "تواصل معي",

    // About
    "about.title": "عني",
    "about.p1": "أنا محلل بيانات طموح لدي أساس قوي في تنظيف البيانات وتحليلها وتصويرها، مدعومًا بخبرة عملية مع مجموعات بيانات تجارية حقيقية وبيانات التجارة الإلكترونية. أتخصص في تحويل البيانات الخام إلى رؤى ذات مغزى تدعم اتخاذ القرارات المبنية على البيانات.",
    "about.p2": "تشمل مهاراتي التقنية SQL (PostgreSQL) وExcel وPython وPower BI، والتي أستخدمها لتنظيف البيانات والتحليل الاستكشافي وبناء لوحات معلومات تفاعلية. من خلال إدارة بيانات المنتجات لمتجر Shopify، اكتسبت خبرة في التحقق من البيانات ومطابقة SKU والحفاظ على اتساق البيانات.",
    "about.p3": "أتمتع أيضًا بتفكير تحليلي قوي واهتمام بالتفاصيل ومهارات تواصل. عززت خلفيتي في التسويق عبر الهاتف قدرتي على فهم احتياجات الأعمال والعمل بفعالية في بيئات سريعة الوتيرة. أنا مدرب على عملية تحليل البيانات الكاملة، من تحديد المشكلة إلى تقديم رؤى قابلة للتنفيذ، وأنا شغوف باستخدام البيانات لحل مشكلات العالم الحقيقي.",

    // Skills
    "skills.title": "المهارات",
    "skills.technical": "المهارات التقنية",
    "skills.tools": "الأدوات",
    "skills.soft": "المهارات الشخصية",

    // Projects
    "projects.title": "المشاريع",
    "projects.viewGithub": "عرض على GitHub",
    "projects.liveDemo": "عرض مباشر",
    "projects.comingSoon": "قريبًا",
    "projects.done": "مكتمل",
    "projects.viewSnapshot": "عرض لوحة المعلومات",
    "project5.title": "تحليل بيانات مبيعات التجارة الإلكترونية",
    "project5.desc": "تحليل بيانات المبيعات باستخدام Excel — توحيد تنسيقات الأعمدة (العملة والتواريخ)، إزالة التكرارات، ومعالجة الرموز البريدية المفقودة. إنشاء جداول محورية لاكتشاف اتجاهات المبيعات حسب المنطقة والفئة والفترة الزمنية، وتصميم لوحة معلومات تفاعلية لدعم القرارات.",
    "project6.title": "لوحة معلومات مبيعات Superstore",
    "project6.desc": "بناء لوحة معلومات Power BI شاملة من بيانات Superstore. تنظيف البيانات (معالجة القيم الفارغة، توحيد التنسيقات، إزالة التكرارات)، إنشاء مقاييس DAX لمؤشرات الأداء، وتصميم تصورات تفاعلية لتحليل المبيعات والأرباح والشحن عبر المناطق والفئات وشرائح العملاء.",

    // Experience
    "experience.title": "الخبرة",
    "exp1.role": "مساعد تجارة إلكترونية",
    "exp1.desc": "إدارة قوائم منتجات Shopify، تنظيف والتحقق من بيانات المنتجات، ضمان دقة البيانات، والحفاظ على اتساق SKU.",
    "exp2.role": "أخصائي تسويق هاتفي",
    "exp2.desc": "إجراء مكالمات باردة بحجم كبير، الحفاظ على سجلات العملاء، وتحسين معدلات تحويل العملاء المحتملين.",
    "exp3.role": "متدرب Power BI",
    "exp3.desc": "العمل مع مجموعات بيانات حقيقية، إنشاء لوحات معلومات، ودعم اتخاذ القرارات المبنية على البيانات.",

    // Education
    "education.title": "التعليم",
    "edu.degree": "بكالوريوس علوم الحاسب",
    "edu.university": "جامعة حلوان",
    "edu.major": "التخصص: نظم المعلومات",
    "edu.grade": "التقدير: ممتاز",
    "edu.graduation": "التخرج المتوقع: يونيو 2026",

    // Contact
    "contact.title": "تواصل معي",
    "contact.subtitle": "لا تتردد في التواصل للتعاون أو لمجرد محادثة ودية",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.phone": "واتساب",
    "contact.chatOnWhatsapp": "تواصل معي",
    "contact.emailLabel": "البريد الإلكتروني",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.built": "تم البناء بـ React و Tailwind CSS",
  },
};
