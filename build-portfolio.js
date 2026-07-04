const fs = require('fs');
const path = require('path');

console.log("🔄 جاري التراجع عن التغييرات وحذف الملفات المؤقتة...");

// 1. المجلدات التي سيتم تنظيفها
const dirs = [
  'public/images/certificates',
  'public/images/projects',
  'public/images/volunteer',
  'public/images/og'
];

// حذف المجلدات بما فيها من ملفات SVG
dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`🗑️ تم حذف المجلد: ${dir}`);
  }
});

// 2. إعادة الامتدادات في ملف البيانات من .svg إلى .jpg
const dataPath = 'src/data/portfolioData.ts';
if (fs.existsSync(dataPath)) {
  let content = fs.readFileSync(dataPath, 'utf8');
  content = content.replace(/\.svg/g, '.jpg');
  fs.writeFileSync(dataPath, content);
  console.log('⏪ تم إرجاع امتدادات الصور إلى .jpg في ملف portfolioData.ts');
}

console.log("✅ تم إلغاء كافة التغييرات بنجاح.");