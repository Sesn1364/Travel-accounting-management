export interface Trip {
    id: string;
    name: string;
    date: string;
  }
  
  export interface Passenger {
    id?: string; // هنگام ثبت نیازی به id نیست، ولی هنگام نمایش هست
    name: string;
    tripId: string;
    dateArrival: string; // اضافه کردن فیلد تاریخ ورود
    numberFamilyMembers: string; // اضافه کردن فیلد تعداد اعضای خانواده
    depositGeneralBudget: string; // اضافه کردن فیلد واریزی به بودجه کل
  }
  