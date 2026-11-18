# سایت شخصی حمید مکاری — سورس + خروجی GitHub Pages

نسخه فارسی و واکنش‌گرای سایت شخصی حمید مکاری با ۶ تصویر اختصاصی تولیدشده.
سایت صرفاً استاتیک است؛ فریم‌ورک، دیتابیس، سرور یا توکن خاصی نیاز ندارد.

## ساختار پروژه

```text
hamid-makari-github-pages/
├── source/                 # سورس قابل ویرایش
│   ├── index.html
│   └── assets/
│       ├── css/site.css
│       ├── js/site.js
│       ├── images/         # شش تصویر WebP
│       └── favicon.svg
├── build/                  # خروجی آماده انتشار؛ index.html در ریشه آن
│   ├── index.html
│   ├── assets/...
│   └── .nojekyll
├── scripts/build.mjs
├── .github/workflows/pages.yml
└── package.json
```

## روش پیشنهادشده: یک مخزن برای سورس و انتشار خودکار

1. یک Repository جداگانه برای سایت بسازید (مثلاً `hamid-makari`).
2. **محتویات خود پوشه `hamid-makari-github-pages/` را** در ریشه Repository روی شاخه `main` آپلود کنید؛ یعنی `source/`، `build/`، `scripts/`، `.github/` و `package.json` در ریشه باشند، نه داخل یک پوشه اضافی.
3. در GitHub به **Settings → Pages → Build and deployment → Source** بروید و **GitHub Actions** را انتخاب کنید.
4. Workflow موجود در `.github/workflows/pages.yml` در هر push به `main`، فایل‌های `source/` را build کرده و `build/` را منتشر می‌کند.
5. وضعیت انتشار در تب **Actions** قابل مشاهده است.

**نکته:** اگر ZIP را از طریق سایت GitHub آپلود می‌کنید، آن را ابتدا Extract کنید؛ آپلود یک ZIP به مخزن باعث انتشار محتوای داخلی‌اش نمی‌شود. برای حفظ فایل مخفی `.github` هنگام کپی دقت کنید.

## روش جایگزین: انتشار دستی فقط خروجی Build

اگر نیازی به سورس در Repository ندارید، **محتویات پوشه `build/`** یا ZIP جداگانه `hamid-makari-pages-build.zip` را در ریشه Repository منتشر کنید. در **Settings → Pages → Source** گزینه **Deploy from a branch** و سپس شاخه `main` و پوشه `/ (root)` را انتخاب کنید.
دقت کنید خود پوشه `build` را به عنوان پوشه انتشار انتخاب نمی‌کنید؛ **محتویاتش باید در ریشه شاخه انتشار قرار بگیرد**.

## ساخت مجدد روی سیستم

با Node.js نسخه 20 یا جدیدتر:

```bash
npm run build
```

این دستور به نصب پکیج جدید نیاز ندارد و خروجی `build/` را از `source/` می‌سازد. برای مشاهده محلی، `build/index.html` را در مرورگر باز کنید.

## اتصال دامنه .ir

تنظیم NS و رکوردهای DNS در سرویس DNS مربوط به دامنه انجام می‌شود. سپس در **Settings → Pages → Custom domain** دامنه نهایی را تعریف کنید. چون دامنه ثبت‌شده نهایی هنوز مشخص نیست، عمداً فایل `CNAME` در این بسته قرار داده نشده است. برای GitHub Actions نیز تنظیم دامنه باید در تنظیمات Pages انجام شود.

## اطلاعات تماس موجود در سایت

- تماس: `09353672050` (`tel:+989353672050`)
- تلگرام: `https://t.me/Hamidmakkary`

## درباره تصاویر

تصاویر نمایش‌داده‌شده بازآفرینی‌شده با هوش مصنوعی از تصویر مرجع هستند؛ عکس مستندِ محل کار واقعی نیستند. فایل‌های منبع استفاده‌شده در طراحی، در `source/assets/images/` موجود هستند.

## ویرایش محتوا

- متن‌ها و ساختار: `source/index.html`
- رنگ و طراحی: `source/assets/css/site.css`
- منو و انیمیشن: `source/assets/js/site.js`
- تصویرها: `source/assets/images/`
- پس از هر ویرایش برای بروزرسانی خروجی: `npm run build`
