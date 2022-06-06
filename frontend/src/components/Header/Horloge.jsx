function Horloge(params) {
    var d = new Date();
    const month = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
        "Juiller", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    var date = d.getDate() + ' ' + month[d.getMonth()]/*(d.getMonth() + 1)*/ + ' ' + d.getFullYear();
    console.log(date);


    function setTime(params) {
        const t = new Date();
        const time = t.getHours() + ' h ' + t.getMinutes() + ' min ';// + t.getSeconds() + ' sec'
        //console.log(time);
        test.textContent = time;
    }
    setInterval(setTime, 1000)//appelle la fonction tte les sec.
    return <div>
        <p className="horloge">{date}</p>
        <p className="horloge" id="test">...</p>
    </div>
}
export default Horloge;