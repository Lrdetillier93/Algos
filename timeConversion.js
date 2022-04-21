/*Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
*/

const str1 = "07:05:45PM"
const expected = "19:05:45"

const str2 = "12:40:22AM"
const expected2 = "00:40:22"

const str3 = "12:45:54PM"
const expected3 = "12:45:54"

function timeConversion(s) {
    if (s.includes("AM")) {
        const strArr = s.split(":");
        let hours = strArr[0]
        if (hours === "12") {
            strArr[0] = "00";
            strArr[2] = strArr[2].replace("AM", "")
        }
        else strArr[2] = strArr[2].replace("AM", "");
        return strArr.join(":");
    }
    if (s.includes("PM")) {
        const strArr = s.split(":");
        let hours = strArr[0];
        if (hours === "12") {
            strArr[2] = strArr[2].replace("PM", "")
        }
        else {
            hours = parseInt(hours);
            hours = hours + 12;
            hours = hours.toString();
            strArr[0] = hours;
            strArr[2] = strArr[2].replace("PM", "")
        }
        return strArr.join(":")
    }
}

console.log(timeConversion(str1));
console.log(timeConversion(str2));
console.log(timeConversion(str3));