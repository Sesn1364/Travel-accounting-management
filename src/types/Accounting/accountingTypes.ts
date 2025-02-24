export interface Trip {
    id: string;
    name: string;
    date: string;
  }
  
  export interface Passenger {
    id?: string; // هنگام ثبت نیازی به id نیست، ولی هنگام نمایش هست
    name: string;
    tripId: string;
  }
  