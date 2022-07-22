var x = [0, 3000, 1131, 1085, 1132, 702, 2710, 1241, 928, 711, 1158, 2912, 982, 2314, 415, 2063, 2987, 1656, 2098, 573, 1405, 530, 2877, 2302, 1900, 125, 2074, 146, 810, 1437, 1775, 2192, 1004, 1920, 2022, 2455, 2465, 853, 838, 1526, 283, 1149, 1881, 857, 595, 1376, 1399, 2151, 1810, 1059, 668, 1595, 93, 1913, 1509, 1864, 2440, 2263, 2697, 1856, 2271, 757, 981, 1638, 1217, 833, 2776, 1931, 2766, 470, 1785, 326, 714, 1109, 390, 695, 18, 922, 2126, 614, 1175, 59, 2080, 727, 2296, 2669, 870, 2001, 1741, 1816, 2757, 679, 1210, 1035, 2366, 631, 16, 82, 2946, 281, 2850, 1599, 1136, 386, 326, 2936, 1539, 1818, 499, 2864, 2731, 1538, 1634, 1959, 1152, 1410, 2192, 2158, 2766, 2482, 2226, 166, 61, 991, 2154, 2881, 1905, 969, 426, 628, 1378, 1083, 1558, 682, 460, 1962, 2863, 1052, 2785, 1817, 844, 1200, 1261, 1204, 612, 304, 2835, 2284, 978, 2205, 455, 2427, 2496, 243, 947, 1440, 1888, 1294, 2254, 573, 2110, 2205, 825, 343, 2449, 2391, 2236, 270, 2244, 427, 1113, 862, 656, 1164, 1750, 1708, 245, 1253, 2377, 2261, 416, 1793, 1943, 540, 1023, 2822, 1350, 2106, 291, 203, 2820, 2483, 1837, 2863, 568, 574, 180, 2788, 2927, 2573, 1030, 1341, 177, 783, 1485, 1683, 2677, 1034, 2772, 510, 2394, 1221, 986, 2834, 1152, 2716, 1686, 1688, 1806, 2877, 2428, 463, 925, 2627, 1318, 2426, 1021, 1328, 2895, 635, 2215, 2561, 1420, 2384, 627, 685, 1748, 2542, 2738, 2518, 1305, 1092, 1798, 2315, 495, 1169, 753, 2901, 1773, 936, 1915, 1840, 1458, 2394, 104, 2284, 2138, 1332, 1898, 821, 2225, 851, 227, 2736, 2487, 926, 1013, 2944, 2044, 2292, 1077, 2151, 2438, 2253, 869, 664, 1240, 1565, 866, 2693, 1677, 2278, 2877, 356, 1030, 708, 413, 1856, 2057, 2263, 1509, 309, 1899, 2053, 2842, 1259, 2014, 1415, 1953, 2135, 302];
for (let i = 1; i <= 300; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    console.log("day " + day);
    console.log("year " + year);
    console.log("month " + month);
    console.log("date " + date);
    console.log(xx);
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 1 || i == 12 || i == 15 || i == 19 || i == 3 || i == 21) {
        xx = xx % 10;
        xx += 82;
    } else {
        xx = xx % 15;
        xx += 83;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}
