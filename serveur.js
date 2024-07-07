const mysql = require('mysql2');

// تكوين الاتصال بقاعدة البيانات
const connection = mysql.createConnection({
  host: 'localhost', // أو أي عنوان IP لخادم MySQL
  user: 'root', // اسم المستخدم لقاعدة البيانات
  password: 'password', // كلمة المرور لقاعدة البيانات
  database: 'mydatabase' // اسم قاعدة البيانات التي ترغب في الاتصال بها
});

// الاتصال بقاعدة البيانات
connection.connect((err) => {
  if (err) {
    console.error('خطأ في الاتصال بقاعدة البيانات:', err);
    return;
  }
  console.log('تم الاتصال بنجاح إلى قاعدة البيانات MySQL!');
});
