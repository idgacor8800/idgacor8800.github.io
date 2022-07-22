var x = [0, 2644, 2230, 1693, 2609, 2702, 4003, 3938, 3789, 2981, 3468, 2038, 1987, 3342, 3636, 3308, 1770, 2466, 1520, 2615, 3454, 2125, 4434, 4425, 4700, 4721, 1537, 4275, 4750, 4017, 2921, 3817, 3414, 2383, 4174, 3697, 4314, 1892, 4601, 4193, 2430, 4643, 2757, 4454, 1518, 1789, 2412, 3959, 3388, 3328, 2522, 4724, 2135, 2175, 3709, 1911, 2707, 4083, 3064, 2672, 3487, 2082, 2462, 2564, 4041, 1732, 3028, 3792, 3145, 4030, 4688, 3621, 2095, 2448, 2908, 3974, 3665, 3559, 2711, 1544, 3089, 1834, 3245, 1884, 2571, 1846, 3349, 2588, 4361, 1698, 3259, 2592, 1705, 3691, 3394, 3772, 4593, 1855, 3322, 1883, 2830, 1574, 1580, 3385, 3573, 4837, 4509, 2185, 1710, 1900, 3036, 2510, 3106, 4524, 2743, 3988, 2843, 3626, 4789, 2267, 3413, 1957, 4927, 3870, 2325, 3656, 4845, 2590, 3566, 4819, 1593, 2876, 2861, 3991, 3403, 4684, 2854, 2102, 3249, 4115, 4770, 2377, 3270, 2664, 3069, 4246, 3777, 4630, 4606, 2691, 4862, 4735, 1715, 4759, 3344, 3766, 3002, 2517, 2129, 4463, 3981, 3684, 3751, 1870, 2902, 4402, 1740, 2686, 1583, 3764, 4239, 1826, 4049, 2218, 4104, 2650, 1614, 2792, 1919, 2433, 3017, 2928, 3908, 4623, 4341, 2432, 2794, 4453, 3816, 3360, 2662, 2884, 2713, 2606, 3318, 3260, 4632, 3739, 4518, 4108, 4835, 4679, 2445, 4291, 3431, 3525, 1958, 4166, 3239, 4207, 1984, 2058, 2468, 3703, 2635, 4199, 2970, 4212, 4126, 1939, 3567, 3956, 3361, 4709, 3078, 4793, 4315, 3868, 1632, 3633, 4233, 2203, 2780, 3768, 1589, 3671, 3622, 2922, 4432, 3511, 2201, 1912, 4830, 3862, 2290, 3905, 1604, 2900, 1795, 1801, 3508, 3878, 4145, 3219, 2715, 4615, 3272, 4554, 4186, 2464, 4614, 3858, 3812, 2013, 2049, 1685, 1878, 3053, 3774, 2130, 3484, 3651, 2937, 2233, 3721, 3345, 3801, 2641, 4680, 2729, 2770, 1926, 3066, 3702, 3830, 3891, 3200, 3012, 4578, 2572, 3851, 3191, 3142, 3183, 4756, 3315, 3478, 3635, 3795, 4014, 4165, 2625, 3466, 3666, 2751, 2064, 3582, 3269, 4149, 3325, 3184, 3673, 3338, 1763, 4290, 2536, 3232, 3186, 3748, 3405, 4726, 1749, 2692, 3696, 1716, 3444, 2673, 1808, 2245, 1970, 3377, 2091, 4773, 4821, 2296, 4504, 1981, 2669, 1663, 2482, 2980, 3252, 2915, 2044, 4880, 3769, 4324, 3160, 2196, 3375, 2401, 1587, 2809, 4348, 4761, 2212, 3770, 4294, 3531, 2471, 3246, 3676, 1532, 4099, 4472, 2344, 1602, 4705, 4883, 2781, 2599, 3416, 4273, 2652, 4277, 3562, 2158, 3295, 3180, 4142, 1917, 4634, 3137, 4002, 3004, 3063, 1897, 3070, 4133, 4696, 2857, 3743, 3364, 4196, 1937, 2035, 3505, 1908, 4769, 2001, 4823];
for (let i = 1; i <= 400; i++) {
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
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 1 || i == 12 || i == 22 || i == 32 || i == 31 || i == 98) {
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
