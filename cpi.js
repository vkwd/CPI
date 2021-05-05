var d = document.querySelector("#btnm"),
    g = document.querySelector("form"),
    h = document.querySelector("div.mve"),
    k = document.querySelector("#psbe"),
    m, n;
const conv_factor = 2.88 * 4.63 * 4.93;

function p() {
    if (isNaN(q()) || 3500 > q() || 250000 < q()) {
        return h.style.display = "none", r.textContent = " Basic Pay invalid-Reset", !0;
    }
    r.textContent = "";
    return !1;
}

function q() {
    return parseInt(document.querySelector("#bp1").value);
}
var r = document.querySelector(".message-container");
document.querySelector("#btn").addEventListener("click", function() {
    if (!p()) {
        r.textContent = "";
        var a = parseFloat(document.querySelector("#index1").value),
            b = parseFloat(document.querySelector("#index2").value),
            c = parseFloat(document.querySelector("#index3").value),
            l = q();
        a = +(conv_factor * a).toFixed(2);
        b = +(conv_factor * b).toFixed(2);
        c = +(conv_factor * c).toFixed(2);
        console.log(a, b, c);
        b = +((a + b + c) / 3).toFixed(2);
        //console.log(b);
        if (1 == k.checked) {
            return m = 0.2618, n = 374, e = Math.round((b - 6352) / 4),
                f = 7E-4 * e, f = +f.toFixed(4), a = l * f - .2618 * l, a = +a.toFixed(2), t(b, a), console.log(a, e, f, );
            !1;

        }
        n = 852;
        m = 0.852;
        e = Math.round((b - 4440) / 4);
        console.log(e);
        f = .001 * e;
        f = +f.toFixed(4);
        a = l * f - l * m;
        a = +a.toFixed(2);
        //console.log(e, f, a);
        t(b, a);

    }
});
d.addEventListener("click", function() {
    r.innerHTML = "";
    g.reset();
    h.style.display = "none";
    window.location.reload();
});

function t(a, b) {
    var c = e;
    console.log(c);
    document.querySelector("#first").innerHTML = " Last Quarterly Average(QA) <b>:7849<br>\n  DA rate-quarter ending April 21 : " + (100 * m).toFixed(2) + "%\n   <br> Slabs paid : " + n;
    document.querySelector("#second").innerHTML = "<br>\n QA (Jan,Feb,March 21) <b>: " + (a) + "\n   <br> Slabs payable : " + c + "\n <br> Gain/Loss in slabs : " + (c - n);
    document.querySelector("#third").innerHTML = "\n <br>DA rate for quarter (May, June, July 21): \n " + f + "\n<br>DA payable for the quarter : \n<br>" + (100 * f).toFixed(2) + "% of basic pay";
    document.querySelector("#fourth").innerHTML = "\nGain/loss over last quarter: \u20b9 " + b + "\n" + "<br>";
    document.querySelector("#fifth").innerHTML = "<br>\n There shall be no change in Payment of DR to Pensioners. DR, in their case, will be reviewed on July 30, 21 after the CPI data for  June 21 is released.";
};
//© 2009 Google - Terms of Service - Privacy Policy - Google Ho