var second=0;
var hour=0;
var minute=0;
//stopwatch=document.getElementById(stop-watch);
var start=0;
var stop =1;

function startstopwatch()
{
    if (stop==1)
    {
        run_stop_watch();
    }
}
function run_stop_watch() 
{
    if(second<60)
    {
        second++;
    }
    else
    {
        second=0;
        if(minute<60)
        {
            minute++;
        }
        else
        {
            minute=0;
            hour++;
        }
    }
    console.log( second+':'+minute+':'+hour);


}
 ;
run_stop_watch() ;
var intervalID;

intervalID = setInterval(run_stop_watch, 1000);


    