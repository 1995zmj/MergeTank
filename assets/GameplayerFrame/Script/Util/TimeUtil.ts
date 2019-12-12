export class TimeUtil
{
    /** Gets the time value in milliseconds. */
    static getCurrentTime(): number
    {
        let timeDate = new Date();
        return timeDate.getTime();
    }

    static getTimeFormat(remainTime): string
    {
        var day = parseInt((remainTime / 86400).toString());
        var hour = parseInt(((remainTime - day*86400) / 3600).toString());
        var minit = parseInt(((remainTime -day*86400 - hour * 3600) / 60).toString());
        var second = remainTime - day*86400 - hour * 3600 - minit * 60;
        hour = hour  + day * 24;
        let time = (hour < 10 ? ('0' + hour) : hour) + ':' + (minit < 10 ? ('0' + minit) : minit) + ':' + (second < 10 ? ('0' + second) : second);
        return time;
    }

    static getTimeFormatMS(remainTime): string
    {
        var day = parseInt((remainTime / 86400).toString());
        var hour = parseInt(((remainTime - day*86400) / 3600).toString());
        var minit = parseInt(((remainTime -day*86400 - hour * 3600) / 60).toString());
        var second = remainTime - day*86400 - hour * 3600 - minit * 60;
        hour = hour  + day * 24;
        let time = "00:00";
        if(hour == 0)
        {
            time = (minit < 10 ? ('0' + minit) : minit) + ':' + (second < 10 ? ('0' + second) : second);
        }
        else
        {
            time = (hour < 10 ? ('0' + hour) : hour) + ':' + (minit < 10 ? ('0' + minit) : minit) + ':' + (second < 10 ? ('0' + second) : second);
        }
        return time;
    }

    static getTimeFormatText(totalSecs, showSec:boolean=true): string
    {
        let day = Math.floor(totalSecs / 86400);
        let hour = Math.floor((totalSecs % 86400) / 3600);
        let min = Math.floor((totalSecs % 3600) / 60);
        let sec = Math.floor((totalSecs % 60));
        let timeString = "";
        if (day > 0)
            timeString = timeString + day + "d "
        if (hour > 0)
            timeString = timeString + hour + "h "
        if (min > 0)
            timeString = timeString + min + "m "
        if (sec > 0 && showSec)
            timeString = timeString + sec + "s"

        return timeString;
    }

    static getTimeFormatText3(totalSecs, showSec:boolean=true): string
    {
        let day = Math.floor(totalSecs / 86400);
        let hour = Math.floor((totalSecs % 86400) / 3600);
        let min = Math.floor((totalSecs % 3600) / 60);
        let sec = Math.floor((totalSecs % 60));
        let timeString = "";
        if (day > 0)
            timeString = timeString + day + "d "
        // if (hour > 0)
            timeString = timeString + (hour < 10 ? ('0' + hour) : hour) + ':'
        // if (min > 0)
            timeString = timeString + (min < 10 ? ('0' + min) : min) + ':'
        // if (sec > 0 && showSec)
            timeString = timeString + (sec < 10 ? ('0' + sec) : sec);

        // if(timeString == "")
        //     timeString = "0s";

        return timeString;
    }

    static getTimeFormatTextFull(totalSecs, showSec:boolean=true): string
    {
        let day = Math.floor(totalSecs / 86400);
        let hour = Math.floor((totalSecs % 86400) / 3600);
        let min = Math.floor((totalSecs % 3600) / 60);
        let sec = Math.floor((totalSecs % 60));
        let timeString = "";
        if (day > 0)
            timeString = timeString + day + "d "
        if (hour > 0)
            timeString = timeString + hour + "hr "
        if (min > 0)
            timeString = timeString + min + "min "
        if (sec > 0 && showSec)
            timeString = timeString + sec + "sec"

        return timeString;
    }

    static isOneDay(perTime, nowTime):boolean
    {
        var per = new Date(parseInt(perTime));
        var now = new Date(parseInt(nowTime));
        if (per.getFullYear() == now.getFullYear())
        {
            if (per.getMonth() == now.getMonth())
            {
                if (per.getDate() == now.getDate())
                {
                    return true;
                }
            }
        }
        return false;
    }

}