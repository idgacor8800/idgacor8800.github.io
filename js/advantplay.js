var x = [0, 4439, 3919, 4825, 3145, 4720, 3651, 4374, 4020, 3991, 3866, 3822, 4632, 3858, 4517, 3897, 3521, 3156, 4063, 3786, 4903, 4316, 4432, 4216, 3378, 3771, 3836, 3383, 3207, 4846, 4243, 4115, 4548, 4818, 4698, 4472, 3793, 4207, 4594, 4745, 4026, 4844, 4059, 4395, 4089, 4360, 4182, 4258, 4816, 3293, 4743, 3280, 4187, 4076, 3121, 3726, 4430, 4269, 4479, 3458, 4495, 4373, 4341, 3823, 4546, 3790, 4458, 3935, 4168, 4887, 3537, 3604, 4392, 4820, 4567, 4587, 3514, 4802, 4822, 3110, 4505, 3885, 4312, 4772, 4053, 4773, 3503, 4705, 3783, 4515, 4172, 3544, 3592, 3203, 3186, 4803, 3668, 4706, 3367, 3140, 3353, 3891, 4646, 4682, 3134, 4355, 4069, 3977, 3716, 3551, 3619, 4759, 4514, 3112, 3722, 4579, 3553, 3445, 4536, 3319, 4771, 4836, 3852, 3499, 4224, 4748, 4073, 4591, 3354, 3236, 3855, 4195, 3992, 3775, 3597, 4262, 3313, 3281, 3469, 3523, 3677, 3667, 4922, 3764, 3660, 3483, 3849, 3751, 4427, 3648, 3392, 4305, 3806, 3528, 3724, 4866, 3552, 4545, 4250, 4192, 4229, 3373, 4084, 4712, 4375, 4112, 4839, 3347, 4294, 3388, 3346, 4702, 4695, 4647, 4429, 4843, 4841, 3108, 3868, 3842, 3250, 3792, 3954, 4391, 3106, 4635, 3625, 4593, 3466, 4006, 4153, 4719, 4769, 4639, 4228, 3964, 4456, 4686, 3342, 4534, 37111];
for (let i = 1; i <= 200; i++) {
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

    if (i == 1 || i == 13 || i == 25) {
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
