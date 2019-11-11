import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-calendar',
  templateUrl: './add-to-calendar.component.html',
  styleUrls: ['./add-to-calendar.component.css']
})
export class AddToCalendarComponent implements OnInit {
  
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() title: string;
  @Input() timezone: string;
  @Input() details: string;
  @Input() location: string;
  
  public start_date;
  public end_date;
  public final_date = "";
  public event_name = "";
  public href = "";
  public timeZone = "";
  public description = "";
  public loc = "";
  public err_count = 0;
  
  constructor() { 
  }
  
  ngOnInit() {
    
  }

  addToCalendar(){
    if(!this.startDate){
      this.err_count++;
      console.log("Start Date is required");
    }

    if(!this.endDate){
      this.err_count++;
      console.log("End Date is required");
    }

    if(!this.title){
      this.err_count++;
      console.log("Title is required");
    }

    // if(!this.timezone){
    //   this.err_count++;
    //   console.log("Timezone is required");
    // }

    if(!this.details){
      this.err_count++;
      console.log("Details is required");
    }

    if(!this.location){
      this.err_count++;
      console.log("Location is required");
    }

    if(this.err_count == 0){
      this.start_date = this.startDate;
      this.end_date = this.endDate;
      this.event_name = this.title; 
      // this.timeZone = parseInt(this.timezone);
      this.description = this.details;
      this.loc = this.location;
      
        
      // this.start_date.setHours(this.start_date.getHours() + this.timeZone);
      // this.end_date.setHours(this.end_date.getHours() + this.timeZone);
            
      this.final_date = this.format_date(this.start_date) + "/" + this.format_date(this.end_date);
      this.href = "https://www.google.com/calendar/render?action=TEMPLATE&text="+ this.event_name +"&dates="+ this.final_date +"&details="+ this.description +"&location="+ this.loc +"&sf=true&output=xml";
      window.open(
        this.href,'_blank'
      );
    }else{
      console.log("Please fill form data");
      return false;
    }
  }
  
  zero_pad2(num) {
    if(num < 10) return "0" + num;
      return num;
  }
  
  format_date(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    
    var hour = date.getHours();
    var minutes = date.getMinutes();
    
    let formatted_date;
    if(hour === 0 && minutes === 0) {
      formatted_date = ("" + year) + this.zero_pad2(monthIndex + 1) + this.zero_pad2(day);
    } else {
      formatted_date = ("" + year) + this.zero_pad2(monthIndex + 1) + this.zero_pad2(day) + "T" + this.zero_pad2(hour) + this.zero_pad2(minutes) + "00Z";
    }
    
    return formatted_date;
  }
}
