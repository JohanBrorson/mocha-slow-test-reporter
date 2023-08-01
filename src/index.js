const Mocha = require("mocha");
const { EVENT_RUN_END, EVENT_TEST_END } = Mocha.Runner.constants;

const titleColumnWidth = 80;
const durationColumnWidth = 10;
const titleHeader = "Slow tests";
const durationHeader = "Duration";
const fgYellow = "\x1b[33m";
const resetColor = "\x1b[0m";

const byDuration = (a, b) => {
  if (a.duration > b.duration) {
    return -1;
  }
  if (a.duration < b.duration) {
    return 1;
  }
  return 0;
};

const alignCenter = (text, width) => {
  const paddingStart = Math.floor((width + text.length) / 2);
  return text.padStart(paddingStart).padEnd(width);
};

const truncate = (text, maxLength) => {
  return text.length > maxLength
    ? text.slice(0, maxLength - 1) + "\u2026"
    : text;
};

const printHeading = () => {
  console.log(
    `┌${"─".repeat(titleColumnWidth)}┬${"─".repeat(durationColumnWidth)}┐`
  );
  console.log(
    `│${alignCenter(titleHeader, titleColumnWidth)}│${alignCenter(
      durationHeader,
      durationColumnWidth
    )}│`
  );
  console.log(
    `├${"─".repeat(titleColumnWidth)}┼${"─".repeat(durationColumnWidth)}┤`
  );
};

const printFooter = () => {
  console.log(
    `└${"─".repeat(titleColumnWidth)}┴${"─".repeat(durationColumnWidth)}┘`
  );
};

const printTableRow = (title, duration) => {
  console.log(
    `│${truncate(title, titleColumnWidth).padEnd(
      titleColumnWidth
    )}│${fgYellow}${duration.padStart(durationColumnWidth)}${resetColor}│`
  );
};

module.exports = function SlowTestReporter(runner) {
  const slowTests = [];
  runner
    .on(EVENT_TEST_END, (test) => {
      if (test.duration > test._slow) {
        slowTests.push({ title: test.fullTitle(), duration: test.duration });
      }
    })
    .on(EVENT_RUN_END, () => {
      if (slowTests.length > 0) {
        console.log(`🐌 Found ${slowTests.length} slow tests 🐌`);
        slowTests.sort(byDuration);
        printHeading();
        slowTests.forEach((test) => {
          printTableRow(test.title, test.duration.toString());
        });
        printFooter();
      } else {
        console.log("🎉 No slow tests found. Great work! 🎉");
      }
    });
};
