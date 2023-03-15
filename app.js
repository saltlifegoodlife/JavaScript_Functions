function printOdds(count) {
  if (count > 0) {
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  } else {
    console.log("Count was not a correct integer");
  }
}

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (
    userName != null ||
    userName != "" ||
    (userName != undefined && age > 0)
  ) {
    if (age >= 16) {
      console.log(aboveSixteen);
    } else {
      console.log(belowSixteen);
    }
  } else {
    console.log("Please check User name and/or age...");
  }
}

function cartesianPlane(x, y) {
  if (x != null || x != undefined || y != null || y != undefined) {
    if (x == 0 && y == 0) {
      console.log(`(${x},${y}) is at the origin`);
    } else if (x == 0 || y == 0) {
      if (x == 0) {
        console.log(`(${x},${y}) is on the y axis`);
      } else {
        console.log(`(${x},${y}) is on the x axis`);
      }
    } else if (x > 0 && y > 0) {
      console.log(`(${x},${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x},${y}) is in Quadrant 2`);
    } else if (x > 0 && y < 0) {
      console.log(`(${x},${y}) is in Quadrant 4`);
    } else {
      console.log(`(${x},${y}) is in Quadrant 3`);
    }
  } else {
    console.log("Please check x and y numbers");
  }
}

cartesianPlane(-1, -1);

function triangle(a, b, c) {
  console.log(a != b, b != c, a != c);
  if (
    a != null ||
    a != undefined ||
    b != null ||
    b != undefined ||
    c != null ||
    c != undefined
  ) {
    if (a + b > c && b + c > a && c + a > b) {
      if (a == b && b == c) {
        console.log(`(${a},${b},${c}) is a Equilateral triangle.`);
      } else if (a != b && b != c && a != c) {
        console.log(`(${a},${b},${c}) is a scalene triangle.`);
      } else {
        console.log(`(${a},${b},${c}) is a Isosceles triangle.`);
      }
    }
  } else {
    console.log("Not a valid triangle");
  }
}

triangle(5, 5, 5);

function phoneDataUsage(planLimit, day, usage) {
  let daysRemaining = 30 - day;
  let avgUsage = planLimit / 30;
  let userAvgUsg = usage / day;
  console.log(avgUsage, userAvgUsg);
  let currentUse;
  let userOverUsg = userAvgUsg * 30 - planLimit;
  let correctedUsg = (planLimit - usage) / daysRemaining;
  //if exceeding usage
  if (userAvgUsg > avgUsage) {
    currentUse = `EXCEEDING for your average daily use at (${userAvgUsg.toFixed(
      2
    )}) GB/day, \n\
    you'll exceed your data plan by (${userOverUsg}) GB. \n\
    To stay below your data plan, use no more than (${correctedUsg.toFixed(
      2
    )}) GB/day.`;
  }
  //if under usage
  else if (userAvgUsg < avgUsage) {
    currentUse = `UNDER for your average daily use at (${userAvgUsg.toFixed(
      2
    )}) GB/day, \n\
    you won't hit your data cap at the end of month and (${userOverUsg.toFixed(
      2
    )}) GB will not roll over. \n\
    You can increase to (${correctedUsg.toFixed(
      2
    )}) GB/ day to meet end of month data at ${planLimit} GB.`;
  }
  //on track with usage
  else {
    currentUse = `ON TRACK for your average daily use (${userAvgUsg.toFixed(
      2
    )}) GB/day to meet end of month data at ${planLimit} GB.`;
  }
  //
  console.log(`${day} days used, ${daysRemaining} remaining. \n\
  Plan average daily usage: (${avgUsage.toFixed(2)}) GB/day \n\
  You are currently ${currentUse}`);
}

phoneDataUsage(100, 15, 50);
