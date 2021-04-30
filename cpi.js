var d = document.querySelector("#btnm"),
    g = document.querySelector("form"),
    h = document.querySelector("div.mve"),
    k = document.querySelector("#psbe"),
    m, n;

function p() {
    if (isNaN(q()) || 3500 > q() || 250000 < q()) {
        return h.style.display = "none", r.textContent = " Basic Pay invalid-Reset", !0;
    }
    // if (isNaN(parseFloat(document.querySelector("#index3").value))) {
    //     return r.textContent = "index no is  invalid", !0;
    // }
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
        a = +(65.73892 * a).toFixed(2);
        b = +(65.73892 * b).toFixed(2);
        c = +(65.73892 * c).toFixed(2);
        b = +((a + b + c) / 3).toFixed(2);
        if (1 == k.checked) {
            return m = 0.2618, n = 374, e = Math.floor((b - 6352) / 4), f = 7E-4 * e, f = +f.toFixed(4), a = l * f - .2618 * l, a = +a.toFixed(2), t(b, a), !1;
        }
        n = 852;
        m = 0.852;
        e = Math.floor((b - 4440) / 4);
        f = .001 * e;
        f = +f.toFixed(4);
        a = l * f - l * m;
        a = +a.toFixed(2);
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
    document.querySelector("#first").innerHTML = " Last Quarterly Average(QA) <b>:7849<br>\n  DA rate-quarter ending April 21 : " + (100 * m).toFixed(2) + "%\n   <br> Slabs paid : " + n;
    document.querySelector("#second").innerHTML = "<br>\n QA (Jan,Feb,March 21) <b>: " + Math.round(a) + "\n   <br> Slabs payable : " + c + "\n <br> Gain/Loss in slabs : " + (c - n);
    document.querySelector("#third").innerHTML = "\n <br>DA rate for quarter (May, June, July 21): \n " + f + "\n<br>DA payable for the quarter : \n<br>" + (100 * f).toFixed(2) + "% of basic pay";
    document.querySelector("#fourth").innerHTML = "\nGain/loss over last quarter: \u20b9 " + b + "\n" + "<br>";
    document.querySelector("#fifth").innerHTML = "<br>\n There shall be no change in Payment of DR to Pensioners. DR, in their case, will be reviewed on July 30, 21 after the CPI data for  June 21 is released.";
};
//© 2009 Google - Terms of Service - Privacy Policy - Google Ho