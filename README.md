# Bugloos_Test_Angular
تست Angular هدف از پیاده سازی این تست ایجاد فرمهای داینامیک در انگولار می باشد. در سیستمهای مدیریت فرآیند اطلاعات فرم و دادهای قابل نمایش در فرم بصورت پویا تعریف می شود و فرمهای بصورت پویا در سیستم تولید شده و به کاربران نمایش داده می شود. فرایندها و حقوق دسترسی به فرمها نیز بصورت پویا تعریف شده و در فرمها کنترل خواهد شد. در این تست می خواهیم بخش کوچکی از این سرویس را پیاده سازی کنیم. در این بخش شما می بایست سرویسی پیاده سازی کنید که بعنوان تنظیمات اولیه تعریف فرم و تنظیمات فرم را دریافت نموده و براساس تعریف انجام شده فرم بصورت اتوماتیک تولید شده و به کاربران نمایش داده شود. این سرویس می بایست قابلیتهای زیر را دارا باشد: 1 .در سرویس بعنوان تنظیمات الیه ما فیلدهای فرم و نوع هر فیلد و تنظیمات اولیه فیلد را تعریف می کنم. مشخصات قابل تعریف به شرح زیر می باشد. براساس این تعریف فرم تولید خواهد شد: a .عنوان فیلد b .عنوان نمایشی c .نوع فیلد i .عددی ii .رشته ای iii .توضیحات متنی و html iv .تاریخ v .بازه تاریخی vi .انتخاب از لیست vii .رادیویی viii .چک باکس  d .توضیحات فیلد e .وضعیت اجباری و یا اختیاری f .اعتبارسنجی : برای داده های ورودی فرمت تعریف شود. بطور مثال فرمت تلفن را در وردی تعریف کنیم g .فرمت نمایش اطلاعات. بطور مثال بتوان تعریف نمود که اعداد بصورت سه رقمی با کاما جدا شوند h .سطح دسترسی: برای هر فیلد باید بتوانیم سطح دسترسی تعریف کنیم. بطور مثال در یک مرحله از ورود اطلاعات فیلدهای مختلف فقط توسط افراد خاصی قابل ویرایش خواهد بود و یا اینکه اطلاعات برای کاربر نمایش داده می شود.  2 .بر روی فرم می توانیم امکانات مختلفی مانند delete, new, edit داشته باشیم. بنابراین باید قسمتی در فرم وجود داشته باشد که بتوان تعریف نمود در این مرحله چه عملیاتی بر روی فرم مجاز هست و بر اساس تعریف انجام شده عملیات فرم تعریف می شود 3 .در هر فرم قبل و بعد از هر عملیات بتوان سرویسهای مختلفی که در فرم تعریف شده فرا خوانی نمود. بطور مثال بتوان قبل از ثبت اطلاعات سرویسی فراخوانی نمود و بعد از ثبت فرم سرویس دیگری فراخوانی نمود. این عملیات برای view, delete,new, edit قابل تنظیم خواهد بود. 4 .فرمها در دو قالب الگوهای دلخواه و الگوهای سفارشی قابل نمایش باشد. بطور مثال اگر از قبل الگوی مشخصی برای فرم تعریف نشده بود اطلاعات بر اساس ترتیب تعریف در فرم خروجی تولید می شود و در صورت نیاز کاربر بتواند الگوی نمایش فرم را تنظیم نماید و فرمها با الگوی دلخواه کاربر نمایش داده شود. 5 .برای نمایش فرمها و داده ها بتوان حقوق دسترسی تعریف نمود و صرفا فردی که به فرم و یا به داده دسترسی دارد اطلاعات را مشاهده کند
