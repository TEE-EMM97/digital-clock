import { Component, OnInit } from "@angular/core";
import { StringifyOptions } from "querystring";

@Component({
  selector: "digital-clock",
  templateUrl: "./digital-clock.component.html",
  styleUrls: ["./digital-clock.component.scss"],
})
export class DigitalClockComponent implements OnInit {
  private daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  private date = new Date();

  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public day: string;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000); // This calls the update method in each second

    this.day = this.daysArray[this.date.getDay()];
    // getDay() returns the day integer format, from 0 to 6 then take corespondent day from the daysArray
  }

  private updateDate(date) {
    const hours = date.getHours(); //gets the hours from date

    this.ampm = hours >= 12 ? "PM" : "AM";

    this.hour = hours % 12; // Makes the hour in 12 hours format.
    this.hour = this.hour ? this.hour : 12; //if the hour is 0 then 12 is assigned to it
    this.hour = this.hour < 10 ? "0" + this.hour : this.hour; // If the hour is single digit, then adds 0 infront.

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? "0" + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? "0" + seconds : seconds.toString();
  }
}
