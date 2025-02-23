import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // برای گرفتن پارامتر از URL

const AccountingManagement: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>(); // گرفتن tripId از URL
  const [trip, setTrip] = useState<any>(null);

  useEffect(() => {
    // اینجا باید داده‌های مربوط به tripId را بارگذاری کنید
    // به عنوان مثال، با استفاده از tripId به API درخواست بفرستید یا از state محلی استفاده کنید
    // فرض می‌کنیم tripId درست است و از آن استفاده می‌کنیم.
    console.log("tripId:", tripId);
    // setTrip(...); // تنظیم داده‌ها در state
  }, [tripId]);

  return (
    <div>
      <h1>مدیریت حسابداری برای سفر {tripId}</h1>
      {/* نمایش جزئیات سفر */}
      {/* اگر داده‌ها لود شدند */}
      {trip ? (
        <div>
          {/* نمایش اطلاعات حسابداری سفر */}
        </div>
      ) : (
        <p>در حال بارگذاری...</p>
      )}
    </div>
  );
};

export default AccountingManagement;
